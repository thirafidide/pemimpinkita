'use client';

import * as React from 'react';
import { Button } from '@/components/ui/Button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/Command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/Popover';
import { candidateData } from '@/presidential-candidate/candidateData';
import { CandidatePhoto } from '@/presidential-candidate/CandidatePhoto';
import Image from 'next/image';
import {
	getPartyDescriptiveName,
	politicalPartyData,
} from '@/political-party/PoliticalParty';
import { CandidateId } from '@/presidential-candidate/Candidate';

const potentialCandidateData = Object.values(candidateData)
	.filter(({ confirmedRunning }) => !confirmedRunning)
	.sort((candidateA, candidateB) => {
		const candidateAPartyName =
			candidateA.partyId && politicalPartyData[candidateA.partyId].name;
		const candidateBPartyName =
			candidateB.partyId && politicalPartyData[candidateB.partyId].name;

		let partyNameCompare = 0;
		if (candidateAPartyName && candidateBPartyName) {
			partyNameCompare = candidateAPartyName.localeCompare(candidateBPartyName);
		} else if (candidateAPartyName) {
			partyNameCompare = -1;
		} else if (candidateBPartyName) {
			partyNameCompare = 1;
		}

		if (partyNameCompare !== 0) {
			return partyNameCompare;
		}

		return candidateA.name.localeCompare(candidateB.name);
	});

export interface CandidatePickerProps {
	value: CandidateId | null;
	setValue: (candidate: CandidateId | null) => void;
}

export function CandidatePicker(props: CandidatePickerProps) {
	const { value, setValue } = props;
	const [open, setOpen] = React.useState(false);

	const selectedCandidate = potentialCandidateData.find(
		({ candidateId }) => candidateId === value,
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="relative w-28 h-36 justify-between border-none outline-dashed outline-2 p-0 overflow-hidden outline-yellow-400"
				>
					{selectedCandidate && (
						<div className="absolute top-0 left-0 hover:opacity-10">
							<CandidatePhoto
								partyId={selectedCandidate.partyId}
								src={selectedCandidate.photo.src}
								alt={selectedCandidate.photo.alt}
								showParty
							/>
						</div>
					)}

					<p className="p-2">Pilih Cawapres</p>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0">
				<Command>
					<CommandInput placeholder="Cari tokoh" />
					<CommandEmpty>Tokoh tidak ditemukan</CommandEmpty>
					<CommandGroup>
						<CommandItem
							value="NULL"
							onSelect={() => {
								setValue(null);
								setOpen(false);
							}}
						>
							Tanpa Cawapres
						</CommandItem>

						{potentialCandidateData.map((candidate) => {
							const party =
								candidate.partyId && politicalPartyData[candidate.partyId];

							const logoHeight = 16;
							const logoWidth = party
								? (logoHeight * party.logo.width) / party.logo.height
								: 0;

							return (
								<CommandItem
									key={candidate.candidateId}
									value={candidate.candidateId}
									onSelect={() => {
										setValue(candidate.candidateId);
										setOpen(false);
									}}
									className="flex justify-between"
								>
									{candidate.name}

									{party && (
										<Image
											className="h-4 w-auto pr-2 object-scale-down"
											src={party.logo.src}
											alt={`Logo ${getPartyDescriptiveName(party)}`}
											width={logoWidth}
											height={logoHeight}
										/>
									)}
								</CommandItem>
							);
						})}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
