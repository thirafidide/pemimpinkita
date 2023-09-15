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

export default function Home() {
	return (
		<div className="min-h-screen bg-[#FCFCFC] p-8 lg:p-24 pt-20">
			<main className="flex flex-col gap-12 container p-0 mx-auto">
				<div className="flex flex-col gap-5 max-w-2xl">
					<p className="scroll-m-20 text-xl font-extrabold tracking-tight">
						<span className="bg-black px-4 py-2 -m-4 text-white">
							PemimpinKita.org
						</span>
					</p>

					<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
						Pemilu Presiden 2024
					</h1>

					<div className="flex flex-col gap-1">
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

				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					<CandidateCard
						presidentialCandidate={{
							name: 'Prabowo Subianto',
							photo: {
								src: '/foto-kandidat/Prabowo_Subianto.jpg',
								alt: 'Potret Resmi Prabowo Subianto sebagai Mentri Pertahanan Republik Indonesia Periode 2019-Sekarang',
							},
						}}
						coalition={{
							name: 'Koalisi Indonesia Maju',
							member: ['GERINDRA', 'GOLKAR', 'PAN', 'PBB', 'GARUDA', 'GELORA'],
						}}
					/>

					<CandidateCard
						presidentialCandidate={{
							name: 'Anies Baswedan',
							photo: {
								src: '/foto-kandidat/Anies_Baswedan.jpg',
								alt: 'Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022',
							},
						}}
						vicePresidentialCandidate={{
							name: 'Muhaimin Iskandar',
							photo: {
								src: '/foto-kandidat/Muhaimin_Iskandar.jpg',
								alt: 'Potret Resmi Muhaimin Iskandar sebagai Wakil Ketua DPR Republik Indonesia Periode 2019-Sekarang',
							},
						}}
						coalition={{
							name: 'Koalisi Perubahan untuk Persatuan',
							member: ['NASDEM', 'PKB', 'PKS', 'UMMAT'],
						}}
					/>

					<CandidateCard
						presidentialCandidate={{
							name: 'Ganjar Pranowo',
							photo: {
								src: '/foto-kandidat/Ganjar_Pranowo.jpg',
								alt: 'Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023',
							},
						}}
						coalition={{
							name: 'Kerja Sama Partai Politik Pengusung Ganjar Pranowo',
							member: ['PDIP', 'PPP', 'HANURA', 'PERINDO'],
						}}
					/>
				</div>

				<PartiesNotInCoalitionSection
					parties={['DEMOKRAT', 'PSI', 'PKN', 'BURUH']}
				/>
			</main>
		</div>
	);
}

function PartiesNotInCoalitionSection(props: { parties: PoliticalPartyId[] }) {
	const percentageFormatter = new Intl.NumberFormat('id-ID', {
		maximumFractionDigits: 2,
		style: 'percent',
	});

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
		<div className="flex flex-col gap-4">
			<p className="scroll-m-20 font-semibold tracking-tight">
				Partai Nasional yang belum mendeklarasikan dukungan
			</p>

			<p className="flex flex-1 text-xs flex-col gap-1">
				<span className="text-3xl font-extralight">
					{percentageFormatter.format(totalPreviousPollStanding / 100)}
				</span>
				<span className="flex items-center gap-1">
					Total perolehan suara partai pada pemilu 2019
				</span>
			</p>

			<p className="text-sm">
				<span className="font-bold text-2xl">{totalPreviousDPRSeats}</span> /
				575 Kursi DPR RI (2019 - 2024)
			</p>

			<div className="flex gap-2 flex-wrap">
				{props.parties.map((partyId) => (
					<PoliticalPartyPopover
						key={partyId}
						id={partyId}
						trigger={<PoliticalPartyChip id={partyId} />}
					/>
				))}
			</div>
		</div>
	);
}
