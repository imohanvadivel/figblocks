<script lang="ts">
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import { disclosure } from './DisclosureItem.svelte';

	const dispatch = createEventDispatcher();
	const selected = writable<string | undefined>();

	export let border = true;
	export { className as class };
	let className = '';
	let disclosureWrapper;

	const clickHandler = function (itemId: string) {
		let value;
		if ($selected != itemId) value = itemId;
		selected.set(value);
		dispatch('change', value);
	};

	setContext(disclosure, { clickHandler, selected });
</script>

<ul class={className} bind:this={disclosureWrapper} class:border >
	<slot />
</ul>

<style>
	ul {
		position: relative;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	ul.border :global(li) {
		border-bottom: 1px solid var(--figma-color-border);
	}

	ul.border :global(li:last-child) {
		border-bottom: 1px solid transparent;
	}
</style>
