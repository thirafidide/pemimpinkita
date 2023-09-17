import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { useDroppable } from '@dnd-kit/core';
import { DraggablePoliticalPartyChip } from './DraggablePoliticalPartyChip';

const percentageFormatter = new Intl.NumberFormat('id-ID', {
	maximumFractionDigits: 2,
	style: 'percent',
});

export interface CoalitionSimulationCardProps {
	presidentialCandidate: {
		name: string;
		photo: {
			src: string;
			alt: string;
		};
	};
	vicePresidentialCandidate?: {
		name: string;
		photo: {
			src: string;
			alt: string;
		};
	};
	coalitionId: string;
	coalitionMember: PoliticalPartyId[];
}

export function CoalitionSimulationCard(props: CoalitionSimulationCardProps) {
	const { isOver, setNodeRef, active } = useDroppable({
		id: props.coalitionId,
	});

	const partiesData = props.coalitionMember
		.map((partyId) => politicalPartyData[partyId])
		.sort(
			(partyA, partyB) =>
				(partyB.previousPollPercentResult || 0) -
				(partyA.previousPollPercentResult || 0),
		);

	let totalPreviousPollStanding = 0;
	let totalPreviousDPRSeats = 0;
	for (let { previousPollPercentResult, previousDPRSeats } of partiesData) {
		totalPreviousPollStanding += previousPollPercentResult || 0;
		totalPreviousDPRSeats += previousDPRSeats || 0;
	}

	return (
		<article
			id={props.coalitionId}
			ref={setNodeRef}
			className={cn(
				'flex flex-col gap-6 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4',
				{ 'opacity-50': active && !isOver },
			)}
		>
			<div className={cn('gap-2', { 'hidden md:flex': active, flex: !active })}>
				<CandidatePhoto {...props.presidentialCandidate.photo} />
				{props.vicePresidentialCandidate && (
					<CandidatePhoto {...props.vicePresidentialCandidate.photo} />
				)}
			</div>

			<div>
				<PresidentialCandidateName>
					{props.presidentialCandidate.name}
				</PresidentialCandidateName>

				<VicePresidentialCandidateName>
					{props.vicePresidentialCandidate?.name}
				</VicePresidentialCandidateName>
			</div>

			<p
				className={cn('text-xs flex-col gap-1', {
					'hidden md:flex': active,
					flex: !active,
				})}
			>
				<span className="text-3xl font-extralight">
					{percentageFormatter.format(totalPreviousPollStanding / 100)}
				</span>
				<span className="flex items-center gap-1">
					Perolehan suara partai pendukung pada pemilu 2019
				</span>
			</p>

			<section className="flex flex-col gap-3">
				<div className={cn({ 'hidden md:block': active })}>
					<p className="scroll-m-20 font-semibold tracking-tight">
						Simulasi Koalisi
					</p>
					<p className="text-sm">
						<span className="font-bold text-2xl">{totalPreviousDPRSeats}</span>{' '}
						/ 575 Kursi DPR RI (2019 - 2024)
					</p>
				</div>

				<p className="text-sm">
					Tekan dan seret partai di bawah ini dan taruh di koalisi yang anda
					inginkan
				</p>

				<div className="flex gap-2 flex-wrap">
					{partiesData.map(({ partyId }) => (
						<DraggablePoliticalPartyChip key={partyId} party={partyId} />
					))}
				</div>
			</section>
		</article>
	);
}

function PresidentialCandidateName(props: { children: ReactNode }) {
	return (
		<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors">
			{props.children}
		</h2>
	);
}

function VicePresidentialCandidateName(props: { children?: ReactNode }) {
	return (
		<h2
			className={cn(
				'scroll-m-20 text-xl tracking-tight transition-colors',
				{ 'opacity-40': !props.children },
				{ 'font-semibold': props.children },
			)}
		>
			{props.children ? `& ${props.children}` : 'Belum menentukan Cawapres'}
		</h2>
	);
}

function CandidatePhoto(props: React.ComponentProps<typeof Image>) {
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image
			className="w-28 h-36 object-cover rounded-md"
			priority
			width={112}
			height={144}
			{...props}
		/>
	);
}
