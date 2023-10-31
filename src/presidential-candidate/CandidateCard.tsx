import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { politicalPartyData } from '@/political-party/PoliticalParty';
import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { CandidatePhoto } from './CandidatePhoto';
import { candidateData } from './candidateData';
import { CandidatePairId } from './CandidatePair';
import { candidatePairData } from './candidatePairData';
import { CandidateComparisonItem } from '@/components/CandidateComparison';

const percentageFormatter = new Intl.NumberFormat('id-ID', {
	maximumFractionDigits: 2,
	style: 'percent',
});

export interface CandidateCardProps {
	candidatePairId: CandidatePairId;
}

export function CandidateCard(props: CandidateCardProps) {
	const { candidatePairId } = props;

	const data = candidatePairData[candidatePairId];
	const partiesData = data.coalition.member.map(
		(partyId) => politicalPartyData[partyId],
	);

	let totalPreviousPollStanding = 0;
	let totalPreviousDPRSeats = 0;
	for (let { previousPollPercentResult, previousDPRSeats } of partiesData) {
		totalPreviousPollStanding += previousPollPercentResult || 0;
		totalPreviousDPRSeats += previousDPRSeats || 0;
	}

	const presidentialCandidate = candidateData[data.presidentialCandidate];
	const vicePresidentialCandidate =
		candidateData[data.vicePresidentialCandidate];

	return (
		<CandidateComparisonItem className="p-4">
			<div className="flex gap-2">
				<CandidatePhoto
					{...presidentialCandidate.photo}
					partyId={presidentialCandidate.partyId}
					showParty
				/>
				{vicePresidentialCandidate && (
					<CandidatePhoto
						{...vicePresidentialCandidate.photo}
						partyId={vicePresidentialCandidate.partyId}
						showParty
					/>
				)}
			</div>

			<div>
				<PresidentialCandidateName>
					{presidentialCandidate.name}
				</PresidentialCandidateName>

				<VicePresidentialCandidateName>
					{vicePresidentialCandidate?.name}
				</VicePresidentialCandidateName>
			</div>

			<p className="flex text-xs flex-col gap-1">
				<span className="text-3xl font-extralight">
					{percentageFormatter.format(totalPreviousPollStanding / 100)}
				</span>
				<span className="flex items-center gap-1">
					Perolehan suara partai pendukung pada pemilu 2019
				</span>
			</p>

			<section className="flex flex-col gap-3">
				<div>
					<p className="scroll-m-20 font-semibold tracking-tight">
						{data.coalition.name}
					</p>
					<p className="text-sm">
						<span className="font-bold text-2xl">{totalPreviousDPRSeats}</span>{' '}
						/ 575 Kursi DPR RI (2019 - 2024)
					</p>
				</div>

				<div className="flex gap-2 flex-wrap">
					{data.coalition.member.map((partyId) => (
						<PoliticalPartyPopover
							key={partyId}
							id={partyId}
							trigger={<PoliticalPartyChip party={partyId} />}
						/>
					))}
				</div>
			</section>
		</CandidateComparisonItem>
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
