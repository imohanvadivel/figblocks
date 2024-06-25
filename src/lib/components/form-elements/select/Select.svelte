<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import { clickOutside } from './clickOutside';

	import ListItem from './listItem.svelte';
	import ListDivider from './listDivider.svelte';
	import ListHeader from './listHeader.svelte';
	import { Icon } from '$lib';


	type MenuItem = {
		value: string;
		label: string;
		selected: boolean;
		group?: string;
		id?: number;
	};
	type Menu = MenuItem[];

	export let iconSvg: string | null = null;
	export let iconText: string | null = null;
	export let disabled = false;
	export let menuItems: Menu = [];
	export let placeholder = 'Choose an option';
	export let value: MenuItem | null = null;
	export let showGrouplabels = false;

	export { className as class };
	let className = '';
	let groups = checkGroups();
	let menuWrapper, menuButton: HTMLButtonElement, menuList: HTMLUListElement;
	const dispatch = createEventDispatcher();
	$: menuItems, updateSelectedAndIds();

	/* FUNCTIONS
    -------------------------------------- */

	// determine if option groups are preset
	function checkGroups() {
		let groupcount = 0;
		if (!menuItems) return false;

		menuItems.forEach((item) => {
			if ('group' in item && item.group !== null) groupcount++;
		});

		return groupcount === menuItems.length ? true : false;
	}

	// assign id's to the input array
	onMount(async () => {
		updateSelectedAndIds();
	});

	// this function runs everytime the menuItems array updated
	// it will auto assign ids and keep the value var updated
	function updateSelectedAndIds() {
		if (menuItems) {
			// Enable the menu if disabled
			// if (disabled) disabled = false;

			// Adds id to menu item
			menuItems.forEach((item, index) => (item['id'] = index));

			// If no item selected, update the placeholder
			let sel = menuItems.find((item) => item.selected);
			if (!sel) {
				// placeholder = 'Choose an option';
				value = null;
			} else {
				value = sel;
			}
		}

		// set placeholders
		if (menuItems.length <= 0) {
			placeholder = 'There are no items to select';
			disabled = true;
		}
	}

	// Run for all menu click events
	function menuClick(event: MouseEvent) {
		if (disabled) return;
		resetMenuProperties();
		const targetNode = event.target as HTMLElement | null;

		if (!targetNode || event.type == 'outclick') {
			menuList.classList.add('hidden');
		} else if (targetNode.contains(menuButton)) {
			let topPos = 0;

			if (value) {
				// toggle menu
				menuList.classList.remove('hidden');

				let id = value.id;
				let selectedItem = menuList.querySelector(`[itemId="${id}"]`) as HTMLLIElement;
				selectedItem.focus(); //Set focus to the currently selected item

				// calculating the distance from the top to position the dropdown menu
				let parentTop = menuList.getBoundingClientRect().top;
				let itemTop = selectedItem.getBoundingClientRect().top;
				let topPos = itemTop - parentTop - 3;
				menuList.style.top = -Math.abs(topPos) + 'px';

				// update size and position based on plugin UI
				resizeAndPosition();
			} else {
				menuList.classList.remove('hidden');
				menuList.style.top = '0px';
				let firstItem = menuList.querySelector('[itemId="0"]') as HTMLLIElement;
				firstItem.focus();

				// update size and position based on plugin UI
				resizeAndPosition();
			}
		} else if (menuList.contains(targetNode)) {
			// find the selected item in array
			let itemId = parseInt(targetNode.getAttribute('itemId')!);

			// remove current selection if there is one
			if (value) {
				menuItems[value.id as number].selected = false;
			}
			menuItems[itemId].selected = true; // select current item
			updateSelectedAndIds();
			dispatch('change', menuItems[itemId]);

			menuList.classList.add('hidden'); //hide the menu
			menuButton.classList.remove('selected'); //remove selected state from button
		}
	}

	// This function ensures that the select menu
	// fits inside the plugin viewport
	// => if its too big, it will resize it and enable a scrollbar
	// => if its off screen it will shift the position
	function resizeAndPosition() {
		// set the max height of the menu based on plugin/iframe window
		let maxMenuHeight = window.innerHeight - 16;
		let menuHeight = menuList.offsetHeight;
		let menuResized = false;

		if (menuHeight > maxMenuHeight) {
			menuList.style.height = maxMenuHeight + 'px';
			menuResized = true;
		}

		// Adjust the position of the menu if its cut off from viewport
		let bounding = menuList.getBoundingClientRect();
		let parentBounding = menuButton.getBoundingClientRect();

		if (bounding.top < 0) {
			menuList.style.top = -Math.abs(parentBounding.top - 8) + 'px';
		}
		if (bounding.bottom > window.innerHeight) {
			let minTop = -Math.abs(parentBounding.top - (window.innerHeight - menuHeight - 8));
			let newTop = -Math.abs(bounding.bottom - window.innerHeight + 16);
			if (menuResized) {
				menuList.style.top = -Math.abs(parentBounding.top - 8) + 'px';
			} else if (newTop > minTop) {
				menuList.style.top = minTop + 'px';
			} else {
				menuList.style.top = newTop + 'px';
			}
		}
	}

	// menu highlight function on the selected menu item
	function removeHighlight(event: MouseEvent) {
		const targetElement = event.target as HTMLElement;
		let items = Array.from(targetElement.parentNode!.children) as HTMLElement[];

		items.forEach((item) => {
			item.blur();
			item.classList.remove('highlight');
		});
	}

	function resetMenuProperties() {
		menuList.style.height = 'auto';
		menuList.style.top = '0px';
	}
