<script lang="ts" context="module">
	import type { Writable } from 'svelte/store';
	export let tabindex = 0;

	type DisclosureCtx = {
		clickHandler: (itemId: string) => void;
		selected: Writable<string>;
	};
	export const disclosure: DisclosureCtx = {} as DisclosureCtx;
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import { Icon } from '$lib';
	import IconCaretRight from '../../icons/caret-right.svg';
	import IconCaretDown from '../../icons/caret-down.svg';

	const { clickHandler, selected } = getContext<DisclosureCtx>(disclosure);
	let expanded = false;

	// export let uniqueId = `disclosureItem-${Math.random().toString(36)}`;
	let uniqueId = `disclosureItem-${Math.random().toString(36)}`;
	export let title: string;
	export let section = false;
	export let open = false;

	if (open) selected?.set(uniqueId);

	expanded = $selected === uniqueId;

	function handleClick() {
		clickHandler(uniqueId);
		expanded = !expanded;
	}
</script>

<li id={uniqueId} class:expanded class:open {title}>
	<div
		role="button"
		{tabindex}
		on:click={handleClick}
		class="header"
		class:section
		on:animationend
		on:click
		on:focus
		on:mouseover
		on:mouseenter
		on:mouseleave
		on:keydown
	>
		<div class="icon">
			{#if expanded}
				<Icon iconSvg={IconCaretDown} color="--figma-color-icon" />
			{:else}
				<Icon iconSvg={IconCaretRight} color="--figma-color-icon" />
			{/if}
		</div>

		<div class="title">{title}</div>
	</div>

	<div class="content">
		<slot />
	</div>
</li>

<style>
	li {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.header {
		display: flex;
		align-items: center;
		height: var(--figma-size-medium);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		color: var(--figma-color-text);
	}

	.header:hover .icon {
		opacity: 0.9;
	}

	.title {
		margin-left: -4px;
		user-select: none;
	}

	.icon {
		margin-left: -4px;
		opacity: 0.3;
	}

	.expanded .icon {
		opacity: 0.8;
	}

	.section {
		font-weight: var(--font-weight-bold);
	}

	.content {
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		list-style: var(--font-lineHeight);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		color: var(--figma-color-text);
		display: none;
		/* padding: var(--figma-size-xxsmall) var(--figma-size-xxsmall) var(--figma-size-xxsmall) var(--figma-size-small); */
		padding: 0 var(--figma-size-xxsmall) var(--figma-size-xxsmall) var(--figma-size-small);
		/* user-select: none; */
		/* pointer-events: none; */
	}

	.expanded .content {
		display: block;
	}
</style>
