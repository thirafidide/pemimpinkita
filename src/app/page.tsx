'use client';

import { useState } from 'react';

import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { CampaignPromisesIntro } from '@/presidential-candidate/campaign-promises/CampaignPromisesIntro';
import { PreviousPollIntro } from '@/presidential-candidate/previous-poll/PreviousPollIntro';
import { CandidateCampaignCard } from '@/presidential-candidate/campaign-promises/CandidateCampaignCard';
import { PartiesNotInCoalitionSection } from '@/political-party/PartiesNotInCoalitionSection';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion';
import {
	CandidateComparison,
	CandidateComparisonItem,
} from '@/components/CandidateComparison';
import { candidatePairMissionData } from '@/presidential-candidate/candidatePairData';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/Collapsible';

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
				<CandidateComparison>
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
				</CandidateComparison>

				{selectedTab === 'campaign-promises' && (
					<>
						<Collapsible className="w-full" defaultOpen>
							<CollapsibleTrigger className="w-full">
								<h3 className="text-xl font-bold m-3 p-1 border-b hover:underline">
									Misi
								</h3>
							</CollapsibleTrigger>

							<CollapsibleContent className="flex flex-col gap-4">
								<CandidateComparison className="hidden md:flex md:sticky top-0 z-10">
									<CandidateComparisonItem className="p-4">
										Prabowo - Gibran
									</CandidateComparisonItem>
									<CandidateComparisonItem className="p-4">
										Anies - Imin
									</CandidateComparisonItem>
									<CandidateComparisonItem className="p-4">
										Ganjar - Mahfud MD
									</CandidateComparisonItem>
								</CandidateComparison>

								<CandidateComparison>
									<CandidateComparisonItem>
										<div className="p-8 mt-1 sticky flex top-0 bg-white md:hidden z-10 shadow-sm">
											Prabowo - Gibran
										</div>

										{candidatePairMissionData['PRABAN'].map(
											({ id, title }, index) => (
												<div className="relative p-8" key={id}>
													<div className="absolute text-6xl font-bold opacity-10 italic top-2 left-2">
														{index + 1}
													</div>
													{title}
												</div>
											),
										)}
									</CandidateComparisonItem>
									<CandidateComparisonItem>
										<div className="p-8 mt-1 sticky flex top-0 bg-white md:hidden z-10 shadow-sm">
											Anies - Imin
										</div>

										{candidatePairMissionData['AMIN'].map(
											({ id, title }, index) => (
												<div className="relative p-8" key={id}>
													<div className="absolute text-6xl font-bold opacity-10 italic top-2 left-2">
														{index + 1}
													</div>
													{title}
												</div>
											),
										)}
									</CandidateComparisonItem>
									<CandidateComparisonItem>
										<div className="p-8 mt-1 sticky flex top-0 bg-white md:hidden z-10 shadow-sm">
											Ganjar - Mahfud MD
										</div>

										{candidatePairMissionData['GAMA'].map(
											({ id, title }, index) => (
												<div className="relative p-8" key={id}>
													<div className="absolute text-6xl font-bold opacity-10 italic top-2 left-2">
														{index + 1}
													</div>
													{title}
												</div>
											),
										)}
									</CandidateComparisonItem>
								</CandidateComparison>
							</CollapsibleContent>
						</Collapsible>

						<section className="flex flex-col items-center justify-center rounded-lg border bg-secondary text-card-foreground shadow-sm px-4 py-24">
							<p className="text-center font-semibold text-xs">
								🚧 WIP Perbandingan Program Kerja, Agenda, dll 🚧
							</p>
						</section>
					</>
				)}

				{selectedTab === '2019-data' && (
					<PartiesNotInCoalitionSection parties={['PKN', 'BURUH']} />
				)}
			</div>
		</main>
	);
}
