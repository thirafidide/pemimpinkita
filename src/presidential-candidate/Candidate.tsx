import { PoliticalPartyId } from '@/political-party/PoliticalParty';

export interface Candidate {
	candidateId: CandidateId;
	name: string;
	shortName?: string;
	partyId: PoliticalPartyId | 'INDEPENDENT';
	photo: {
		src: string;
		width: number;
		height: number;
		alt: string;
	};
	confirmedRunning: boolean;
}

export type CandidateId =
	// confirmed presidential candidate
	| 'PRABOWO'
	| 'ANIES'
	| 'GANJAR'
	// confirmed vice presidential candidate
	| 'IMIN'
	// potential candidate
	| 'RIDWANKAMIL'
	| 'AHY'
	| 'UNO'
	| 'ERICKTHOHIR'
	| 'GIRING'
	| 'GIBRAN'
	| 'PUAN'
	| 'MAHFUDMD';
