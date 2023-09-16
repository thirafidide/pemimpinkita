'use client';

import { PoliticalPartyId } from '@/political-party/PoliticalParty';
import { PoliticalPartyChip } from '@/political-party/PoliticalPartyChip';
import {
	DndContext,
	DragEndEvent,
	useDraggable,
	useDroppable,
} from '@dnd-kit/core';
import { useState } from 'react';

export default function CoalitionSimulation() {
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

			<DnDTestApp />
		</main>
	);
}

function DnDTestApp() {
	const [nonCoalition, setNonCoalition] = useState<PoliticalPartyId[]>([
		'BURUH',
		'DEMOKRAT',
		'PSI',
		'PKN',
	]);
	const [testCoalition, setTestCoalition] = useState<PoliticalPartyId[]>([
		'PDIP',
	]);

	function handleDragEnd(event: DragEndEvent) {
		const { active, over } = event;
		const coalition =
			over?.id === 'test-coalition' ? testCoalition : nonCoalition;

		// @ts-ignore
		if (!coalition.includes(active.id)) {
			if (over?.id === 'test-coalition') {
				// @ts-ignore
				setTestCoalition([...coalition, active.id]);
				setNonCoalition(nonCoalition.filter((id) => id !== active.id));
			} else {
				// @ts-ignore
				setNonCoalition([...coalition, active.id]);
				setTestCoalition(testCoalition.filter((id) => id !== active.id));
			}
		}
	}

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<Droppable id="non-coalition">
				<div className="flex-wrap">
					{nonCoalition.map((party) => (
						<Draggable key={party} id={party}>
							<PoliticalPartyChip id={party} />
						</Draggable>
					))}
				</div>
			</Droppable>

			<Droppable id="test-coalition">
				<div className="flex-wrap">
					{testCoalition.map((party) => (
						<Draggable key={party} id={party}>
							<PoliticalPartyChip id={party} />
						</Draggable>
					))}
				</div>
			</Droppable>
		</DndContext>
	);
}

function Droppable(props: any) {
	const { isOver, setNodeRef } = useDroppable({
		id: props.id,
	});

	return (
		<div ref={setNodeRef} className={isOver ? 'bg-slate-400' : 'bg-slate-600'}>
			{props.children}
		</div>
	);
}

function Draggable(props: any) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: props.id,
	});
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined;

	return (
		<button ref={setNodeRef} style={style} {...listeners} {...attributes}>
			{props.children}
		</button>
	);
}
