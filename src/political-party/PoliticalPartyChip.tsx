import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { PoliticalPartyId, politicalPartyData } from './PoliticalParty';
import { PoliticalPartyFlag } from './PoliticalPartyFlag';

export interface PoliticalPartyChipProps extends ButtonProps {
	party: PoliticalPartyId;
}

export const PoliticalPartyChip = React.forwardRef<
	HTMLButtonElement,
	PoliticalPartyChipProps
>(({ party, ...props }, ref) => {
	const data = politicalPartyData[party];

	return (
		<Button ref={ref} variant="outline" {...props}>
			<PoliticalPartyFlag party={party} />
			{data.name}
		</Button>
	);
});

PoliticalPartyChip.displayName = 'PoliticalPartyChip';
