<script lang="ts">
	export { _for as for };
	let _for = '';
	export { className as class };
	let className = '';
</script>

<label class={className} for={_for}>
	<slot />
</label>

<style>
	label {
		font-family: var(--font-stack);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		color: var(--figma-color-text-secondary);
		height: var(--figma-size-medium);
		width: 100%;
		display: flex;
		align-items: center;
		cursor: default;
		user-select: none;
		padding: 0 var(--figma-size-xxxsmall) 0 var(--figma-size-xxsmall);
    column-gap: var(--figma-size-xxsmall);
	}
</style>
