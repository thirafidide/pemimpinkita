import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface CandidateComparisonProps {
	className?: string;
	children: ReactNode;
}
export function CandidateComparison(props: CandidateComparisonProps) {
	return (
		<div
			className={cn(
				'flex flex-col md:flex-row gap-3 justify-stretch',
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}

export interface CandidateComparisonItemProps {
	className?: string;
	children: ReactNode;
}
/** TODO: Decouple this from card styling */
export function CandidateComparisonItem(props: CandidateComparisonItemProps) {
	return (
		<article
			className={cn(
				'flex flex-col gap-6 flex-1 rounded-lg border bg-card text-card-foreground shadow-sm',
				props.className,
			)}
		>
			{props.children}
		</article>
	);
}
