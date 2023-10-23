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
		shortName: 'Kang Emil',
		partyId: 'GOLKAR',
		photo: {
			src: '/foto-kandidat/Ridwan_Kamil.png',
			alt: 'Potret Resmi Ridwan Kamil sebagai Gubernur Jawa Barat Periode 2019-Sekarang',
			width: 809,
			height: 1036,
		},
		confirmedRunning: false,
	},

	AHY: {
		candidateId: 'AHY',
		name: 'Agus Harimurti Yudhoyono',
		shortName: 'AHY',
		partyId: 'DEMOKRAT',
		photo: {
			src: '/foto-kandidat/Agus_Harimurti_Yudhoyono.jpg',
			alt: 'Potret Agus Harimurti Yudhoyono sebagai Ketua Umum Partai Demokrat 2020-Sekarang',
			width: 643,
			height: 806,
		},
		confirmedRunning: false,
	},

	UNO: {
		candidateId: 'UNO',
		name: 'Sandiaga Uno',
		shortName: 'Sandi Uno',
		partyId: 'PPP',
		photo: {
			src: '/foto-kandidat/Sandiaga_Uno.png',
			alt: 'Potret Sandiaga Uno sebagai Menteri Pariwisata dan Ekonomi Kreatif 2020-Sekarang',
			width: 259,
			height: 355,
		},
		confirmedRunning: false,
	},

	ERICKTHOHIR: {
		candidateId: 'ERICKTHOHIR',
		name: 'Erick Thohir',
		photo: {
			src: '/foto-kandidat/Erick_Thohir.jpg',
			alt: 'Potret Erick Thohir sebagai Mentri BUMN 2020-Sekarang',
			width: 643,
			height: 806,
		},
		confirmedRunning: false,
	},

	GIRING: {
		candidateId: 'GIRING',
		name: 'Giring Ganesha',
		shortName: 'Giring Nidji',
		partyId: 'PSI',
		photo: {
			src: '/foto-kandidat/Giring_Ganesha.jpg',
			alt: 'Potret Giring Ganesha',
			width: 380,
			height: 623,
		},
		confirmedRunning: false,
	},

	GIBRAN: {
		candidateId: 'GIBRAN',
		name: 'Gibran Rakabuming Raka',
		shortName: 'Gibran',
		photo: {
			src: '/foto-kandidat/Gibran_Rakabuming_Raka.jpg',
			alt: 'Potret Gibran Rakabuming sebagai Wali Kota Surakarta 2021-Sekarang',
			width: 380,
			height: 623,
		},
		confirmedRunning: false,
	},

	PUAN: {
		candidateId: 'PUAN',
		name: 'Puan Maharani',
		shortName: 'Puan',
		partyId: 'PDIP',
		photo: {
			src: '/foto-kandidat/Puan_Maharani.jpg',
			alt: 'Potret Puan Maharani sebagai Ketua DPR RI 2019-Sekarang',
			width: 1066,
			height: 1136,
		},
		confirmedRunning: false,
	},

	MAHFUDMD: {
		candidateId: 'MAHFUDMD',
		name: 'Mohammad Mahfud Mahmodin',
		shortName: 'Mahfud MD',
		photo: {
			src: '/foto-kandidat/Mahfud_MD.jpg',
			alt: 'Potret Mahfud MD sebagai Menteri Koordinator Politik, Hukum, dan Keamanan Indonesia 2019-Sekarang',
			width: 640,
			height: 800,
		},
		confirmedRunning: false,
	},

	SUSI: {
		candidateId: 'SUSI',
		name: 'Susi Pudjiastuti',
		shortName: 'Susi',
		photo: {
			src: '/foto-kandidat/Susi_Pudjiastuti.jpg',
			alt: 'Potret Susi Pudjiastuti sebagai Menteri Kelautan dan Perikanan Indonesia 2014-2019',
			width: 2424,
			height: 3233,
		},
		confirmedRunning: false,
	},

	ZULHAS: {
		candidateId: 'ZULHAS',
		name: 'Zulkifli Hasan',
		shortName: 'Zulhas',
		partyId: 'PAN',
		photo: {
			src: '/foto-kandidat/Zulkifli_Hasan.jpg',
			alt: 'Potret Zulkifli Hasan sebagai Menteri Perdagangan Indonesia 2022-Sekarang',
			width: 1503,
			height: 2016,
		},
		confirmedRunning: false,
	},

	YUSRIL: {
		candidateId: 'YUSRIL',
		name: 'Yusril Ihza Mahendra',
		shortName: 'Yusril',
		partyId: 'PBB',
		photo: {
			src: '/foto-kandidat/Yusril_Ihza_Mahendra.png',
			alt: 'Potret Yusril Ihza Mahendra',
			width: 401,
			height: 550,
		},
		confirmedRunning: false,
	},

	JOKOWI: {
		candidateId: 'JOKOWI',
		name: 'Joko Widodo',
		shortName: 'Jokowi',
		partyId: 'PDIP',
		photo: {
			src: '/foto-kandidat/Joko_Widodo.jpg',
			alt: 'Potret Joko Widodo sebagai Presiden Republik Indonesia 2019-Sekarang',
			width: 4364,
			height: 5246,
		},
		confirmedRunning: false,
	},

	KHOFIFAH: {
		candidateId: 'KHOFIFAH',
		name: 'Khofifah Indar Parawansa',
		shortName: 'Khofifah',
		partyId: 'PKB',
		photo: {
			src: '/foto-kandidat/Khofifah_Indar_Parawansa.jpg',
			alt: 'Potret Khofifah Indar Parawansa sebagai Gubernur Jawa Timur 2019-Sekarang',
			width: 345,
			height: 475,
		},
		confirmedRunning: false,
	},

	AIRLANGGA: {
		candidateId: 'AIRLANGGA',
		name: 'Airlangga Hartarto',
		shortName: 'Airlangga',
		partyId: 'GOLKAR',
		photo: {
			src: '/foto-kandidat/Airlangga_Hartarto.jpg',
			alt: 'Potret Airlangga Hartarto sebagai Menteri Koordinator Bidang Perekonomian Indonesia 2019-Sekarang',
			width: 400,
			height: 533,
		},
		confirmedRunning: false,
	},

	KAESANG: {
		candidateId: 'KAESANG',
		name: 'Kaesang Pangarep',
		shortName: 'Kaesang',
		partyId: 'PSI',
		photo: {
			src: '/foto-kandidat/Kaesang_Pangarep.jpg',
			alt: 'Potret Kaesang Pangarep',
			width: 400,
			height: 533,
		},
		confirmedRunning: false,
	},
};
