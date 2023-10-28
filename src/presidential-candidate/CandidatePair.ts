import { PoliticalPartyId } from '@/political-party/PoliticalParty';
import { CandidateId } from './Candidate';

export type CandidatePairId = 'AMIN' | 'GAMA' | 'PRABAN';

export interface CandidatePair {
	id: CandidatePairId;
	presidentialCandidate: CandidateId;
	vicePresidentialCandidate: CandidateId;
	coalition: {
		name: string;
		member: PoliticalPartyId[];
	};
	vision: string[];
}
