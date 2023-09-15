import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { PoliticalPartyId, politicalPartyData } from './PoliticalParty';

export function PoliticalPartyChip(props: { id: PoliticalPartyId }) {
	const data = politicalPartyData[props.id];

	const showShortName =
		data.name.toLowerCase() !==
		data.fullName.toLowerCase().replace(' ', '').replace('partai', '');

	const logoHeight = 24;
	const logoWidth = (logoHeight * data.logo.width) / data.logo.height;

	return (
		<Button variant="outline">
			{data.logo?.src && (
				<Image
					className="h-6 w-auto pr-2 object-scale-down"
					src={data.logo.src}
					alt={`Logo ${data.fullName} ${showShortName ? `(${data.name})` : ''}`}
					width={logoWidth}
					height={logoHeight}
				/>
			)}
			{data.name}
		</Button>
	);
}
