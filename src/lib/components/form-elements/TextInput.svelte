<script lang="ts">
	import { Icon } from '$lib';

	export let id = '';
	export let value: any = '';
	export let name = '';
	export let border = false;
	export let disabled = false;
	export let iconText: string = '';
	export let iconSvg: string = '';
	export let spin = false;
	export let invalid = false;
	export let errorMessage = '';
	export let placeholder = '';
	export { className as class };
	let className = '';
</script>

<div class="input {className}">
	{#if iconText || iconSvg}
		<div class="icon">
			<Icon {iconText} {spin} {iconSvg} color="--figma-color-icon" />
		</div>
	{/if}

	<input
		type="text"
		bind:value
		{name}
		{id}
		{disabled}
		{placeholder}
		class:invalid
		class:border
		class:has-icon={iconSvg || iconText}
		on:change
		on:input
		on:click
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:keydown
		on:keyup
		on:focus
		on:blur
		on:paste
	/>

	{#if invalid}
		<div class="error">{errorMessage}</div>
	{/if}
</div>

<style>
	.input {
		position: relative;
		width: 100%;
	}

	input {
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		position: relative;
		display: flex;
		align-items: center;
		overflow: visible;
		width: 100%;
		height: 30px;
		margin: 1px 0;
		padding: 7px 4px 7px 7px;
		color: var(--figma-color-text);
		border: 1px solid transparent;
		border-radius: var(--border-radius-small);
		outline: none;
		background-color: var(--figma-color-bg);
	}

	input:hover {
		color: var(--figma-color-text-hover);
		border: 1px solid var(--figma-color-border);
	}

	input::selection {
		color: var(--figma-color-text);
		background-color: var(--figma-color-text-highlight);
	}

	input::placeholder {
		color: var(--figma-color-text-tertiary);
		border: 1px solid transparent;
	}

	input:placeholder-shown {
		border: 1px solid var(--figma-color-border);
	}

	input:focus,
	input:active {
		color: var(--figma-color-text);
		border: 1px solid var(--figma-color-border-selected);
		outline: 1px solid var(--figma-color-border-selected);
		outline-offset: -2px;
	}

	.has-icon {
		padding-left: 32px;
	}

	/* Disabled
    --------------------------- */

	input:disabled {
		color: var(--figma-color-text-disabled);
	}

	input:disabled:active,
	input:disabled:hover {
		border: 1px solid transparent;
		outline: none;
	}

	/* Forced Border
    --------------------------- */

	.border,
	.border:placeholder-shown {
		border: 1px solid var(--figma-color-border);
	}

	.border:disabled,
	.border:disabled:placeholder-shown,
	.border:disabled:placeholder-shown:active {
		border: 1px solid transparent;
		outline: none;
	}

	/* Invalid
    --------------------------- */

	.error {
		color: var(--figma-color-text-danger);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		padding-top: var(--figma-size-xxxsmall);
		padding-left: var(--figma-size-xxsmall);
	}

	.invalid,
	.invalid:hover,
	.invalid:focus {
		border: 1px solid var(--figma-color-border-danger-strong);
		outline: 1px solid var(--figma-color-border-danger-strong);
		outline-offset: -2px;
	}

	/* Icon
    --------------------------- */

	.icon {
		position: absolute;
		top: -1px;
		left: 0;
		width: var(--figma-size-medium);
		height: var(--figma-size-medium);
		z-index: 1;
	}
</style>
