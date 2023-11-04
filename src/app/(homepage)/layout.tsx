import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs';

export default function HomePageLayout({
	children,
	...props
}: {
	children: React.ReactNode;
}) {
	console.log(props);
	return (
		<main className="flex flex-col container p-0 mx-auto">
			<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
				Pemilu Presiden 2024
			</h1>

			{children}
		</main>
	);
}
