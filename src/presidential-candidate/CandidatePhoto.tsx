import Image from 'next/image';

export function CandidatePhoto(props: React.ComponentProps<typeof Image>) {
	return (
		// eslint-disable-next-line jsx-a11y/alt-text
		<Image
			className="w-28 h-36 object-cover rounded-md"
			priority
			width={112}
			height={144}
			{...props}
		/>
	);
}
