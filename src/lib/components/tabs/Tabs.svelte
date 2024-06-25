<script lang="ts">
	import { setContext } from 'svelte';
	import { Divider } from '../../index';
	import { writable } from 'svelte/store';

	export { className as class };
	let className = '';

	const ctx = writable<HTMLElement>();
	setContext('ctx', ctx);

	function init(node: HTMLElement) {
		const destroy = ctx.subscribe((x) => {
			if (x) node.replaceChildren(x);
		});

		return { destroy };
	}
</script>

<ul class={className}>
	<slot />
</ul>
<!-- <Divider /> -->
<div use:init />

<style>
	ul {
		display: flex;
		list-style: none;
		width: 100%;
		border-bottom: 1px solid var(--figma-color-border);
		font-size: var(--font-size-xsmall);
	}
	div {
		display: contents;
	}
</style>
