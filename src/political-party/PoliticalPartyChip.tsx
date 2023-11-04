import * as React from 'react';
import { Button, ButtonProps } from '@/components/ui/Button';
import { PoliticalPartyId, politicalPartyData } from './PoliticalParty';
import { PoliticalPartyFlag } from './PoliticalPartyFlag';
import { cn } from '@/lib/utils';

export interface PoliticalPartyChipProps extends ButtonProps {
	party: PoliticalPartyId;
	hideName?: boolean;
}

export const PoliticalPartyChip = React.forwardRef<
	HTMLButtonElement,
	PoliticalPartyChipProps
>(({ party, hideName, ...props }, ref) => {
	const data = politicalPartyData[party];

	return (
		<Button ref={ref} variant="outline" {...props}>
			<PoliticalPartyFlag
				party={party}
				className={cn({ 'pr-2': !hideName }, 'not-sr-only')}
			/>
			<div className={cn({ 'sr-only': hideName })}>{data.name}</div>
		</Button>
	);
});

PoliticalPartyChip.displayName = 'PoliticalPartyChip';
