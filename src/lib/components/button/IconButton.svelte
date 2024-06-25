<script lang="ts">
	import { Icon } from '$lib';
	export let active = false;
	export let disabled = false;
	export let iconSvg: string | undefined = undefined;
	export let iconText: string | undefined = undefined;
	export { className as class };
	let className = '';

	let color: string;
	$: if (!active) color = '--figma-color-icon';
	$: if (active) color = '--figma-color-icon-onbrand';
	$: if (disabled) color = '--figma-color-icon-disabled';
</script>

<button
	class="{className} icon-button"
	class:active
	class:disabled
	{disabled}
	on:mousedown|preventDefault
	on:click={() => (active = !active)}
	on:click
	on:focus
	on:blur
	on:mouseover
	on:mouseenter
	on:mouseleave
>
	<Icon {iconSvg} {iconText} {color} />
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: var(--figma-size-medium);
		width: var(--figma-size-medium);
		border-radius: var(--border-radius-small);
		border: 2px solid transparent;
		background-color: var(--figma-color-bg);
		outline: none;
	}

	button:enabled:hover {
		background-color: var(--figma-color-bg-hover);
	}
	button.active:enabled:hover {
		background-color: var(--figma-color-bg-brand);
	}

	button:enabled:active,
	button:enabled:focus {
		border: 2px solid var(--figma-color-border-brand-strong);
		outline: none;
	}

	button.active {
		background-color: var(--figma-color-bg-brand);
	}

	:global(.icon-button *) {
		fill: inherit;
		color: inherit;
	}
</style>
