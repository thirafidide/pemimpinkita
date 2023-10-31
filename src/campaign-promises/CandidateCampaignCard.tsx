import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { candidateData } from '@/presidential-candidate/candidateData';
import { CandidatePairId } from '@/presidential-candidate/CandidatePair';
import { candidatePairData } from '@/presidential-candidate/candidatePairData';
import Image from 'next/image';

export interface CandidateCampaignCardProps {
	candidatesId: CandidatePairId;
}

export function CandidateCampaignCard(props: CandidateCampaignCardProps) {
	const pairData = candidatePairData[props.candidatesId];

	const presidentialCandidate = candidateData[pairData.presidentialCandidate];
	const vicePresidentialCandidate =
		candidateData[pairData.vicePresidentialCandidate];

	const mainVision = pairData.vision[0];
	const subVision = pairData.vision[1];

	return (
		<article className="flex flex-col gap-7 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
			<div className="flex flex-col gap-3">
				<Image
					className="w-full h-40 object-cover"
					priority
					width={300}
					height={150}
					src={pairData.photo.src}
					alt={`Foto pasangan capres-cawapres ${presidentialCandidate.shortName} & ${vicePresidentialCandidate.shortName}`}
				/>

				<h2 className="text-xl font-bold px-4">
					{presidentialCandidate.shortName}{' '}
					<span className="text-lg font-semibold">&</span>{' '}
					{vicePresidentialCandidate.shortName}
				</h2>
			</div>

			<div className="flex flex-col gap-1 px-4">
				<p className="text-xs">Visi</p>

				<div>
					<h3 className="flex flex-col scroll-m-20 tracking-tight text-xl font-bold">
						{mainVision}

						{subVision && (
							<span className="scroll-m-20 font-semibold tracking-tight text-xs">
								{subVision}
							</span>
						)}
					</h3>
				</div>
			</div>

			<div className="flex flex-col flex-1 justify-end px-4 pb-4">
				<div className="flex gap-2 flex-wrap">
					{pairData.coalition.member.map((partyId) => (
						<PoliticalPartyPopover
							key={partyId}
							id={partyId}
							trigger={
								<PoliticalPartyChip className="p-2" party={partyId} hideName />
							}
						/>
					))}
				</div>
			</div>
		</article>
	);
}
