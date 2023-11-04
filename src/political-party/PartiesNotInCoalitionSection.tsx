import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/Accordion';
import { PoliticalPartyFlag } from './PoliticalPartyFlag';
import { PoliticalPartyPopover } from './PoliticalPartyPopover';
import { PoliticalPartyChip } from './PoliticalPartyChip';
import { politicalPartyData, PoliticalPartyId } from './PoliticalParty';

const percentageFormatter = new Intl.NumberFormat('id-ID', {
	maximumFractionDigits: 2,
	style: 'percent',
});

export function PartiesNotInCoalitionSection(props: {
	parties: PoliticalPartyId[];
}) {
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
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="no-coalition">
				<AccordionTrigger>
					<div className="flex gap-8 items-center justify-between w-full">
						<h2>Partai Nasional yang belum mendeklarasikan dukungan</h2>
						<div className="flex gap-2">
							{props.parties.map((partyId) => (
								<PoliticalPartyFlag key={partyId} party={partyId} />
							))}
						</div>
					</div>
				</AccordionTrigger>
				<AccordionContent>
					<div className="flex flex-col gap-4">
						<p className="flex flex-1 text-xs flex-col gap-1">
							<span className="text-3xl font-extralight">
								{percentageFormatter.format(totalPreviousPollStanding / 100)}
							</span>
							<span className="flex items-center gap-1">
								Total perolehan suara partai pada pemilu 2019
							</span>
						</p>

						<p className="text-sm">
							<span className="font-bold text-2xl">
								{totalPreviousDPRSeats}
							</span>{' '}
							/ 575 Kursi DPR RI (2019 - 2024)
						</p>

						<div className="flex gap-2 flex-wrap">
							{props.parties.map((partyId) => (
								<PoliticalPartyPopover
									key={partyId}
									id={partyId}
									trigger={<PoliticalPartyChip party={partyId} />}
								/>
							))}
						</div>
					</div>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
