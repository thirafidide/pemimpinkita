import { CampaignPromisesIntro } from '@/presidential-candidate/campaign-promises/CampaignPromisesIntro';
import { CandidateCampaignCard } from '@/presidential-candidate/campaign-promises/CandidateCampaignCard';
import { CandidateComparison } from '@/components/CandidateComparison';
import { CandidateMissionsComparison } from '@/presidential-candidate/campaign-promises/CandidateMissionsComparison';
import { HomepageTabNavigation } from '@/components/HomepageTabNavigation';

export default function Home() {
	return (
		<div className="flex flex-col gap-12 pt-6">
			<div className="flex flex-col gap-6">
				<HomepageTabNavigation path="/" />
				<CampaignPromisesIntro />
			</div>

			<div className="flex flex-col gap-4">
				<CandidateComparison>
					<CandidateCampaignCard candidatePairId="PRABAN" />
					<CandidateCampaignCard candidatePairId="AMIN" />
					<CandidateCampaignCard candidatePairId="GAMA" />
				</CandidateComparison>

				<CandidateMissionsComparison />

				<section className="flex flex-col items-center justify-center rounded-lg border bg-secondary text-card-foreground shadow-sm px-4 py-24">
					<p className="text-center font-semibold text-xs">
						🚧 WIP Perbandingan Program Kerja, Agenda, dll 🚧
					</p>
				</section>
			</div>
		</div>
	);
}
