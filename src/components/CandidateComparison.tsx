import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export interface CandidateComparisonProps {
	children: ReactNode;
}
export function CandidateComparison(props: CandidateComparisonProps) {
	return (
		<div className="flex flex-col md:flex-row gap-3 justify-stretch">
			{props.children}
		</div>
	);
}

export interface CandidateComparisonColumnProps {
	className?: string;
	children: ReactNode;
}
/** TODO: Decouple this from card styling */
export function CandidateComparisonColumn(
	props: CandidateComparisonColumnProps,
) {
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
