import { Button } from '@/components/ui/Button';
import { GithubIcon } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';

export function Topbar() {
	return (
		<div className="flex">
			<Button
				variant="link"
				className="rounded-none bg-foreground px-4 py-2 -ml-4 text-background scroll-m-20 text-xl font-extrabold tracking-tight"
				asChild
			>
				<Link href="/">PemimpinKita.org</Link>
			</Button>

			<div className="flex-1" />

			{/* TODO make this menu as dropdown for mobile view */}
			<div className="hidden sm:flex">
				<Button variant="link" asChild>
					<Link href="/">Pilpres 2024</Link>
				</Button>

				<Button variant="link" asChild>
					<Link href="/simulasi-koalisi">Simulasi Koalisi</Link>
				</Button>
			</div>

			<Button variant="link" size="icon" asChild>
				<Link
					href="https://github.com/thirafidide/pemimpinkita"
					target="_blank"
				>
					<GithubIcon className="h-4 w-4" />
				</Link>
			</Button>

			<ModeToggle />
		</div>
	);
}
