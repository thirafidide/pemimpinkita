import { Button } from '@/components/ui/Button';
import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion';
import { PoliticalPartyFlag } from '@/political-party/PoliticalPartyFlag';

export default function Home() {
	return (
		<main className="flex flex-col gap-12 container p-0 mx-auto">
			<div className="flex flex-col gap-6">
				<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
					Pemilu Presiden 2024
				</h1>

				<div className="flex flex-col gap-1 max-w-2xl">
					<p>
						Kondisi sementara kandidat capres-cawapres dan koalisi partai
						pendukungnya pada Pemilihan umum (Pemilu) Presiden Indonesia 2024,
						berdasarkan partai pendukung dan perolehan suara pada Pemilu
						sebelumnya (2019)
					</p>

					<p className="text-sm">
						Sumber Data:{' '}
						<Button variant="link" className="p-0" asChild>
							<Link
								href="https://pemilu2019.kpu.go.id/#/dprri/hitung-suara/"
								target="_blank"
							>
								KPU - Info Publik Pemilu 2019
								<ExternalLink size={14} className="ml-1" />
							</Link>
						</Button>
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-4">
				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					<CandidateCard
						presidentialCandidate="PRABOWO"
						coalition={{
							name: 'Koalisi Indonesia Maju',
							member: [
								'GERINDRA',
								'GOLKAR',
								'DEMOKRAT',
								'PAN',
								'PBB',
								'GARUDA',
								'GELORA',
							],
						}}
					/>

					<CandidateCard
						presidentialCandidate="ANIES"
						vicePresidentialCandidate="IMIN"
						coalition={{
							name: 'Koalisi Perubahan untuk Persatuan',
							member: ['NASDEM', 'PKB', 'PKS', 'UMMAT'],
						}}
					/>

					<CandidateCard
						presidentialCandidate="GANJAR"
						vicePresidentialCandidate="MAHFUDMD"
						coalition={{
							name: 'Kerja Sama Partai Politik Pengusung Ganjar Pranowo',
							member: ['PDIP', 'PPP', 'HANURA', 'PERINDO'],
						}}
					/>
				</div>

				<PartiesNotInCoalitionSection parties={['PSI', 'PKN', 'BURUH']} />
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
