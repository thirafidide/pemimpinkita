'use client';

import { useState } from 'react';

import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { CampaignPromisesIntro } from '@/presidential-candidate/campaign-promises/CampaignPromisesIntro';
import { PreviousPollIntro } from '@/presidential-candidate/previous-poll/PreviousPollIntro';
import { CandidateCampaignCard } from '@/presidential-candidate/campaign-promises/CandidateCampaignCard';
import { PartiesNotInCoalitionSection } from '@/political-party/PartiesNotInCoalitionSection';

export default function Home() {
	const [selectedTab, onChangeTabs] = useState('campaign-promises');

	return (
		<main className="flex flex-col gap-12 container p-0 mx-auto">
			<div className="flex flex-col gap-6">
				<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
					Pemilu Presiden 2024
				</h1>

				<Tabs value={selectedTab} onValueChange={onChangeTabs}>
					<TabsList>
						<TabsTrigger value="campaign-promises">Janji Kampanye</TabsTrigger>
						<TabsTrigger value="2019-data">Perolehan Suara 2019</TabsTrigger>
					</TabsList>
				</Tabs>

				{selectedTab === 'campaign-promises' ? (
					<CampaignPromisesIntro />
				) : (
					<PreviousPollIntro />
				)}
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					{selectedTab === 'campaign-promises' && (
						<>
							<CandidateCampaignCard candidatePairId="PRABAN" />
							<CandidateCampaignCard candidatePairId="AMIN" />
							<CandidateCampaignCard candidatePairId="GAMA" />
						</>
					)}
					{selectedTab === '2019-data' && (
						<>
							<CandidateCard candidatePairId="PRABAN" />
							<CandidateCard candidatePairId="AMIN" />
							<CandidateCard candidatePairId="GAMA" />
						</>
					)}
				</div>

				{selectedTab === 'campaign-promises' && (
					<section className="flex flex-col items-center justify-center rounded-lg border bg-secondary text-card-foreground shadow-sm px-4 py-24">
						<p className="text-center font-semibold text-xs">
							🚧 WIP Perbandingan Misi, Program Kerja, Agenda, dll 🚧
						</p>
					</section>
				)}

				{selectedTab === '2019-data' && (
					<PartiesNotInCoalitionSection parties={['PKN', 'BURUH']} />
				)}
			</div>
		</main>
	);
}
