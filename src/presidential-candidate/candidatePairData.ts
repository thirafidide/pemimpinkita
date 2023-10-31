import { CandidatePair, CandidatePairId } from './CandidatePair';

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
