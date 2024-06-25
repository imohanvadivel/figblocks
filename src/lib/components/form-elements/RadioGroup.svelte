<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let group: string | number | undefined = undefined;
	export let name = 'radio-' + crypto.randomUUID();
	export let inline = false;
	// export let rowGap: string | undefined = undefined;
	export let columnGap: string | undefined = undefined;

	const groupStore = writable({ name, group });
	setContext('radio-group', groupStore);
</script>

<fieldset class:inline style="--radio-column-gap: {columnGap}" on:change on:focus>
	<slot />
</fieldset>

<style>
	fieldset {
		border: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		/* row-gap: var(--radio-row-gap, 0.25rem); */
	}
	.inline {
		flex-direction: row;
		column-gap: var(--checkbox-column-gap, 1rem);
	}
</style>
