import type { ActionReturn } from 'svelte/action';

type outclickEvent = {
	'on:outclick': (event: MouseEvent) => void;
};

export function clickOutside(node: HTMLElement): ActionReturn<undefined, outclickEvent> {
	function handleClick(event: MouseEvent) {
		const targetNode = event.target as Node | null;

		if (targetNode !== null && !node.contains(targetNode)) {
			node.dispatchEvent(new CustomEvent('outclick', { detail: event }));
		}
	}

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
