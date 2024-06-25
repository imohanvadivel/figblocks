<script lang="ts">
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let open = false;
	export let title: string;

	const ctx = getContext<Writable<HTMLElement>>('ctx');

	function init(node: HTMLElement) {
		ctx.set(node);

		const destroy = ctx.subscribe((x) => {
			if (x !== node) open = false;
		});

		return { destroy };
	}
</script>

<li class:open>
	<button
		class="figma-font-ui11-bold"
		type="button"
		on:click={() => (open = true)}
		on:click
		on:focus
		on:mouseover
		on:mouseenter
		on:mouseleave>{title}</button
	>

	{#if open}
		<div use:init>
			<slot />
		</div>
	{/if}
</li>

<style>
	li {
		display: flex;
		align-items: center;
	}
	button {
		border: none;
		background-color: transparent;
		padding: 0 var(--figma-size-xxsmall);
		color: var(--figma-color-text-secondary);
		font-weight: var(--font-weight-normal);
		height: var(--figma-size-large);
	}
	button:hover {
		color: var(--figma-color-text);
	}
	.open button {
		color: var(--figma-color-text);
		font-weight: var(--font-weight-bold);
	}

	li:first-child button {
		padding-left: var(--figma-size-xsmall);
	}
	li:last-child button {
		padding-right: var(--figma-size-xsmall);
	}
	div {
		display: contents;
		font-size: var(--font-size-small);
	}
</style>
