import { Button } from '@/components/ui/Button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';
import { PoliticalPartyId } from '@/political-party/PoliticalParty';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import Image from 'next/image';

export default function Home() {
	const prabowoCoalitionMember: PoliticalPartyId[] = [
		'GERINDRA',
		'GOLKAR',
		'PAN',
		'PBB',
		'GARUDA',
		'GELORA',
	];

	const aniesCoalitionMember: PoliticalPartyId[] = [
		'NASDEM',
		'PKB',
		'PKS',
		'UMMAT',
	];

	const ganjarCoalitionMember: PoliticalPartyId[] = [
		'PDIP',
		'PPP',
		'HANURA',
		'PERINDO',
	];

	const partiesNotInCoalition: PoliticalPartyId[] = [
		'DEMOKRAT',
		'PSI',
		'PKN',
		'BURUH',
	];

	return (
		<div className="min-h-screen bg-[#FCFCFC] p-8 lg:p-24 pt-20">
			<main className="flex flex-col gap-12 container p-0 mx-auto">
				<div className="flex flex-col gap-5 max-w-2xl">
					<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
						Pemilu Presiden 2024
					</h1>

					<p>
						Kondisi sementara kandidat capres-cawapres dan koalisi partai
						pendukungnya pada Pemilihan umum (Pemilu) Presiden Indonesia 2024,
						berdasarkan partai pendukung dan perolehan suara pada Pemilu
						sebelumnya (2019)
					</p>
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
						standing={0.3301}
					>
						<div>
							<p className="scroll-m-20 font-semibold tracking-tight">
								Koalisi Indonesia Maju
							</p>
							207 / 575 Kursi DPR RI (2019 - 2024)
						</div>

						<div className="flex flex-wrap gap-2">
							{prabowoCoalitionMember.map((partyId) => (
								<PoliticalPartyPopover
									key={partyId}
									id={partyId}
									trigger={<PoliticalPartyChip id={partyId} />}
								/>
							))}
						</div>
					</CandidateCard>

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
						standing={0.2695}
					>
						<div>
							<p className="scroll-m-20 font-semibold tracking-tight">
								Koalisi Perubahan untuk Persatuan
							</p>
							167 / 575 Kursi DPR RI (2019 - 2024)
						</div>

						<div className="flex flex-wrap gap-2">
							{aniesCoalitionMember.map((partyId) => (
								<PoliticalPartyPopover
									key={partyId}
									id={partyId}
									trigger={<PoliticalPartyChip id={partyId} />}
								/>
							))}
						</div>
					</CandidateCard>

					<CandidateCard
						presidentialCandidate={{
							name: 'Ganjar Pranowo',
							photo: {
								src: '/foto-kandidat/Ganjar_Pranowo.jpg',
								alt: 'Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023',
							},
						}}
						standing={0.2806}
					>
						<div>
							<p className="scroll-m-20 font-semibold tracking-tight">
								Kerja Sama Partai Politik Pengusung Ganjar Pranowo
							</p>
							147 / 575 Kursi DPR RI (2019 - 2024)
						</div>

						<div className="flex gap-2 flex-wrap">
							{ganjarCoalitionMember.map((partyId) => (
								<PoliticalPartyPopover
									key={partyId}
									id={partyId}
									trigger={<PoliticalPartyChip id={partyId} />}
								/>
							))}
						</div>
					</CandidateCard>
				</div>

				<div className="flex flex-col gap-4">
					<p className="scroll-m-20 font-semibold tracking-tight">
						Partai Nasional yang belum mendeklarasikan dukungan
					</p>

					<p className="flex flex-1 text-xs flex-col gap-1">
						<span className="text-3xl font-extralight">9,66%</span>
						<span className="flex items-center gap-1">
							Total perolehan suara partai pada pemilu 2019
						</span>
					</p>

					<div className="flex gap-2 flex-wrap">
						{partiesNotInCoalition.map((partyId) => (
							<PoliticalPartyPopover
								key={partyId}
								id={partyId}
								trigger={<PoliticalPartyChip id={partyId} />}
							/>
						))}
					</div>
				</div>
			</main>
		</div>
	);
}
