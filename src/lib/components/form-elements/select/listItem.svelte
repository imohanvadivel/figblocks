<script lang="ts">
	export let itemId: string | number | undefined;
	export let selected = false;
	export let label = '';
	export { className as class };
	let className = '';
	
</script>

<li class={className}>
	<button itemId={itemId?.toString()} class:highlight={selected} on:mouseenter on:click on:keydown>
		<div class="icon" class:selected />
		<div class="label">{label}</div>
	</button>
</li>

<style>
	button {
		background: none;
		border: none;
		outline: none;
		width: 100%;
		color: var(--figma-color-text-menu-text);
		font-family: var(--font-stack);
		font-size: var(--font-size-small);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-neg-xsmall);
		line-height: var(--font-lineHeight);
		padding: 0px var(--figma-size-xsmall) 0px var(--figma-size-xxsmall);
		height: var(--figma-size-small);
		user-select: none;
		cursor: default;
		display: flex;
		align-items: center;
	}

	.label {
		overflow-x: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: var(--figma-size-small);
		pointer-events: none;
	}

	.highlight,
	button:hover,
	button:focus {
		background-color: var(--figma-color-bg-brand);
	}

	.icon {
		width: var(--figma-size-xsmall);
		height: var(--figma-size-xsmall);
		margin-right: var(--figma-size-xxsmall);
		opacity: 0;
		pointer-events: none;
		background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
		background-repeat: no-repeat;
		background-position: center center;
	}

	.icon.selected {
		opacity: 1;
	}
</style>
