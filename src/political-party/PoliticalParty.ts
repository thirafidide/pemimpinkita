export type PoliticalPartyId =
	| 'PKB'
	| 'GERINDRA'
	| 'PDIP'
	| 'GOLKAR'
	| 'NASDEM'
	| 'BURUH'
	| 'GELORA'
	| 'PKS'
	| 'PKN'
	| 'HANURA'
	| 'GARUDA'
	| 'PAN'
	| 'PBB'
	| 'DEMOKRAT'
	| 'PSI'
	| 'PERINDO'
	| 'PPP'
	| 'UMMAT';

export interface PoliticalParty {
	name: string;
	fullName: string;
	logo: {
		src: string;
		width: number;
		height: number;
	};
	previousPollPercentResult?: number;
	previousDPRSeats?: number;
	newPartyIn2024?: boolean;
}

export const politicalPartyData: Record<PoliticalPartyId, PoliticalParty> = {
	PKB: {
		name: 'PKB',
		fullName: 'Partai Kebangkitan Bangsa',
		previousPollPercentResult: 9.69,
		previousDPRSeats: 58,
		logo: {
			src: '/partai-politik/pkb.png',
			width: 320,
			height: 414,
		},
	},

	GERINDRA: {
		name: 'Gerindra',
		fullName: 'Partai Gerakan Indonesia Raya',
		previousPollPercentResult: 12.57,
		previousDPRSeats: 78,
		logo: {
			src: '/partai-politik/gerindra.png',
			width: 360,
			height: 432,
		},
	},

	GOLKAR: {
		name: 'Golkar',
		fullName: 'Partai Golongan Karya',
		previousPollPercentResult: 12.31,
		previousDPRSeats: 85,
		logo: {
			src: '/partai-politik/golkar.png',
			width: 360,
			height: 345,
		},
	},

	PAN: {
		name: 'PAN',
		fullName: 'Partai Amanat Nasional',
		previousPollPercentResult: 6.84,
		previousDPRSeats: 44,
		logo: {
			src: '/partai-politik/pan.png',
			width: 300,
			height: 422,
		},
	},

	PBB: {
		name: 'PBB',
		fullName: 'Partai Bulan Bintang',
		previousPollPercentResult: 0.79,
		previousDPRSeats: 0,
		logo: {
			src: '/partai-politik/pbb.png',
			width: 400,
			height: 574,
		},
	},

	GARUDA: {
		name: 'Garuda',
		fullName: 'Partai Garda Perubahan Indonesia',
		previousPollPercentResult: 0.5,
		previousDPRSeats: 0,
		logo: {
			src: '/partai-politik/garuda.png',
			width: 360,
			height: 360,
		},
	},

	GELORA: {
		name: 'Gelora',
		fullName: 'Partai Gelombang Rakyat Indonesia',
		newPartyIn2024: true,
		logo: {
			src: '/partai-politik/gelora.png',
			width: 360,
			height: 506,
		},
	},

	NASDEM: {
		name: 'NasDem',
		fullName: 'Partai Nasional Demokrat',
		previousPollPercentResult: 9.05,
		previousDPRSeats: 59,
		logo: {
			src: '/partai-politik/nasdem.png',
			width: 400,
			height: 400,
		},
	},

	PKS: {
		name: 'PKS',
		fullName: 'Partai Keadilan Sejahtera',
		previousPollPercentResult: 8.21,
		previousDPRSeats: 50,
		logo: {
			src: '/partai-politik/pks.png',
			width: 300,
			height: 421,
		},
	},

	UMMAT: {
		name: 'Ummat',
		fullName: 'Partai Ummat',
		newPartyIn2024: true,
		logo: {
			src: '/partai-politik/ummat.png',
			width: 291,
			height: 344,
		},
	},

	PDIP: {
		name: 'PDI-P',
		fullName: 'Partai Demokrasi Indonesia Perjuangan',
		previousPollPercentResult: 19.33,
		previousDPRSeats: 128,
		logo: {
			src: '/partai-politik/pdip.png',
			width: 360,
			height: 407,
		},
	},

	PPP: {
		name: 'PPP',
		fullName: 'Partai Persatuan Pembangunan',
		previousPollPercentResult: 4.52,
		previousDPRSeats: 19,
		logo: {
			src: '/partai-politik/ppp.png',
			width: 400,
			height: 400,
		},
	},

	HANURA: {
		name: 'Hanura',
		fullName: 'Partai Hati Nurani Rakyat',
		previousPollPercentResult: 1.54,
		previousDPRSeats: 0,
		logo: {
			src: '/partai-politik/hanura.png',
			width: 400,
			height: 231,
		},
	},

	PERINDO: {
		name: 'Perindo',
		fullName: 'Partai Persatuan Indonesia',
		previousPollPercentResult: 2.67,
		previousDPRSeats: 0,
		logo: {
			src: '/partai-politik/perindo.png',
			width: 349,
			height: 256,
		},
	},

	DEMOKRAT: {
		name: 'Demokrat',
		fullName: 'Partai Demokrat',
		previousPollPercentResult: 7.77,
		previousDPRSeats: 54,
		logo: {
			src: '/partai-politik/demokrat.png',
			width: 500,
			height: 333,
		},
	},

	PSI: {
		name: 'PSI',
		fullName: 'Partai Solidaritas Indonesia',
		previousPollPercentResult: 1.89,
		previousDPRSeats: 0,
		logo: {
			src: '/partai-politik/psi.png',
			width: 360,
			height: 456,
		},
	},

	PKN: {
		name: 'PKN',
		fullName: 'Partai Kebangkitan Nusantara',
		newPartyIn2024: true,
		logo: {
			src: '/partai-politik/pkn.png',
			width: 360,
			height: 360,
		},
	},

	BURUH: {
		name: 'Buruh',
		fullName: 'Partai Buruh',
		newPartyIn2024: true,
		logo: {
			src: '/partai-politik/buruh.png',
			width: 360,
			height: 144,
		},
	},
};