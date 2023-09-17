'use client';

import { CoalitionSimulationCard } from '@/coalition-simulation/CoalitionSimulationCard';
import { DraggablePoliticalPartyChip } from '@/coalition-simulation/DraggablePoliticalPartyChip';
import {
	PoliticalPartyId,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Dispatch, SetStateAction, useState } from 'react';

export default function CoalitionSimulation() {
	const [prabowoCoalitionMember, setPrabowoCoalitionMember] = useState<
		PoliticalPartyId[]
	>(['GERINDRA', 'GOLKAR', 'PAN', 'PBB', 'GARUDA', 'GELORA']);
	const [aniesCoalitionMember, setAniesCoalitionMember] = useState<
		PoliticalPartyId[]
	>(['NASDEM', 'PKB', 'PKS', 'UMMAT']);
	const [ganjarCoalitionMember, setGanjarCoalitionMember] = useState<
		PoliticalPartyId[]
	>(['PDIP', 'PPP', 'HANURA', 'PERINDO']);
	const [nonCoalitionMember, setNonCoalitionMember] = useState<
		PoliticalPartyId[]
	>(['DEMOKRAT', 'PSI', 'PKN', 'BURUH']);

	function addToCoalition(
		coalitionSetter: Dispatch<SetStateAction<PoliticalPartyId[]>>,
		party: PoliticalPartyId,
	) {
		coalitionSetter((coalition) => {
			if (coalition.includes(party)) {
				return coalition;
			}

			return coalition.concat(party);
		});
	}

	function removeFromCoalition(
		coalitionSetter: Dispatch<SetStateAction<PoliticalPartyId[]>>,
		party: PoliticalPartyId,
	) {
		return coalitionSetter((coalition) =>
			coalition.filter((id) => id !== party),
		);
	}

	function scrollToCoalition(coalitionId: string) {
		const element = document.getElementById(coalitionId);
		if (element) {
			// Delay for a bit to wait for coalition images and info to appear so no more relayout
			setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 50);
		}
	}

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		const party = active.id as PoliticalPartyId;

		switch (over?.id) {
			case 'prabowo-coalition':
				addToCoalition(setPrabowoCoalitionMember, party);
				removeFromCoalition(setAniesCoalitionMember, party);
				removeFromCoalition(setGanjarCoalitionMember, party);
				removeFromCoalition(setNonCoalitionMember, party);

				scrollToCoalition('prabowo-coalition');
				break;
			case 'anies-coalition':
				removeFromCoalition(setPrabowoCoalitionMember, party);
				addToCoalition(setAniesCoalitionMember, party);
				removeFromCoalition(setGanjarCoalitionMember, party);
				removeFromCoalition(setNonCoalitionMember, party);

				scrollToCoalition('anies-coalition');
				break;
			case 'ganjar-coalition':
				removeFromCoalition(setPrabowoCoalitionMember, party);
				removeFromCoalition(setAniesCoalitionMember, party);
				addToCoalition(setGanjarCoalitionMember, party);
				removeFromCoalition(setNonCoalitionMember, party);

				scrollToCoalition('ganjar-coalition');
				break;
			default:
				removeFromCoalition(setPrabowoCoalitionMember, party);
				removeFromCoalition(setAniesCoalitionMember, party);
				removeFromCoalition(setGanjarCoalitionMember, party);
				addToCoalition(setNonCoalitionMember, party);
				break;
		}
	}

	return (
		<main className="flex flex-col gap-12 container p-0 mx-auto">
			<div className="flex flex-col gap-6">
				<h1 className="scroll-m-20 text-5xl font-extrabold tracking-tight">
					Simulasi Koalisi Pilpres 2024
				</h1>

				<div className="flex flex-col gap-1 max-w-2xl">
					<p>
						Saat ini sebagian bakal capres masih belum menentukan pasangan
						cawapresnya, dan partai-partai politik masih saling tarik-menarik
						untuk membentuk koalisi untuk mendukung pasangan capres-cawapres
						masing-masing. Bagaimana kalau Prabowo berhasil menarik Demokrat ke
						koalisinya? Apa jadinya jika Golkar pindah haluan ke koalisi Anies
						atau Ganjar? Simulasikan hal tersebut di sini dan lihat potensial
						perubahan suara dan kekuatan koalisi secara keseluruhan.
					</p>
				</div>
			</div>

			<DndContext onDragEnd={handleDragEnd}>
				<div className="flex flex-col md:flex-row gap-3 justify-stretch">
					<CoalitionSimulationCard
						presidentialCandidate={{
							name: 'Prabowo Subianto',
							photo: {
								src: '/foto-kandidat/Prabowo_Subianto.jpg',
								alt: 'Potret Resmi Prabowo Subianto sebagai Mentri Pertahanan Republik Indonesia Periode 2019-Sekarang',
							},
						}}
						coalitionId="prabowo-coalition"
						coalitionMember={prabowoCoalitionMember}
					/>

					<CoalitionSimulationCard
						presidentialCandidate={{
							name: 'Anies Baswedan',
							photo: {
								src: '/foto-kandidat/Anies_Baswedan.jpg',
								alt: 'Potret Resmi Anies Baswedan sebagai Gubernur DKI Jakarta Periode 2017-2022',
							},
						}}
						vicePresidentialCandidate={{
							name: 'Muhaimin Iskandar',
							photo: {
								src: '/foto-kandidat/Muhaimin_Iskandar.jpg',
								alt: 'Potret Resmi Muhaimin Iskandar sebagai Wakil Ketua DPR Republik Indonesia Periode 2019-Sekarang',
							},
						}}
						coalitionId="anies-coalition"
						coalitionMember={aniesCoalitionMember}
					/>

					<CoalitionSimulationCard
						presidentialCandidate={{
							name: 'Ganjar Pranowo',
							photo: {
								src: '/foto-kandidat/Ganjar_Pranowo.jpg',
								alt: 'Potret Resmi Ganjar Pranowo sebagai Gubernur Jawa Tengah Periode 2018-2023',
							},
						}}
						coalitionId="ganjar-coalition"
						coalitionMember={ganjarCoalitionMember}
					/>
				</div>

				<PartiesNotInCoalitionSection parties={nonCoalitionMember} />
			</DndContext>
		</main>
	);
}

const percentageFormatter = new Intl.NumberFormat('id-ID', {
	maximumFractionDigits: 2,
	style: 'percent',
});

function PartiesNotInCoalitionSection(props: { parties: PoliticalPartyId[] }) {
	const partiesData = props.parties
		.map((partyId) => politicalPartyData[partyId])
		.sort(
			(partyA, partyB) =>
				(partyB.previousPollPercentResult || 0) -
				(partyA.previousPollPercentResult || 0),
		);

	let totalPreviousPollStanding = 0;
	let totalPreviousDPRSeats = 0;
	for (let { previousPollPercentResult, previousDPRSeats } of partiesData) {
		totalPreviousPollStanding += previousPollPercentResult || 0;
		totalPreviousDPRSeats += previousDPRSeats || 0;
	}

	return (
		<div className="flex flex-col gap-4">
			<p className="text-sm">
				Tekan dan seret partai di bawah ini dan taruh di koalisi yang anda
				inginkan
			</p>

			<div className="flex gap-2 flex-wrap">
				{partiesData.map(({ partyId }) => (
					<DraggablePoliticalPartyChip key={partyId} party={partyId} />
				))}
			</div>
		</div>
	);
}
