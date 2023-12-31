import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '../lib/utils';
import { Topbar } from '@/components/Topbar';

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'PemimpinKita - Pemilu Presiden 2024',
	description:
		'Kondisi sementara kandidat capres-cawapres dan koalisi partai pendukungnya pada Pemilihan umum (Pemilu) Presiden Indonesia 2024, berdasarkan partai pendukung dan perolehan suara pada Pemilu sebelumnya (2019)',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="id" suppressHydrationWarning>
			<body
				className={cn(
					inter.className,
					'min-h-screen bg-[#FCFCFC] dark:bg-background p-6 lg:p-24 lg:pt-8',
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="flex flex-col gap-8 md:gap-32">
						<Topbar />

						{children}
					</div>
				</ThemeProvider>
			</body>

			<Analytics />
		</html>
	);
}
