import { Candidate, CandidateId } from './Candidate';

export const candidateData: Record<CandidateId, Candidate> = {
	PRABOWO: {
		candidateId: 'PRABOWO',
		name: 'Prabowo Subianto',
		shortName: 'Prabowo',
		partyId: 'GERINDRA',
		photo: {
			src: '/foto-kandidat/Prabowo_Subianto.jpg',
			alt: 'Potret Resmi Prabowo Subianto sebagai Mentri Pertahanan Republik Indonesia Periode 2019-Sekarang',
			width: 786,
			height: 1086,
		},
		confirmedRunning: true,
	},

	ANIES: {
		candidateId: 'ANIES',
		name: 'Anies Baswedan',
		shortName: 'Anies',
		partyId: 'INDEPENDENT',
		photo: {
			src: '/foto-kandidat/Anies_Baswedan.jpg',
			alt: 'Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022',
			width: 1920,
			height: 2398,
		},
		confirmedRunning: true,
	},

	GANJAR: {
		candidateId: 'GANJAR',
		name: 'Ganjar Pranowo',
		shortName: 'Ganjar',
		partyId: 'PDIP',
		photo: {
			src: '/foto-kandidat/Ganjar_Pranowo.jpg',
			alt: 'Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023',
			width: 799,
			height: 1021,
		},
		confirmedRunning: true,
	},

	IMIN: {
		candidateId: 'IMIN',
		name: 'Muhaimin Iskandar',
		shortName: 'Cak Imin',
		partyId: 'PKB',
		photo: {
			src: '/foto-kandidat/Muhaimin_Iskandar.jpg',
			alt: 'Potret Resmi Muhaimin Iskandar sebagai Wakil Ketua DPR Republik Indonesia Periode 2019-Sekarang',
			width: 1066,
			height: 1134,
		},
		confirmedRunning: true,
	},

	RIDWANKAMIL: {
		candidateId: 'RIDWANKAMIL',
		name: 'Ridwan Kamil',
		shortName: 'RK',
		partyId: 'GOLKAR',
		photo: {
			src: '/foto-kandidat/Muhaimin_Iskandar.jpg',
			alt: 'Potret Resmi Muhaimin Iskandar sebagai Wakil Ketua DPR Republik Indonesia Periode 2019-Sekarang',
			width: 1066,
			height: 1134,
		},
		confirmedRunning: false,
	},
};
