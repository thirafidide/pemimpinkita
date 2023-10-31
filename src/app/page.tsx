'use client';

import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion';
import { PoliticalPartyFlag } from '@/political-party/PoliticalPartyFlag';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { useState } from 'react';
import { CampaignPromisesIntro } from '@/campaign-promises/CampaignPromisesIntro';
import { PreviousPollIntro } from '@/previous-poll/PreviousPollIntro';
import { CandidateCampaignCard } from '@/campaign-promises/CandidateCampaignCard';

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
							<CandidateCampaignCard candidatesId="PRABAN" />
							<CandidateCampaignCard candidatesId="AMIN" />
							<CandidateCampaignCard candidatesId="GAMA" />
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

const percentageFormatter = new Intl.NumberFormat('id-ID', {
	maximumFractionDigits: 2,
	style: 'percent',
});

function PartiesNotInCoalitionSection(props: { parties: PoliticalPartyId[] }) {
	const partiesData = props.parties.map(
		(partyId) => politicalPartyData[partyId],
	);

	let totalPreviousPollStanding = 0;
	let totalPreviousDPRSeats = 0;
	for (let { previousPollPercentResult, previousDPRSeats } of partiesData) {
		totalPreviousPollStanding += previousPollPercentResult || 0;
		totalPreviousDPRSeats += previousDPRSeats || 0;
	}

	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="no-coalition">
				<AccordionTrigger>
					<div className="flex gap-8 items-center justify-between w-full">
						<h2>Partai Nasional yang belum mendeklarasikan dukungan</h2>
						<div className="flex gap-2">
							{props.parties.map((partyId) => (
								<PoliticalPartyFlag key={partyId} party={partyId} />
							))}
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col gap-4">
						<p className="flex flex-1 text-xs flex-col gap-1">
							<span className="text-3xl font-extralight">
								{percentageFormatter.format(totalPreviousPollStanding / 100)}
							</span>
							<span className="flex items-center gap-1">
								Total perolehan suara partai pada pemilu 2019
							</span>
						</p>

						<p className="text-sm">
							<span className="font-bold text-2xl">
								{totalPreviousDPRSeats}
							</span>{' '}
							/ 575 Kursi DPR RI (2019 - 2024)
						</p>

						<div className="flex gap-2 flex-wrap">
							{props.parties.map((partyId) => (
								<PoliticalPartyPopover
									key={partyId}
									id={partyId}
									trigger={<PoliticalPartyChip party={partyId} />}
								/>
							))}
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
