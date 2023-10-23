import * as React from 'react';
import Image from 'next/image';
import {
	PoliticalPartyId,
	getPartyDescriptiveName,
	politicalPartyData,
} from './PoliticalParty';

export function PoliticalPartyFlag(props: { party: PoliticalPartyId }) {
	const data = politicalPartyData[props.party];

	const logoHeight = 24;
	const logoWidth = (logoHeight * data.logo.width) / data.logo.height;

	return (
		<Image
			className="h-6 w-auto pr-2 object-scale-down"
			src={data.logo.src}
			alt={`Logo ${getPartyDescriptiveName(data)}`}
			width={logoWidth}
			height={logoHeight}
		/>
	);
}
