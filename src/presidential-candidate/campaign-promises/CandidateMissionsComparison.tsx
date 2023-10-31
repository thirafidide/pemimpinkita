import { CandidateComparison } from '@/components/CandidateComparison';
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

export function CandidateMissionsComparison() {
	return (
		<Collapsible className="w-full" defaultOpen>
			<CollapsibleTrigger className="w-full">
				<h3 className="text-xl font-bold m-3 p-1 border-b hover:underline">
					Misi
				</h3>
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
			<CandidateMissionsStickyHeader candidatePairId={candidatePairId} />

			{candidatePairMissionData[candidatePairId].map(({ id, title }, index) => (
				<div className="relative p-8" key={id}>
					<div className="absolute text-6xl font-bold opacity-10 italic top-2 left-2">
						{index + 1}
					</div>
					{title}
				</div>
			))}
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
		<div className="px-8 pt-3 mt-1 pb-4 sticky flex flex-col top-0 bg-white z-10 shadow-sm">
			<p className="text-xs">Misi</p>
			<h4 className="font-semibold">
				{presidentialCandidateData.shortName} -{' '}
				{vicePresidentialCandidateData.shortName}
			</h4>
		</div>
	);
}
