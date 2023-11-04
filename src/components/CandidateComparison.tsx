import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Card } from './ui/Card';

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
export function CandidateComparisonItem(props: CandidateComparisonItemProps) {
	return (
		<article className={cn('flex-1', props.className)}>
			{props.children}
		</article>
	);
}

export interface CandidateComparisonCardProps {
	className?: string;
	children: ReactNode;
}
export function CandidateComparisonCard(props: CandidateComparisonCardProps) {
	return (
		<Card className={cn('h-full flex flex-col gap-6 p-4', props.className)}>
			{props.children}
		</Card>
	);
}