</script>

<div
	on:change
	on:focus
	on:blur
	bind:this={menuWrapper}
	class="wrapper {className}"
	use:clickOutside
	on:outclick={menuClick}
>
	<button bind:this={menuButton} {disabled} on:click={menuClick}>
		{#if iconSvg}
			<span class="icon"> <Icon {iconSvg} /> </span>
		{:else if iconText}
			<span class="icon"> <Icon {iconText} /> </span>
		{/if}

		{#if value}
			<span class="label">{value.label}</span>
		{:else}
			<span class="placeholder">{placeholder}</span>
		{/if}

		{#if !disabled}
			<span class="caret">
				<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M3.64645 5.35359L0.646454 2.35359L1.35356 1.64648L4.00001 4.29293L6.64645 1.64648L7.35356 2.35359L4.35356 5.35359L4.00001 5.70714L3.64645 5.35359Z"
						fill="var(--figma-color-icon)"
					/>
				</svg>
			</span>
		{/if}
	</button>

	<ul class="menu hidden" bind:this={menuList}>
		{#if menuItems && menuItems.length > 0}
			{#each menuItems as item, i}
				{#if i === 0}
					{#if item.group && showGrouplabels}
						<ListHeader label={item.group} />
					{/if}
				{:else if i > 0 && item.group && menuItems[i - 1].group !== item.group}
					<ListDivider />
					{#if showGrouplabels}
						<ListHeader label={item.group} />
					{/if}
				{/if}
				<ListItem
					on:click={menuClick}
					on:mouseenter={removeHighlight}
					itemId={item.id ? item.id : i}
					label={item.label}
					bind:selected={item.selected}
				/>
			{/each}
		{/if}
	</ul>
</div>

<style>
	.wrapper {
		position: relative;
		width: 100%;
	}
	.hidden {
		display: none;
	}

	button {
		display: flex;
		align-items: center;
		border: 1px solid transparent;
		height: 30px;
		width: 100%;
		margin: 1px 0;
		padding: 4px var(--figma-size-xxsmall) 0px var(--figma-size-xxsmall);
		overflow-y: hidden;
		border-radius: var(--border-radius-small);
		background-color: var(--figma-color-bg);
	}
	button:hover,
	button:active {
		border-color: var(--figma-color-border);
	}
	button:hover .placeholder {
		color: var(--black8);
	}
	button:hover .caret svg path,
	button:focus .caret svg path {
		fill: var(--figma-color-text);
	}
	button:hover .caret,
	button:focus .caret {
		margin-left: auto;
	}
	button:focus {
		border: 1px solid var(--figma-color-border-selected);
		outline: 1px solid var(--figma-color-border-selected);
		outline-offset: -2px;
		padding-left: calc(var(--figma-size-xxsmall) + 1px);
	}
	button:focus .placeholder {
		color: var(--black8);
	}
	button:disabled .label {
		color: var(--black3);
	}
	button:disabled:hover {
		justify-content: flex-start;
		border-color: transparent;
	}
	button:disabled:hover .placeholder {
		color: var(--black3);
	}
	button:disabled:hover .caret svg path {
		fill: var(--black3);
	}
	button * {
		pointer-events: none;
	}
	.label,
	.placeholder {
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		line-height: var(--font-lineHeight);
		color: var(--figma-color-text);
		margin-right: 6px;
		margin-top: -3px;
		white-space: nowrap;
		overflow-x: hidden;
		text-overflow: ellipsis;
		user-select: none;
	}
	.placeholder {
		color: var(--figma-color-text-tertiary);
	}

	.caret {
		display: block;
		margin-top: -1px;
	}
	.caret svg path {
		fill: var(--figma-color-text-tertiary);
	}
	.icon {
		margin: -2px 0 0 -8px;
	}
	.menu {
		position: absolute;
		top: 32px;
		left: 0;
		width: 100%;
		background-color: var(--figma-color-bg-menu);
		box-shadow: var(--shadow-hud);
		padding: var(--figma-size-xxsmall) 0;
		border-radius: var(--border-radius-small);
		margin: 0;
		z-index: 50;
		overflow-y: auto;
	}
	.menu::-webkit-scrollbar {
		width: 12px;
		background-color: transparent;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=);
		background-repeat: repeat;
		background-size: 100% auto;
	}
	.menu::-webkit-scrollbar-track {
		border: solid 3px transparent;
		-webkit-box-shadow: inset 0 0 10px 10px transparent;
		box-shadow: inset 0 0 10px 10px transparent;
	}
	.menu::-webkit-scrollbar-thumb {
		border: solid 3px transparent;
		border-radius: 6px;
		-webkit-box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.4);
		box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.4);
	}
</style>
