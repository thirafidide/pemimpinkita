import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import Image from 'next/image';

export interface CandidatePhotoProps
	extends React.ComponentProps<typeof Image> {
	partyId?: PoliticalPartyId;
	showParty?: boolean;
}
export function CandidatePhoto(props: CandidatePhotoProps) {
	const { partyId, showParty = true, ...imageProps } = props;

	const party = partyId ? politicalPartyData[partyId] : null;

	const showShortName =
		party &&
		party.name.toLowerCase() !==
			party.fullName.toLowerCase().replace(' ', '').replace('partai', '');

	const logoHeight = 16;
	const logoWidth = party
		? (logoHeight * party.logo.width) / party.logo.height
		: 0;

	return (
		<div className="rounded-md relative">
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<Image
				className="w-28 h-36 object-cover rounded-md z-10"
				priority
				width={112}
				height={144}
				{...imageProps}
			/>

			{showParty && (
				<div className="absolute bg-background right-1 bottom-1 p-1 rounded-sm border shadow-sm text-xs flex gap-2">
					{party && (
						<Image
							className="h-4 w-auto oject-scale-down"
							src={party.logo.src}
							alt={`Logo ${party.fullName} ${
								showShortName ? `(${party.name})` : ''
							}`}
							width={logoWidth}
							height={logoHeight}
						/>
					)}

					{party?.name || 'Independen'}
				</div>
			)}
		</div>
	);
}
