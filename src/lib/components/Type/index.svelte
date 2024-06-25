<script lang="ts">
	type Size = 'xsmall' | 'small' | 'large' | 'xlarge';
	type Weight = 'normal' | 'medium' | 'bold';

	export let size: Size = 'xsmall';
	export let weight: Weight = 'normal';
	export let inverse = false;
	export let color = '--figma-color-text';
	export let inline = false;
	export { className as class };
	let className = '';
</script>

<div
	class="type {className} {size} {weight}"
	class:inverse
	class:inline
	style="color: var({color})"
>
	<slot />
</div>

<style>
	.type {
		font-family: var(--font-stack);
		font-size: var(--font-size-xsmall);
		font-weight: var(--font-weight-normal);
		line-height: var(--font-line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
	}
	.figma-dark.type {
		letter-spacing: var(--font-letter-spacing-neg-xsmall);
	}
	.inline {
		display: inline-block;
	}

	/* Size */
	.small {
		font-size: var(--font-size-small);
		letter-spacing: var(--font-letter-spacing-pos-small);
	}
	.figma-dark.small {
		letter-spacing: var(--font-letter-spacing-neg-small);
	}
	.large {
		font-size: var(--font-size-large);
		line-height: var(--font-lineHeight-large);
		letter-spacing: var(--font-letter-spacing-pos-large);
	}
	.figma-dark.large {
		letter-spacing: var(--font-letter-spacing-neg-large);
	}
	.xlarge {
		font-size: var(--font-size-xlarge);
		line-height: var(--font-lineHeight-large);
		letter-spacing: var(--font-letter-spacing-pos-small);
	}
	.figma-dark.xlarge {
		letter-spacing: var(--font-letter-spacing-neg-xlarge);
	}

	/* Weight */
	.medium {
		font-weight: var(--font-weight-medium);
	}
	.bold {
		font-weight: var(--font-weight-bold);
	}

	/* Letter spacing adjustment based pos/neg application */
	.inverse {
		letter-spacing: var(--font-letter-spacing-neg-xsmall);
	}
	.inverse.small {
		letter-spacing: var(--font-letter-spacing-neg-small);
	}
	.inverse.large {
		letter-spacing: var(--font-letter-spacing-neg-large);
	}
	.inverse.xlarge {
		letter-spacing: var(--font-letter-spacing-neg-xlarge);
	}

	.figma-dark.inverse {
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
	}
	.figma-dark.inverse.small {
		letter-spacing: var(--font-letter-spacing-pos-small);
	}
	.figma-dark.inverse.large {
		letter-spacing: var(--font-letter-spacing-pos-large);
	}
	.figma-dark.inverse.xlarge {
		letter-spacing: var(--font-letter-spacing-pos-xlarge);
	}
</style>
