import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang="id">
			<body className={inter.className}>{children}</body>
			<Analytics />
		</html>
	);
}
