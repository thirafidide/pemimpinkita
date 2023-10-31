import {
	CandidatePair,
	CandidatePairId,
	CandidatePairMission,
} from './CandidatePair';

export const candidatePairData: Record<CandidatePairId, CandidatePair> = {
	AMIN: {
		id: 'AMIN',
		presidentialCandidate: 'ANIES',
		vicePresidentialCandidate: 'IMIN',
		coalition: {
			name: 'Koalisi Perubahan untuk Persatuan',
			member: ['NASDEM', 'PKB', 'PKS', 'UMMAT'],
		},
		photo: {
			src: '/foto-paslon/amin.png',
			width: 404,
			height: 300,
		},
		vision: ['Indonesia Adil Makmur untuk Semua'],
	},
	GAMA: {
		id: 'GAMA',
		presidentialCandidate: 'GANJAR',
		vicePresidentialCandidate: 'MAHFUDMD',
		coalition: {
			name: 'Kerja Sama Partai Politik Pengusung Ganjar Pranowo',
			member: ['PDIP', 'PPP', 'HANURA', 'PERINDO'],
		},
		photo: {
			src: '/foto-paslon/gama.png',
			width: 407,
			height: 300,
		},
		vision: [
			'Menuju Indonesia Unggul',
			'Gerak Cepat Mewujudkan Negara Maritim yang Adil dan Lestari',
		],
	},
	PRABAN: {
		id: 'PRABAN',
		presidentialCandidate: 'PRABOWO',
		vicePresidentialCandidate: 'GIBRAN',
		coalition: {
			name: 'Koalisi Indonesia Maju',
			member: [
				'GERINDRA',
				'GOLKAR',
				'PAN',
				'DEMOKRAT',
				'PBB',
				'GELORA',
				'PSI',
				'GARUDA',
			],
		},
		photo: {
			src: '/foto-paslon/praban.png',
			width: 483,
			height: 300,
		},
		vision: ['Bersama Indonesia Maju Menuju Indonesia Emas 2045'],
	},
};

// TODO Move to API
export const candidatePairMissionData: Record<
	CandidatePairId,
	Array<CandidatePairMission>
> = {
	PRABAN: [
		{
			id: 1001,
			title:
				'Memperkokoh ideologi Pancasila, demokrasi, dan hak asasi manusia (HAM).',
		},
		{
			id: 1002,
			title:
				'Memantapkan sistem pertahanan keamanan negara dan mendorong kemandirian bangsa melalui swasembada pangan, energi, air, ekonomi kreatif, ekonomi hijau, dan ekonomi biru.',
		},
		{
			id: 1003,
			title:
				'Meningkatkan lapangan kerja yang berkualitas, mendorong kewirausahaan, mengembangkan industri kreatif, dan melanjutkan pengembangan infrastruktur.',
		},
		{
			id: 1004,
			title:
				'Memperkuat pembangunan sumber daya manusia (SDM), sains, teknologi, pendidikan, kesehatan, prestasi olahraga, kesetaraan gender, serta penguatan peran perempuan, pemuda, dan penyandang disabilitas.',
		},
		{
			id: 1005,
			title:
				'Melanjutkan hilirisasi dan industrialisasi untuk meningkatkan nilai tambah di dalam negeri.',
		},
		{
			id: 1006,
			title:
				'Membangun dari desa dan dari bawah untuk pemerataan ekonomi dan pemberantasan kemiskinan.',
		},
		{
			id: 1007,
			title:
				'Memperkuat reformasi politik, hukum, dan birokrasi, serta memperkuat pencegahan dan pemberantasan korupsi dan narkoba.',
		},
		{
			id: 1008,
			title:
				'Memperkuat penyelarasan kehidupan yang harmonis dengan lingkungan, alam, dan budaya, serta peningkatan toleransi antarumat beragama untuk mencapai masyarakat yang adil dan makmur.',
		},
	],
	AMIN: [
		{
			id: 2001,
			title:
				'Memastikan Ketersediaan Kebutuhan Pokok dan Biaya Hidup Murah melalui Kemandirian Pangan, Ketahanan Energi, dan Kedaulatan Air',
		},
		{
			id: 2002,
			title:
				'Mengentaskan Kemiskinan dengan Memperluas Kesempatan Berusaha dan Menciptakan Lapangan Kerja, Mewujudkan Upah Berkeadilan, Menjamin Kemajuan Ekonomi Berbasis Kemandirian dan Pemerataan, serta Mendukung Korporasi Indonesia Berhasil di Negeri Sendiri dan Bertumbuh di Kancah Global',
		},
		{
			id: 2003,
			title:
				'Mewujudkan Keadilan Ekologis Berkelanjutan untuk Generasi Mendatang',
		},
		{
			id: 2004,
			title:
				'Membangun Kota dan Desa Berbasis Kawasan yang Manusiawi, Berkeadilan dan Saling Memajukan',
		},
		{
			id: 2005,
			title:
				'Mewujudkan Manusia Indonesia yang Sehat, Cerdas, Produktif, Berakhlak, serta Berbudaya',
		},
		{
			id: 2006,
			title:
				'Mewujudkan Keluarga Indonesia yang Sejahtera dan Bahagia sebagai Akar Kekuatan Bangsa',
		},
		{
			id: 2007,
			title:
				'Memperkuat Sistem Pertahanan dan Keamanan Negara, serta Meningkatkan Peran dan Kepemimpinan Indonesia dalam Kancah Politik Global untuk Mewujudkan Kepentingan Nasional dan Perdamaian Dunia',
		},
		{
			id: 2008,
			title:
				'Memulihkan Kualitas Demokrasi, Menegakkan Hukum dan HAM, Memberantas Korupsi Tanpa Tebang Pilih, serta Menyelenggarakan Pemerintahan yang Berpihak pada Rakyat',
		},
	],
	GAMA: [
		{
			id: 3001,
			title:
				'Mempercepat Pembangunan Manusia Indonesia Unggul yang Berkualitas, Produktif, dan Berkepribadian',
		},
		{
			id: 3002,
			title:
				'Mempercepat Penguasaan Sains dan Teknologi Melalui Percepatan Riset dan Inovasi (R & I) Berdikari',
		},
		{
			id: 3003,
			title:
				'Mempercepat Pembangunan Ekonomi Berdikari Berbasis Pengetahuan dan Nilai Tambah',
		},
		{
			id: 3004,
			title: 'Mempercepat Pemerataan Pembangunan Ekonomi',
		},
		{
			id: 3005,
			title: 'Mempercepat Pembangunan Sistem Digital Nasional',
		},
		{
			id: 3006,
			title:
				'Mempercepat Perwujudan Lingkungan Hidup yang Berkelanjutan Melalui Ekonomi Hijau dan Biru',
		},
		{
			id: 3007,
			title:
				'Mempercepat Pelaksanaan Demokrasi Substantif, Penghormatan HAM, Supremasi Hukum yang Berkeadilan, dan Keamanan yang Profesional',
		},
		{
			id: 3008,
			title:
				'Mempercepat Peningkatan Peran Indonesia dalam Mewujudkan Tata Dunia Baru yang Lebih Berkeadilan Melalui Politik Luar Negeri Bebas Aktif dan Memperkuat Pertahanan Negara',
		},
	],
};
