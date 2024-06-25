<script lang="ts">
	export let checked = false;
	export let name = '';
	export let value = '';
	export let disabled = false;
	export { className as class };
	let className = '';
	let uniqueId = `switch--${(Math.random() * 100000000).toFixed(0)}`;
</script>

<div class={className}>
	<input
		type="checkbox"
		{disabled}
		{name}
		bind:checked
		bind:value
		id={uniqueId}
		on:mousedown|preventDefault
		on:click
		on:change
		on:focus
		on:blur
		on:mouseover
		on:mouseenter
		on:mouseleave
	/>
	<label for={uniqueId}><slot /></label>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		cursor: default;
		position: relative;
	}

	input {
		opacity: 0;
	}

	input:checked + label::before {
		color: var(--figma-color-icon);
		background-color: var(--figma-color-bg-brand);
	}

	input:checked + label::after {
		transform: translateX(12px);
	}

	input:disabled + label {
		color: var(--figma-color-icon-disabled);
	}

	input:checked:disabled + label::before {
		background-color: var(--figma-color-icon);
	}

	input:focus + label::before {
		box-shadow: 0 0 0 2px var(--figma-color-border-selected);
	}

	label {
		display: flex;
		color: var(--figma-color-text);
		font-family: var(--font-stack);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-small);
		line-height: var(--font-lineHeight);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		user-select: none;
		padding: var(--figma-size-xxsmall) var(--figma-size-xsmall) var(--figma-size-xxsmall)
			var(--figma-size-medium);
	}

	label::before {
		content: '';
		width: var(--figma-size-small);
		height: 12px;
		display: block;
		position: absolute;
		top: 10px;
		left: 8px;
		background-color: var(--figma-color-icon-tertiary);
		border-radius: var(--border-radius-large);
		transition: background-color 0.2s 0.1s;
	}
	input:disabled + label::before{
		opacity: 0.3;
	}

	label::after {
		content: '';
		width: 10px;
		height: 10px;
		display: block;
		position: absolute;
		top: 11px;
		left: 9px;
		border-radius: 50%;
		background-color: var(--figma-color-icon-onbrand);
		transition: transform 0.2s;
	}
	input:disabled + label::after{
		opacity: 0.3;
	}
</style>
