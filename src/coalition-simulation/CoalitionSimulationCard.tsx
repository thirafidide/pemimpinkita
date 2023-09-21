import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { useDroppable } from '@dnd-kit/core';
import { DraggablePoliticalPartyChip } from './DraggablePoliticalPartyChip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const PRESIDENTIAL_TRESHOLD_WITH_DPR_SEATS_PERCENT = 20;
const PRESIDENTIAL_TRESHOLD_WITH_DPR_VOTE_PERCENT = 25;
const TOTAL_DPR_SEATS = 575;

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

	const isAbovePresidentialTresholdWithDPRSeats =
		(totalPreviousDPRSeats / TOTAL_DPR_SEATS) * 100 >=
		PRESIDENTIAL_TRESHOLD_WITH_DPR_SEATS_PERCENT;

	const isAbovePresidentialTresholdWithDPRVote =
		totalPreviousPollStanding >= PRESIDENTIAL_TRESHOLD_WITH_DPR_VOTE_PERCENT;

	const isAbovePresidentialTreshold =
		isAbovePresidentialTresholdWithDPRSeats ||
		isAbovePresidentialTresholdWithDPRVote;

	const warningStripeStyle = {
		borderImage: `repeating-linear-gradient(
				45deg,
				#222,
				#222 4px,
				#fff600 4px,
				#fff600 8px
			) 4 / 1 / 0 stretch`,
	};

	return (
		<article
			id={props.coalitionId}
			ref={setNodeRef}
			className={cn(
				'flex-1 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden',
				{ 'opacity-50': active && !isOver },
			)}
		>
			<div
				className="flex flex-col gap-6 p-4 pb-0 h-full border-solid border-y-4"
				style={warningStripeStyle}
			>
				<div className="flex gap-2">
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
					className={cn('flex text-xs flex-col gap-1', {
						'text-destructive': !isAbovePresidentialTreshold,
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
					<div
						className={cn({
							'text-destructive': !isAbovePresidentialTreshold,
						})}
					>
						<p className="scroll-m-20 font-semibold tracking-tight">
							Koalisi Simulasi
						</p>
						<p className="text-sm">
							<span className="font-bold text-2xl">
								{totalPreviousDPRSeats}
							</span>{' '}
							/ 575 Kursi DPR RI (2019 - 2024)
						</p>
					</div>

					{!isAbovePresidentialTreshold && (
						<Alert variant="destructive" className="p-3">
							<AlertCircle className="h-4 w-4" />
							<AlertTitle>Tidak lolos persyaratan</AlertTitle>
							<AlertDescription>
								Sesuai{' '}
								<Button
									className="p-0 italic h-auto text-destructive"
									variant="link"
									asChild
								>
									<Link
										href="https://peraturan.bpk.go.id/Details/37644/uu-no-7-tahun-2017"
										target="_blank"
									>
										Pasal 222 UU Pemilu
									</Link>
								</Button>
								, Koalisi pengusung harus melewati ambang batas 20% jumlah kursi
								di DPR atau memperoleh 25% dari suara nasional pada pemilu DPR
								periode sebelumnya.
							</AlertDescription>
						</Alert>
					)}

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

				<div className="flex-1 -mt-6" />

				<div className="flex bg-foreground text-background px-4 py-2 -mx-4 text-xs">
					<p className="font-semibold">Simulasi Koalisi</p>
					<div className="flex-1" />
					<p>PemimpinKita.org</p>
				</div>
			</div>
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
