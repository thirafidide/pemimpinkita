import * as React from 'react';
import Image from 'next/image';
import { Button, ButtonProps } from '@/components/ui/Button';
import {
	PoliticalPartyId,
	getPartyDescriptiveName,
	politicalPartyData,
} from './PoliticalParty';

export interface PoliticalPartyChipProps extends ButtonProps {
	party: PoliticalPartyId;
}

export const PoliticalPartyChip = React.forwardRef<
	HTMLButtonElement,
	PoliticalPartyChipProps
>(({ party, ...props }, ref) => {
	const data = politicalPartyData[party];

	const logoHeight = 24;
	const logoWidth = (logoHeight * data.logo.width) / data.logo.height;

	return (
		<Button ref={ref} variant="outline" {...props}>
			<Image
				className="h-6 w-auto pr-2 object-scale-down"
				src={data.logo.src}
				alt={`Logo ${getPartyDescriptiveName(data)}`}
				width={logoWidth}
				height={logoHeight}
			/>
			{data.name}
		</Button>
	);
});

PoliticalPartyChip.displayName = 'PoliticalPartyChip';
