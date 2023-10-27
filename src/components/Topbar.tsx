'use client';

import { Button } from '@/components/ui/Button';
import { GithubIcon, Menu } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';
import Link, { LinkProps } from 'next/link';
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
	SheetTitle,
} from './ui/Sheet';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Logo } from '@/Logo';

const navigations: Array<{ linkText: string; href: string }> = [
	{ linkText: 'Pilpres 2024', href: '/' },
	{ linkText: 'Simulasi Koalisi', href: '/simulasi-koalisi' },
	{ linkText: 'Disclaimer', href: '/disclaimer' },
];

export function Topbar() {
	return (
		<header className="flex container p-0">
			<Button
				variant="link"
				className="p-0 dark:text-foreground scroll-m-20"
				asChild
			>
				<Link href="/">
					<Logo width="200" height="44" />
				</Link>
			</Button>

			<div className="flex-1" />

			<nav className="hidden sm:flex">
				{navigations.map(({ linkText, href }) => (
					<Button key={href} variant="link" asChild>
						<Link href={href}>{linkText}</Link>
					</Button>
				))}

				<Button variant="link" size="icon" asChild>
					<Link
						href="https://github.com/thirafidide/pemimpinkita"
						target="_blank"
					>
						<GithubIcon className="h-4 w-4" />
						<span className="sr-only pl-2">Kode sumber - Github</span>
					</Link>
				</Button>

				<ModeToggle />
			</nav>

			<div className="sm:hidden">
				<MobileNavigationSheet />
			</div>
		</header>
	);
}

function MobileNavigationSheet() {
	const [open, setOpen] = useState(false);

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon">
					<Menu className="h-4 w-4" />
					<span className="sr-only pl-2">Menu navigasi</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className="text-left">PemimpinKita.org</SheetTitle>
				</SheetHeader>

				<nav className="flex flex-col gap-2 pt-6">
					{navigations.map(({ linkText, href }) => (
						<Button key={href} className="justify-start" variant="link" asChild>
							<MobileLink onOpenChange={setOpen} href={href}>
								{linkText}
							</MobileLink>
						</Button>
					))}

					<div className="flex gap-2">
						<Button variant="link" size="icon" asChild>
							<Link
								href="https://github.com/thirafidide/pemimpinkita"
								target="_blank"
							>
								<GithubIcon className="h-4 w-4" />
								<span className="sr-only pl-2">Kode sumber - Github</span>
							</Link>
						</Button>

						<ModeToggle />
					</div>
				</nav>
			</SheetContent>
		</Sheet>
	);
}

interface MobileLinkProps extends LinkProps {
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}

function MobileLink({
	href,
	onOpenChange,
	children,
	...props
}: MobileLinkProps) {
	const router = useRouter();
	return (
		<Link
			href={href}
			onClick={() => {
				router.push(href.toString());
				onOpenChange?.(false);
			}}
			{...props}
		>
			{children}
		</Link>
	);
}
