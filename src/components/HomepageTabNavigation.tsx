import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from './ui/Tabs';

export function HomepageTabNavigation({
	path,
}: {
	path: '/' | '/kandidat-data-2019';
}) {
	return (
		<Tabs defaultValue={path}>
			<TabsList>
				<TabsTrigger value="/" asChild>
					<Link href="/">Janji Kampanye</Link>
				</TabsTrigger>
				<TabsTrigger value="/kandidat-data-2019" asChild>
					<Link href="/kandidat-data-2019">Perolehan Suara 2019</Link>
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
