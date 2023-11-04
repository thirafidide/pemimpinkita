import * as React from 'react';
import Image from 'next/image';
import {
	PoliticalPartyId,
	getPartyDescriptiveName,
	politicalPartyData,
} from './PoliticalParty';
import { cn } from '@/lib/utils';

export function PoliticalPartyFlag(props: {
	party: PoliticalPartyId;
	className?: string;
}) {
	const data = politicalPartyData[props.party];

	const logoHeight = 24;
	const logoWidth = (logoHeight * data.logo.width) / data.logo.height;

	return (
		<Image
			className={cn('h-6 w-auto object-scale-down', props.className)}
			src={data.logo.src}
			alt={`Logo ${getPartyDescriptiveName(data)}`}
			width={logoWidth}
			height={logoHeight}
		/>
	);
}
