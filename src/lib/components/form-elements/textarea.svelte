<script lang="ts">
	export let id = '';
	export let value = '';
	export let rows = 2;
	export let name = '';
	export let resize = false;
	export let disabled = false;
	export let placeholder = '';
	export { className as class };
	let className = '';
</script>

<textarea
	class={className}
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:change
	on:input
	on:keydown
	on:keyup
	on:focus
	on:blur
	on:paste
	class:resize
	bind:value
	{name}
	{id}
	{rows}
	{disabled}
	{placeholder}
/>

<style>
	textarea {
		font-family: var(--font-stack);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		position: relative;
		display: flex;
		overflow: visible;
		align-items: center;
		width: 100%;
		min-height: 62px;
		margin: 1px 0 1px 0;
		padding: 7px 4px 9px 7px;
		color: var(--figma-color-text);
		border: 1px solid var(--figma-color-border);
		border-radius: var(--border-radius-small);
		outline: none;
		resize: none;
		background-color: var(--figma-color-bg);
		overflow-y: auto;
	}

	textarea.resize {
		resize: vertical;
	}

	textarea:hover {
		color: var(--figma-color-text);
		border: 1px solid var(--figma-color-border);
	}

	textarea::placeholder {
		color: var(--figma-color-text-tertiary);
		border: 1px solid transparent;
	}

	textarea::selection {
		color: var(--figma-color-text);
		background-color: var(--figma-color-text-highlight);
	}

	textarea:active,
	textarea:active:hover,
	textarea:focus {
		color: var(--figma-color-text);
		border: 1px solid var(--figma-color-border-selected);
		outline: 1px solid var(--figma-color-border-selected);
		outline-offset: -2px;
	}

	/* Disabled
    --------------------------- */

	textarea:disabled,
	textarea:disabled:active,
	textarea:disabled:hover {
		color: var(--figma-color-text-disabled);
		border: 1px solid transparent;
		outline: none;
	}
</style>
