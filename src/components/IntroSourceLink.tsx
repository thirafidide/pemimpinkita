import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { ReactNode } from 'react';

export interface IntroSourceLink {
	href: string;
	children: ReactNode;
}

export function IntroSourceLink(props: IntroSourceLink) {
	const { href, children } = props;

	return (
		<Button variant="link" className="p-0 justify-start h-6" asChild>
			<Link href={href} target="_blank">
				{children}
				<ExternalLink size={14} className="ml-1" />
			</Link>
		</Button>
	);
}
