import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface CandidateCardProps {
	presidentialCandidate: {
		name: string;
		photo: {
			src: string;
			alt: string;
		};
	};
	vicePresidentialCandidate?: {
		name: string;
		photo: {
			src: string;
			alt: string;
		};
	};
	standing: number;
	children: ReactNode;
}

export function CandidateCard(props: CandidateCardProps) {
	const percentageFormatter = new Intl.NumberFormat('id-ID', {
		maximumFractionDigits: 2,
		style: 'percent',
	});

	return (
		<div className="flex flex-col gap-6 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm p-4">
			<div className="flex gap-2">
				<CandidatePhoto {...props.presidentialCandidate.photo} />
				{props.vicePresidentialCandidate && (
					<CandidatePhoto {...props.vicePresidentialCandidate.photo} />
				)}
			</div>

			<div className="flex-1">
				<PresidentialCandidateName>
					{props.presidentialCandidate.name}
				</PresidentialCandidateName>

				<VicePresidentialCandidateName>
					{props.vicePresidentialCandidate?.name}
				</VicePresidentialCandidateName>
			</div>

			<p className="flex flex-1 text-xs flex-col gap-1">
				<span className="text-3xl font-extralight">
					{percentageFormatter.format(props.standing)}
				</span>
				<span className="flex items-center gap-1">
					Perolehan suara partai pendukung pada pemilu 2019
				</span>
			</p>

			{props.children}
		</div>
	);
}

function PresidentialCandidateName(props: { children: ReactNode }) {
	return (
		<h2 className="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors">
			{props.children}
		</h2>
	);
}

function VicePresidentialCandidateName(props: { children?: ReactNode }) {
	return (
		<h2
			className={cn(
				'scroll-m-20 text-xl tracking-tight transition-colors',
				{ 'opacity-40': !props.children },
				{ 'font-semibold': props.children },
			)}
		>
			{props.children ? `& ${props.children}` : 'Belum menentukan Cawapres'}
		</h2>
	);
}

function CandidatePhoto(props: React.ComponentProps<typeof Image>) {
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
