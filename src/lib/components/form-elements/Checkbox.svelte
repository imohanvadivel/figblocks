<script lang="ts">
	export let checked: boolean = false;
	export let group: (string | number)[] | undefined = undefined;
	export let value: string | number = '';
	export let name = '';
	export let mixed = false;
	export let disabled = false;
	export { className as class };
	let className = '';
	let uniqueId = `checkbox-${Math.random().toString(36)}`;

	function handleClick(ev: MouseEvent) {
		if (!group) return;

		let selected = group.includes(value);

		//@ts-ignore
		if ('target' in ev) ev.target.blur();

		if (selected) {
			group = group.filter((v) => v !== value);
		} else {
			group = [...group, value];
		}
	}

	$: if (group) {
		checked = group.includes(value);
	}
</script>

<div class="checkbox {className}" class:mixed class:disabled>
	<div class="icon">
		<input
			type="checkbox"
			id={uniqueId}
			{name}
			bind:checked
			bind:value
			{disabled}
			on:click={handleClick}
			on:mousedown|preventDefault
			on:click
			on:change
			on:focus
			on:blur
			on:mouseover
			on:mouseenter
			on:mouseleave
		/>
		{#if mixed}
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					id="outline"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M20 11H12C11.4477 11 11 11.4477 11 12V20C11 20.5523 11.4477 21 12 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11ZM12 10C10.8954 10 10 10.8954 10 12V20C10 21.1046 10.8954 22 12 22H20C21.1046 22 22 21.1046 22 20V12C22 10.8954 21.1046 10 20 10H12Z"
					fill="var(--figma-color-icon)"
					
				/>
				<path
					id="mixed"
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M19 17H13V15H19V17Z"
					fill="var(--figma-color-icon)"
					
				/>
				<rect
					id="focus"
					x="10"
					y="10"
					width="12"
					height="12"
					rx="2"
					stroke="var(--figma-color-icon)"
					stroke-width="2"
				/>
			</svg>
		{:else}
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Checkbox">
					<g id="off">
						<path
							id="outline"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M20 11H12C11.4477 11 11 11.4477 11 12V20C11 20.5523 11.4477 21 12 21H20C20.5523 21 21 20.5523 21 20V12C21 11.4477 20.5523 11 20 11ZM12 10C10.8954 10 10 10.8954 10 12V20C10 21.1046 10.8954 22 12 22H20C21.1046 22 22 21.1046 22 20V12C22 10.8954 21.1046 10 20 10H12Z"
							fill={disabled ? 'var(--figma-color-icon-disabled' : 'var(--figma-color-icon)'}
							fill-opacity="0.8"
						/>
						<rect
							id="focus"
							x="10"
							y="10"
							width="12"
							height="12"
							rx="2"
							stroke="var(--figma-color-bg-brand)"
							stroke-width="2"
						/>
					</g>
					<g id="on">
						<rect
							id="bg"
							x="10"
							y="10"
							width="12"
							height="12"
							rx="2"
							fill={disabled ? 'var(--figma-color-icon-disabled' : 'var(--figma-color-bg-brand)'}
						/>
						<path
							id="tick"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.1765 14.8238L15.0588 16.7061L18.8235 12.9414L20 14.1179L15.0588 19.0591L12 16.0002L13.1765 14.8238Z"
							fill="var(--figma-color-icon-onbrand)"
						/>
						<g id="focus">
							<rect
								id="FOCUS"
								x="10.5"
								y="10.5"
								width="11"
								height="11"
								rx="1.5"
								stroke="var(--figma-color-bg)"
							/>
							<rect
								id="FOCUS_2"
								x="9.5"
								y="9.5"
								width="13"
								height="13"
								rx="2.5"
								stroke="var(--figma-color-bg-brand)"
							/>
						</g>
					</g>
				</g>
			</svg>
		{/if}
	</div>

	<label class="figma-font-ui11" class:disabled for={uniqueId}>
		<slot />
	</label>
</div>

<style>
	.checkbox {
		display: flex;
		align-items: center;
		cursor: default;
		position: relative;
	}

	.icon {
		position: relative;
		width: 32px;
		height: 32px;
	}

	input {
		opacity: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		flex-shrink: 0;
	}

	label {
		user-select: none;
		display: flex;
		align-items: center;
	}
	label.disabled {
		color: var(--figma-color-text-disabled);
	}

	input:checked + svg #off {
		display: none;
	}

	input + svg #focus {
		display: none;
	}

	input:focus + svg #focus {
		display: block;
	}

	input:not(:checked) + svg #on {
		display: none;
	}
</style>
