<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	export let group: string | undefined = undefined;
	export let value: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let disabled = false;
	export { className as class };
	let className = '';
	let uniqueId = `radio--${(Math.random() * 100000000).toFixed(0)}`;

	type RadioGroupStore = Writable<{ name: string; group: string | number | undefined }>;
	const groupStore = getContext('radio-group') as RadioGroupStore;

	onMount(() => {
		if (!name && groupStore && $groupStore.name) name = $groupStore.name;
	});
</script>

<div class="radio {className}">
	<div class="icon">
		{#if groupStore && $groupStore.group}
			<input
				type="radio"
				bind:group={$groupStore.group}
				{name}
				{value}
				{disabled}
				id={uniqueId}
				on:change
				on:click
				on:focus
				on:mouseover
				on:mouseenter
				on:mouseleave
			/>
		{:else}
			<input
				type="radio"
				bind:group
				{name}
				{value}
				{disabled}
				id={uniqueId}
				on:change
				on:click
				on:focus
				on:mouseover
				on:mouseenter
				on:mouseleave
			/>
		{/if}

		<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect
				id="outline"
				x="2.5"
				y="2.5"
				width="11"
				height="11"
				rx="5.5"
				stroke="var(--figma-color-text)"
			/>
			<rect
				id="focus-ring"
				x="2"
				y="2"
				width="12"
				height="12"
				rx="6"
				stroke="none"
				stroke-width="2"
			/>
			<rect id="dot" x="5" y="5" width="6" height="6" rx="3" fill="none" fill-opacity="0.8" />
		</svg>
	</div>

	{#if $$slots.default}
		<label class="figma-font-ui11" class:disabled for={uniqueId}>
			<slot />
		</label>
	{/if}
</div>

<style>
	.radio {
		display: flex;
		align-items: center;
	}
	.icon {
		position: relative;
		cursor: default;
		width: 32px;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		position: absolute;
		opacity: 0;
		width: 100%;
		height: 100%;
		flex-shrink: 0;
	}

	label {
		user-select: none;
	}

	label.disabled {
		color: var(--figma-color-text-disabled);
	}

	input:checked + svg #dot {
		fill: var(--figma-color-text);
	}

	input:checked:disabled + svg #dot {
		fill: var(--figma-color-icon-disabled);
	}
	input:disabled + svg #outline {
		stroke: var(--figma-color-icon-disabled);
	}

	input:focus + svg #focus-ring {
		stroke: var(--figma-color-text-brand);
	}
</style>
