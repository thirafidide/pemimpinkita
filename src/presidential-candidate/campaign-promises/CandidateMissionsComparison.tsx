'use client';

import { useState } from 'react';
import {
	CandidateComparison,
	CandidateComparisonCard,
} from '@/components/CandidateComparison';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/Collapsible';
import { CandidateComparisonItem } from '../../components/CandidateComparison';
import {
	candidatePairData,
	candidatePairMissionData,
} from '../candidatePairData';
import { CandidatePairId } from '../CandidatePair';
import { candidateData } from '../candidateData';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CandidateMissionsComparison() {
	const [isOpen, setOpen] = useState(true);

	return (
		<Collapsible
			className="w-full"
			open={isOpen}
			onOpenChange={(openState) => setOpen(openState)}
		>
			<CollapsibleTrigger className="w-full">
				<div className="text-xl font-bold m-3 p-2 border-b hover:underline flex items-center gap-2 justify-center">
					<ChevronDown
						className={cn({ 'rotate-180': isOpen }, 'transition-transform')}
					/>
					<h3>Misi</h3>
				</div>
			</CollapsibleTrigger>

			<CollapsibleContent className="flex flex-col gap-4">
				<CandidateComparison>
					<CandidateMissions candidatePairId="PRABAN" />
					<CandidateMissions candidatePairId="AMIN" />
					<CandidateMissions candidatePairId="GAMA" />
				</CandidateComparison>
			</CollapsibleContent>
		</Collapsible>
	);
}

function CandidateMissions(props: { candidatePairId: CandidatePairId }) {
	const { candidatePairId } = props;
	return (
		<CandidateComparisonItem>
			<CandidateComparisonCard className="p-0">
				<CandidateMissionsStickyHeader candidatePairId={candidatePairId} />

				{candidatePairMissionData[candidatePairId].map(
					({ id, title }, index) => (
						<div className="relative p-8" key={id}>
							<div className="absolute text-6xl font-bold opacity-10 italic top-2 left-2">
								{index + 1}
							</div>
							{title}
						</div>
					),
				)}
			</CandidateComparisonCard>
		</CandidateComparisonItem>
	);
}

function CandidateMissionsStickyHeader(props: {
	candidatePairId: CandidatePairId;
}) {
	const { candidatePairId } = props;

	const data = candidatePairData[candidatePairId];
	const presidentialCandidateData = candidateData[data.presidentialCandidate];
	const vicePresidentialCandidateData =
		candidateData[data.vicePresidentialCandidate];

	return (
		<div className="px-8 pt-3 mt-1 pb-4 sticky flex flex-col top-0 bg-background z-10 shadow-sm">
			<p className="text-xs">Misi</p>
			<h4 className="font-semibold">
				{presidentialCandidateData.shortName} -{' '}
				{vicePresidentialCandidateData.shortName}
			</h4>
		</div>
	);
}
