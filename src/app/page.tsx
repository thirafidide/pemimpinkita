import { Button } from '@/components/ui/Button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/Tooltip';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="min-h-screen bg-[#FCFCFC] p-5 pt-20">
			<main className="flex flex-col gap-12 container mx-auto">
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					Pemilu Presiden 2024
				</h1>
				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Prabowo_Subianto.jpg"
							alt="Potret Resmi Prabowo Subianto sebagai Mentri Pertahanan Republik Indonesia Periode 2019-Sekarang"
							width={786}
							height={1086}
						/>
						<CandidateSectionHeader standing="33,01%">
							<PresidentialCandidateName>
								Prabowo Subianto
							</PresidentialCandidateName>
						</CandidateSectionHeader>
						207 / 575 Kursi DPR RI (2019 - 2024)
						<div className="flex flex-wrap gap-2">
							<PoliticalParty
								name="Gerindra"
								fullName="Partai Gerakan Indonesia Raya"
								previousPollPercentResult={12.57}
								previousDPRSeats={78}
							/>
							<PoliticalParty
								name="Golkar"
								fullName="Partai Golongan Karya"
								previousPollPercentResult={12.31}
								previousDPRSeats={85}
							/>
							<PoliticalParty
								name="PAN"
								fullName="Partai Amanat Nasional"
								previousPollPercentResult={6.84}
								previousDPRSeats={44}
							/>
							<PoliticalParty
								name="PBB"
								fullName="Partai Bulan Bintang"
								previousPollPercentResult={0.79}
								previousDPRSeats={0}
							/>
							<PoliticalParty
								name="Garuda"
								fullName="Partai Garda Perubahan Indonesia"
								previousPollPercentResult={0.5}
								previousDPRSeats={0}
							/>
							<PoliticalParty
								name="Gelora"
								fullName="Partai Gelombang Rakyat Indonesia"
								newParty
							/>
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Anies_Baswedan.jpg"
							alt="Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022"
							width={1920}
							height={2398}
						/>
						<CandidateSectionHeader standing="26,95%">
							<PresidentialCandidateName>
								Anies Baswedan
							</PresidentialCandidateName>
						</CandidateSectionHeader>
						Muhaimin Iskandar
						<br />
						167 / 575 Kursi DPR RI (2019 - 2024)
						<div className="flex flex-wrap gap-2">
							<PoliticalParty
								name="Nasdem"
								fullName="Partai Nasional Demokrat"
								previousPollPercentResult={9.05}
								previousDPRSeats={59}
							/>
							<PoliticalParty
								name="PKB"
								fullName="Partai Kebangkitan Bangsa"
								previousPollPercentResult={9.69}
								previousDPRSeats={58}
							/>
							<PoliticalParty
								name="PKS"
								fullName="Partai Kebangkitan Bangsa"
								previousPollPercentResult={8.21}
								previousDPRSeats={50}
							/>
							<PoliticalParty name="Ummat" fullName="Partai Ummat" newParty />
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Ganjar_Pranowo.jpg"
							alt="Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023"
							width={799}
							height={1021}
						/>
						<CandidateSectionHeader standing="28.06%">
							<PresidentialCandidateName>
								Ganjar Pranowo
							</PresidentialCandidateName>
						</CandidateSectionHeader>
						147 / 575 Kursi DPR RI (2019 - 2024)
						<div className="flex gap-2 flex-wrap">
							<PoliticalParty
								name="PDI-P"
								fullName="Partai Demokrasi Indonesia Perjuangan"
								previousPollPercentResult={19.33}
								previousDPRSeats={128}
							/>
							<PoliticalParty
								name="PPP"
								fullName="Partai Persatuan Pembangunan"
								previousPollPercentResult={4.52}
								previousDPRSeats={19}
							/>
							<PoliticalParty
								name="Hanura"
								fullName="Partai Hati Nurani Rakyat"
								previousPollPercentResult={1.54}
								previousDPRSeats={0}
							/>
							<PoliticalParty
								name="Perindo"
								fullName="Partai Persatuan Indonesia"
								previousPollPercentResult={2.67}
								previousDPRSeats={0}
							/>
						</div>
					</CandidateMainSection>
				</div>

				<div className="flex flex-col gap-4">
					Partai Nasional yang belum mendeklarasikan dukungan
					<div className="flex gap-2 flex-wrap">
						<PoliticalParty
							name="Demokrat"
							fullName="Partai Demokrat"
							previousPollPercentResult={7.77}
							previousDPRSeats={54}
						/>
						<PoliticalParty
							name="PSI"
							fullName="Partai Solidaritas Indonesia"
							previousPollPercentResult={1.89}
							previousDPRSeats={0}
						/>
						<PoliticalParty
							name="PKN"
							fullName="Partai Kebangkitan Nusantara"
							newParty
						/>
						<PoliticalParty name="Buruh" fullName="Partai Buruh" newParty />
					</div>
				</div>
			</main>
		</div>
	);
}

function CandidateMainSection(props: any) {
	return (
		<div className="flex flex-col gap-4 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
			{props.children}
		</div>
	);
}

function CandidateSectionHeader(props: any) {
	return (
		<div className="flex justify-between items-baseline">
			<div className="flex">{props.children}</div>
			<div className="text-3xl font-extralight border-l-2 pl-4">
				{props.standing}
			</div>
		</div>
	);
}

function PresidentialCandidateName(props: any) {
	return (
		<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
			{props.children}
		</h2>
	);
}

function CandidatePhoto(props: React.ComponentProps<typeof Image>) {
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image className="w-28 h-36 object-cover rounded-md" priority {...props} />
	);
}

function PoliticalParty(props: any) {
	const showShortName =
		props.name.toLowerCase() !==
		props.fullName.toLowerCase().replace(' ', '').replace('partai', '');

	return (
		<div className="inline-flex flex-col content-center">
			<TooltipProvider>
				<Tooltip delayDuration={0}>
					<TooltipTrigger asChild>
						<Button variant="outline">
							{/* <img
				src="https://upload.wikimedia.org/wikipedia/id/thumb/c/cd/Logo_PDI-P.svg/360px-Logo_PDI-P.svg.png"
				alt="pdip"
				className="h-10 w-auto object-scale-down"
			/> */}
							{props.name}
						</Button>
					</TooltipTrigger>
					<TooltipContent side="bottom" className="flex flex-col gap-2">
						<p className="font-bold text-lg">
							{props.fullName} {showShortName && <span>({props.name})</span>}
						</p>

						{props.newParty ? (
							<p>Partai baru</p>
						) : (
							<>
								<p>
									Perolehan suara di Pemilu 2019:{' '}
									{props.previousPollPercentResult}%
								</p>
								<p>
									Kursi DPR RI (2019-2024): {props.previousDPRSeats} / 575 Kursi
								</p>
							</>
						)}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
