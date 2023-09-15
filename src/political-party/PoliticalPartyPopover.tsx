import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';
import { PoliticalPartyId, politicalPartyData } from './PoliticalParty';
import Image from 'next/image';
import { ReactNode } from 'react';

export function PoliticalPartyPopover(props: {
	id: PoliticalPartyId;
	trigger: ReactNode;
}) {
	const data = politicalPartyData[props.id];

	const showShortName =
		data.name.toLowerCase() !==
		data.fullName.toLowerCase().replace(' ', '').replace('partai', '');

	return (
		<Popover>
			<PopoverTrigger asChild>{props.trigger}</PopoverTrigger>
			<PopoverContent side="bottom" className="flex flex-col gap-2 max-w-sm">
				<Image
					className="h-24 w-auto pr-2 object-scale-down"
					src={data.logo.src}
					alt={`Logo ${data.fullName} ${showShortName ? `(${data.name})` : ''}`}
					width={(96 * data.logo.width) / data.logo.height}
					height={96}
				/>

				<p className="font-bold text-lg">
					{data.fullName} {showShortName && <span>({data.name})</span>}
				</p>

				{data.newPartyIn2024 ? (
					<p>Partai baru</p>
				) : (
					<>
						<p>
							Perolehan suara di Pemilu 2019: {data.previousPollPercentResult}%
						</p>
						<p>Kursi DPR RI (2019-2024): {data.previousDPRSeats} / 575 Kursi</p>
					</>
				)}
			</PopoverContent>
		</Popover>
	);
}
