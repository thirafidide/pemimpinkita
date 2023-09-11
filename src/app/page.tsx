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
								imageProps={{
									src: '/partai-politik/gerindra.png',
									width: 360,
									height: 432,
								}}
							/>
							<PoliticalParty
								name="Golkar"
								fullName="Partai Golongan Karya"
								previousPollPercentResult={12.31}
								previousDPRSeats={85}
								imageProps={{
									src: '/partai-politik/golkar.png',
									width: 360,
									height: 345,
								}}
							/>
							<PoliticalParty
								name="PAN"
								fullName="Partai Amanat Nasional"
								previousPollPercentResult={6.84}
								previousDPRSeats={44}
								imageProps={{
									src: '/partai-politik/pan.png',
									width: 300,
									height: 422,
								}}
							/>
							<PoliticalParty
								name="PBB"
								fullName="Partai Bulan Bintang"
								previousPollPercentResult={0.79}
								previousDPRSeats={0}
								imageProps={{
									src: '/partai-politik/pbb.png',
									width: 400,
									height: 574,
								}}
							/>
							<PoliticalParty
								name="Garuda"
								fullName="Partai Garda Perubahan Indonesia"
								previousPollPercentResult={0.5}
								previousDPRSeats={0}
								imageProps={{
									src: '/partai-politik/garuda.png',
									width: 360,
									height: 360,
								}}
							/>
							<PoliticalParty
								name="Gelora"
								fullName="Partai Gelombang Rakyat Indonesia"
								newParty
								imageProps={{
									src: '/partai-politik/gelora.png',
									width: 360,
									height: 506,
								}}
							/>
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Anies_Baswedan.jpg"
							alt="Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022"
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
								name="NasDem"
								fullName="Partai Nasional Demokrat"
								previousPollPercentResult={9.05}
								previousDPRSeats={59}
								imageProps={{
									src: '/partai-politik/nasdem.png',
									width: 400,
									height: 400,
								}}
							/>
							<PoliticalParty
								name="PKB"
								fullName="Partai Kebangkitan Bangsa"
								previousPollPercentResult={9.69}
								previousDPRSeats={58}
								imageProps={{
									src: '/partai-politik/pkb.png',
									width: 320,
									height: 414,
								}}
							/>
							<PoliticalParty
								name="PKS"
								fullName="Partai Keadilan Sejahtera"
								previousPollPercentResult={8.21}
								previousDPRSeats={50}
								imageProps={{
									src: '/partai-politik/pks.png',
									width: 300,
									height: 421,
								}}
							/>
							<PoliticalParty
								name="Ummat"
								fullName="Partai Ummat"
								newParty
								imageProps={{
									src: '/partai-politik/ummat.png',
									width: 291,
									height: 344,
								}}
							/>
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Ganjar_Pranowo.jpg"
							alt="Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023"
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
								imageProps={{
									src: '/partai-politik/pdip.png',
									width: 360,
									height: 407,
								}}
							/>
							<PoliticalParty
								name="PPP"
								fullName="Partai Persatuan Pembangunan"
								previousPollPercentResult={4.52}
								previousDPRSeats={19}
								imageProps={{
									src: '/partai-politik/ppp.png',
									width: 400,
									height: 400,
								}}
							/>
							<PoliticalParty
								name="Hanura"
								fullName="Partai Hati Nurani Rakyat"
								previousPollPercentResult={1.54}
								previousDPRSeats={0}
								imageProps={{
									src: '/partai-politik/hanura.png',
									width: 400,
									height: 231,
								}}
							/>
							<PoliticalParty
								name="Perindo"
								fullName="Partai Persatuan Indonesia"
								previousPollPercentResult={2.67}
								previousDPRSeats={0}
								imageProps={{
									src: '/partai-politik/perindo.png',
									width: 349,
									height: 256,
								}}
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
							imageProps={{
								src: '/partai-politik/demokrat.png',
								width: 500,
								height: 333,
							}}
						/>
						<PoliticalParty
							name="PSI"
							fullName="Partai Solidaritas Indonesia"
							previousPollPercentResult={1.89}
							previousDPRSeats={0}
							imageProps={{
								src: '/partai-politik/psi.png',
								width: 360,
								height: 456,
							}}
						/>
						<PoliticalParty
							name="PKN"
							fullName="Partai Kebangkitan Nusantara"
							newParty
							imageProps={{
								src: '/partai-politik/pkn.png',
								width: 360,
								height: 360,
							}}
						/>
						<PoliticalParty
							name="Buruh"
							fullName="Partai Buruh"
							newParty
							imageProps={{
								src: '/partai-politik/buruh.png',
								width: 360,
								height: 144,
							}}
						/>
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
		<Image
			className="w-28 h-36 object-cover rounded-md"
			priority
			width={112}
			height={144}
			{...props}
		/>
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
							{props.imageProps?.src && (
								<Image
									className="h-6 w-auto pr-2 object-scale-down"
									alt={`Logo ${props.fullName} ${
										showShortName ? `(${props.name})` : ''
									}`}
									{...props.imageProps}
									width={
										props.imageProps.width && props.imageProps.height
											? (24 * props.imageProps.width) / props.imageProps.height
											: 100
									}
									height={24}
								/>
							)}
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
