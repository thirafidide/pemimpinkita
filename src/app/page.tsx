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
		<div className="min-h-screen bg-[#FCFCFC] p-5">
			<main className="flex flex-col gap-5 container mx-auto">
				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Prabowo_Subianto.jpg"
							alt="Potret Resmi Prabowo Subianto sebagai Mentri Pertahanan Republik Indonesia Periode 2019-Sekarang"
							width={786}
							height={1086}
						/>
						<PresidentialCandidateName>
							Prabowo Subianto
						</PresidentialCandidateName>
						Gerindra (12,57% | 78), Golkar (12,31% | 85), PAN (6,84% | 44), PBB
						(0,79% | 0), Gelora, PSI (1,89% | 0), Garuda (0,50% | 0)
						<br />
						36% | 207 Kursi
						<div className="flex flex-wrap gap-2">
							<PoliticalParty name="Gerindra" />
							<PoliticalParty name="Golkar" />
							<PoliticalParty name="PAN" />
							<PoliticalParty name="PBB" />
							<PoliticalParty name="Gelora" />
							<PoliticalParty name="PSI" />
							<PoliticalParty name="Garuda" />
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Anies_Baswedan.jpg"
							alt="Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022"
							width={1920}
							height={2398}
						/>
						<PresidentialCandidateName>
							Anies Baswedan
						</PresidentialCandidateName>
						Muhaimin Iskandar Nasdem(9,05% | 59), PKB (9,69% | 58), PKS (8,21% |
						50), Ummat
						<br />
						26.95% | 167 Kursi
						<div className="flex flex-wrap gap-2">
							<PoliticalParty name="Nasdem" />
							<PoliticalParty name="PKB" />
							<PoliticalParty name="PKS" />
							<PoliticalParty name="Ummat" />
						</div>
					</CandidateMainSection>
					<CandidateMainSection>
						<CandidatePhoto
							src="/foto-kandidat/Ganjar_Pranowo.jpg"
							alt="Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023"
							width={799}
							height={1021}
						/>
						<PresidentialCandidateName>
							Ganjar Pranowo
						</PresidentialCandidateName>
						PDIP (19,33% | 128) PPP (4,52% | 19) Hanura (1,54% | 0) Perindo
						(2,67% | 0)
						<br />
						25.57% | 147 Kursi
						<div className="flex gap-2">
							<PoliticalParty name="PDIP" />
							<PoliticalParty name="PPP" />
							<PoliticalParty name="Hanura" />
							<PoliticalParty name="Perindo" />
						</div>
					</CandidateMainSection>
				</div>
				Partai Nasional yang belum mendeklarasikan dukungan Buruh PKN Demokrat
				(7,77% | 54)
				<div className="flex gap-2">
					<PoliticalParty name="Demokrat" />
					<PoliticalParty name="PKN" />
					<PoliticalParty name="Buruh" />
				</div>
			</main>
		</div>
	);
}

function CandidateMainSection(props: any) {
	return (
		<div className="flex-1 bg-white border-[#CECECE] border rounded p-4">
			{props.children}
		</div>
	);
}

function PresidentialCandidateName(props: any) {
	return <h2 className="text-xl">{props.children}</h2>;
}

function CandidatePhoto(props: React.ComponentProps<typeof Image>) {
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image className="w-28 h-36 object-cover" priority {...props} />
	);
}

function PoliticalParty(props: any) {
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
					<TooltipContent side="bottom">
						<p>Add to library</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
}
