import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import { PreviousPollIntro } from '@/presidential-candidate/previous-poll/PreviousPollIntro';
import { PartiesNotInCoalitionSection } from '@/political-party/PartiesNotInCoalitionSection';
import { CandidateComparison } from '@/components/CandidateComparison';
import { HomepageTabNavigation } from '@/components/HomepageTabNavigation';

export default function Home() {
	return (
		<div className="flex flex-col gap-12 pt-6">
			<div className="flex flex-col gap-6">
				<HomepageTabNavigation path="/kandidat-data-2019" />
				<PreviousPollIntro />
			</div>

			<div className="flex flex-col gap-4">
				<CandidateComparison>
					<CandidateCard candidatePairId="PRABAN" />
					<CandidateCard candidatePairId="AMIN" />
					<CandidateCard candidatePairId="GAMA" />
				</CandidateComparison>

				<PartiesNotInCoalitionSection parties={['PKN', 'BURUH']} />
			</div>
		</div>
	);
}
