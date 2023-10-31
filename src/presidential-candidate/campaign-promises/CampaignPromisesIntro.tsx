import { IntroSourceLink } from '@/components/IntroSourceLink';

const sources = [
	{
		link: 'https://mmc.tirto.id/documents/2023/10/20/1241-amin-visi-misi-program.pdf?x=2676',
		title: 'Visi Misi Anies - Muhaimin',
	},
	{
		link: 'https://drive.google.com/file/d/1-olOvmrwXLJjjlE9B_oTnCMMRVQYSuse/view',
		title: 'Visi Misi Ganjar - Mahfud',
	},
	{
		link: 'https://drive.google.com/file/d/1V7N74FEblhyJhTSi4f1YLhV_aeqZ2LFk/view',
		title: 'Visi Misi Prabowo - Gibran',
	},
];

export function CampaignPromisesIntro() {
	return (
		<div className="flex flex-col gap-6 max-w-2xl">
			<p>
				Bandingkan Visi, Misi, Program Kerja, Gagasan, dan janji-janji kandidat
				yang diutarakan pasangan capres dan cawapres pada Pemilu 2024. Pilih
				pemimipin kita dengan bijak, untuk Indonesia yang lebih baik.
			</p>

			<div className="flex flex-col gap-2 text-sm">
				Sumber Data:
				<ul className="pl-4 list-disc">
					{sources.map(({ link, title }) => (
						<li key={link}>
							<IntroSourceLink href={link}>{title}</IntroSourceLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
