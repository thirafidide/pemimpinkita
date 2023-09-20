import { useDraggable } from '@dnd-kit/core';
import { PoliticalPartyId } from '@/political-party/PoliticalParty';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import { cn } from '@/lib/utils';

export interface DraggablePoliticalPartyChipProps {
	party: PoliticalPartyId;
}

export function DraggablePoliticalPartyChip(
	props: DraggablePoliticalPartyChipProps,
) {
	const { attributes, listeners, setNodeRef, transform, active } = useDraggable(
		{
			id: props.party,
		},
	);
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	return (
		<PoliticalPartyChip
			ref={setNodeRef}
			style={style}
			party={props.party}
			className={cn('touch-none', { invisible: active?.id === props.party })}
			{...listeners}
			{...attributes}
		/>
	);
}
