import { IntroSourceLink } from '@/components/IntroSourceLink';

export function PreviousPollIntro() {
	return (
		<div className="flex flex-col gap-6 max-w-2xl">
			<p>
				Kondisi sementara kandidat capres-cawapres dan koalisi partai
				pendukungnya pada Pemilihan umum (Pemilu) Presiden Indonesia 2024,
				berdasarkan partai pendukung dan perolehan suara pada Pemilu sebelumnya
				(2019)
			</p>

			<div className="flex flex-col gap-2 text-sm">
				Sumber Data:{' '}
				<ul className="pl-4 list-disc">
					<li>
						<IntroSourceLink href="https://pemilu2019.kpu.go.id/#/dprri/hitung-suara/">
							KPU - Info Publik Pemilu 2019
						</IntroSourceLink>
					</li>
				</ul>
			</div>
		</div>
	);
}
