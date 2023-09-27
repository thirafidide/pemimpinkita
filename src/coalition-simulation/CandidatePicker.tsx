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

const potentialCandidateData = Object.values(candidateData).filter(
	({ confirmedRunning }) => !confirmedRunning,
);

export function CandidatePicker() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

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
								partyId={
									selectedCandidate.partyId !== 'INDEPENDENT'
										? selectedCandidate.partyId
										: undefined
								}
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
								setValue('');
								setOpen(false);
							}}
						>
							Tanpa Cawapres
						</CommandItem>

						{potentialCandidateData.map((candidate) => {
							const party =
								candidate.partyId !== 'INDEPENDENT'
									? politicalPartyData[candidate.partyId]
									: null;

							const logoHeight = 16;
							const logoWidth = party
								? (logoHeight * party.logo.width) / party.logo.height
								: 0;

							return (
								<CommandItem
									key={candidate.candidateId}
									value={candidate.candidateId}
									onSelect={(currentValue) => {
										// Looks like CMDK lowercased the value for some reason
										setValue(currentValue.toUpperCase());
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
