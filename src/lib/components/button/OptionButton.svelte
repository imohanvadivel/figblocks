<script lang="ts">
	import { Icon } from '$lib';
	export let active = false;
	export let disabled = false;
	export let iconSvg: string | undefined = undefined;
	export let iconText: string | undefined = undefined;
	export let inactiveIconSVG: string | undefined = undefined;
	export let inactiveIconText: string | undefined = undefined;

	export { className as class };
	let className = '';
</script>

<button
	class={className}
	class:active
	class:disabled
	class:inactive={!active}
	{disabled}
	on:click={() => (active = !active)}
	on:mousedown|preventDefault
	on:click
	on:focus
	on:blur
	on:mouseover
	on:mouseenter
	on:mouseleave
>
	{#if inactiveIconSVG || inactiveIconText}
		{#if active}
			<Icon {iconSvg} {iconText} color="--figma-color-icon" />
		{:else}
			<Icon iconSvg={inactiveIconSVG} iconText={inactiveIconText} color="--figma-color-icon" />
		{/if}
	{:else}
		<Icon {iconSvg} {iconText} color="--figma-color-icon" />
	{/if}
</button>

<style>
	button {
		height: 28px;
		width: 28px;
		border-radius: 2px;
		border: 2px solid var(--figma-color-bg);
		outline: none;
		appearance: none;
		background-color: var(--figma-color-bg);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	button:hover {
		outline: 1px solid var(--figma-color-border);
	}

	button.active {
		border-radius: var(--border-radius-small);
		background-color: var(--figma-color-bg-hover);
	}

	button:focus {
		outline: 2px solid var(--figma-color-border-selected);
	}

	button:disabled {
		outline: none;
	}

	button :global(*) {
		position: relative;
		z-index: 2;
	}

	button.disabled :global(*) {
		fill: var(--figma-color-icon-disabled);
	}
</style>
