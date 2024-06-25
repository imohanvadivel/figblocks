<script lang="ts">
	import { Icon } from '$lib';

	export let variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
	export let disabled = false;
	export let destructive = false;

	export { className as class };
	let className = '';

	let iconColor = '--figma-color-icon-onbrand';
	$: if (variant === 'secondary') iconColor = '--figma-color-icon';
	$: if (variant === 'tertiary') iconColor = '--figma-color-icon-brand';
	$: if (variant !== 'primary' && disabled) iconColor = '--figma-color-icon-disabled';
	$: if (variant !== 'primary' && destructive) iconColor = '--figma-color-icon-danger';
</script>

<button
	class="{variant} {className}"
	class:disabled
	class:destructive
	class:left-icon={$$slots['left-icon']}
	class:right-icon={$$slots['right-icon']}
	{disabled}
	on:mousedown|preventDefault
	on:submit|preventDefault
	on:click
	on:focus
	on:blur
	on:mouseover
	on:mouseleave
	on:mouseenter
>
	<!-- {#if iconSvg}
		<div class="icon-wrapper">
			<Icon {iconSvg} color={iconColor} />
		</div>
	{/if} -->
	{#if $$slots['left-icon']}
		<div class="icon left-icon">
			<slot name="left-icon" />
		</div>
	{/if}
	<slot />
	{#if $$slots['right-icon']}
		<div class="icon right-icon">
			<slot name="right-icon" />
		</div>
	{/if}
</button>

<style>
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius-large);
		color: var(--figma-color-text-onbrand);
		flex-shrink: 0;
		font-family: var(--font-stack);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight);
		letter-spacing: var(--font-letter-spacing-neg-small);
		line-height: var(--font-lineHeight);
		height: var(--figma-size-medium);
		padding: 0 var(--figma-size-xsmall);
		text-decoration: none;
		outline: none;
		border: 2px solid transparent;
		user-select: none;
		column-gap: 0.375rem;
	}

	.icon {
		width: var(--figma-size-xsmall);
		height: var(--figma-size-xsmall);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	/* .icon-wrapper :global(*) {
		position: absolute;
	} */

	button.left-icon {
		padding: 0 var(--figma-size-xsmall) 0 var(--figma-size-xxsmall);
	}
	button.right-icon {
		padding: 0 var(--figma-size-xxsmall) 0 var(--figma-size-xsmall) ;
	}

	/* Primary
  ----------------------------------------------------- */
	.primary {
		background-color: var(--figma-color-bg-brand);
		color: var(--figma-color-text-onbrand);
	}
	.primary :global(.icon svg path) {
		fill: var(--figma-color-icon-onbrand);
	}
	.primary:enabled:active {
		background-color: var(--figma-color-bg-brand-pressed);
	}
	.primary:enabled:focus {
		border: 2px solid var(--figma-color-border-onbrand);
	}

	.primary.destructive {
		background-color: var(--figma-color-bg-danger);
		color: var(--figma-color-text-ondanger);
	}
	.primary.destructive:enabled:active {
		background-color: var(--figma-color-bg-danger-pressed);
	}
	.primary.destructive:enabled:focus {
		border: 2px solid var(--figma-color-border-ondanger);
	}

	.primary:disabled {
		background-color: var(--figma-color-bg-disabled);
	}

	/* Secondary
  ----------------------------------------------------- */
	.secondary {
		background-color: transparent;
		border: 1px solid var(--figma-color-border-strong);
		color: var(--figma-color-text);
		padding: 0 calc(var(--figma-size-xsmall) + 1px);
		letter-spacing: var(--font-letter-spacing-pos-small);
	}
	.secondary :global(.icon svg path) {
		fill: var(--figma-color-icon);
	}
	.secondary:enabled:active {
		background-color: var(--figma-color-bg-pressed);
		border: 2px solid var(--figma-color-border-selected);
		padding: 0 var(--figma-size-xsmall);
	}
	.secondary:enabled:focus {
		border: 2px solid var(--figma-color-border-selected);
		padding: 0 var(--figma-size-xsmall);
	}

	.secondary.destructive {
		border: 1px solid var(--figma-color-border-danger-strong);
		color: var(--figma-color-text-danger);
	}
	.secondary.destructive:active {
		background-color: var(--figma-color-bg-pressed);
		border: 2px solid var(--figma-color-border-danger-strong);
		padding: 0 var(--figma-size-xsmall);
	}
	.secondary.destructive:focus {
		border: 2px solid var(--figma-color-border-danger-strong);
		padding: 0 var(--figma-size-xsmall);
	}

	.secondary:disabled {
		border: 1px solid var(--figma-color-border-disabled);
		color: var(--figma-color-text-disabled);
	}

	.secondary.left-icon {
		padding: 0 calc(var(--figma-size-xsmall) + 1px) 0 calc(var(--figma-size-xxsmall) + 1px);
	}
	.secondary.left-icon:enabled:active,
	.secondary.left-icon:enabled:focus {
		padding: 0 var(--figma-size-xsmall) 0 var(--figma-size-xxsmall);
	}

	.secondary.right-icon {
		padding: 0 calc(var(--figma-size-xxsmall) + 1px) 0 calc(var(--figma-size-xsmall) + 1px);
	}
	.secondary.right-icon:enabled:active,
	.secondary.right-icon:enabled:focus {
		padding: 0 var(--figma-size-xxsmall) 0 var(--figma-size-xsmall);
	}
	/* Tertiary
  ----------------------------------------------------- */

	.tertiary {
		background-color: initial;
		border: 1px solid transparent;
		color: var(--figma-color-text-brand);
		padding: 0;
		cursor: pointer;
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-small);
		column-gap: var(--figma-size-xxxsmall);
	}
	.tertiary :global(.icon svg path) {
		fill: var(--figma-color-icon-brand);
	}
	.tertiary:disabled {
		color: var(--figma-color-text-disabled);
		cursor: auto;
	}

	.tertiary:enabled:focus {
		text-decoration: underline;
	}

	.tertiary.destructive {
		color: var(--figma-color-text-danger);
	}
</style>
