import { PoliticalPartyPopover } from '@/political-party/PoliticalPartyPopover';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { candidateData } from '@/presidential-candidate/candidateData';
import { CandidatePhoto } from '@/presidential-candidate/CandidatePhoto';
import { CandidatePairId } from '@/presidential-candidate/CandidatePair';
import { candidatePairData } from '@/presidential-candidate/candidatePairData';

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
		<article className="flex flex-col gap-6 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
			<div className="flex flex-col gap-4">
				<div className="flex gap-2">
					<CandidatePhoto
						{...presidentialCandidate.photo}
						partyId={presidentialCandidate.partyId}
						showParty
					/>
					{vicePresidentialCandidate && (
						<CandidatePhoto
							{...vicePresidentialCandidate.photo}
							partyId={vicePresidentialCandidate.partyId}
							showParty
						/>
					)}
				</div>

				<h2 className="text-xl font-bold">
					{presidentialCandidate.shortName}{' '}
					<span className="text-lg font-semibold">&</span>{' '}
					{vicePresidentialCandidate.shortName}
				</h2>
			</div>

			<div className="flex flex-col gap-1">
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

			<div className="flex flex-col flex-1 justify-end">
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
