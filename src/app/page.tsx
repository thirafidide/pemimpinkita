import { Button } from '@/components/ui/Button';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';
import { CandidateCard } from '@/presidential-candidate/CandidateCard';
import Image from 'next/image';

export default function Home() {
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

						<div className="flex gap-2 flex-wrap justify-self-end">
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

function PoliticalParty(props: any) {
	const showShortName =
		props.name.toLowerCase() !==
		props.fullName.toLowerCase().replace(' ', '').replace('partai', '');

	return (
		<Popover>
			<PopoverTrigger asChild>
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
			</PopoverTrigger>
			<PopoverContent side="bottom" className="flex flex-col gap-2 max-w-sm">
				{props.imageProps?.src && (
					<Image
						className="h-24 w-auto pr-2 object-scale-down"
						alt={`Logo ${props.fullName} ${
							showShortName ? `(${props.name})` : ''
						}`}
						{...props.imageProps}
						width={
							props.imageProps.width && props.imageProps.height
								? (96 * props.imageProps.width) / props.imageProps.height
								: 100
						}
						height={96}
					/>
				)}

				<p className="font-bold text-lg">
					{props.fullName} {showShortName && <span>({props.name})</span>}
				</p>

				{props.newParty ? (
					<p>Partai baru</p>
				) : (
					<>
						<p>
							Perolehan suara di Pemilu 2019: {props.previousPollPercentResult}%
						</p>
						<p>
							Kursi DPR RI (2019-2024): {props.previousDPRSeats} / 575 Kursi
						</p>
					</>
				)}
			</PopoverContent>
		</Popover>
	);
}
