<script>
	export { className as class };
	let className = '';
</script>

<hr class={className} />

<style>
	hr {
		height: 1px;
		border-top: 1px solid var(--figma-color-border);
		border-bottom: none;
		border-left: none;
		border-right: none;
		width: 100%;
	}
</style>
