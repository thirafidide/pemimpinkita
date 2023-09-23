'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
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

const candidates = [
	{
		value: 'ridwankamil',
		label: 'Ridwan Kamil',
	},
];

export function CandidatePicker() {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState('');

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-28 h-36 justify-between"
				>
					{value
						? candidates.find((candidate) => candidate.value === value)?.label
						: 'Pilih Cawapres'}
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[200px] p-0">
				<Command>
					<CommandInput placeholder="Cari tokoh" />
					<CommandEmpty>Tokoh tidak ditemukan</CommandEmpty>
					<CommandGroup>
						{candidates.map((candidate) => (
							<CommandItem
								key={candidate.value}
								value={candidate.value}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? '' : currentValue);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === candidate.value ? 'opacity-100' : 'opacity-0',
									)}
								/>
								{candidate.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
