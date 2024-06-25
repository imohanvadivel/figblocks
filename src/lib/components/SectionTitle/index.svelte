<script lang="ts">
    export let border = false;
    export let variant: "regular" | "large" = "regular";

    export { className as class };
    let className = "";
</script>

<div class={className} class:border class:large={variant == "large"}>
    <slot />
</div>

<style>
    div {
        font-family: var(--font-stack);
        font-size: var(--font-size-xsmall);
        font-weight: var(--font-weight-bold);
        letter-spacing: var(--font-letter-spacing-pos-xsmall);
        line-height: var(--font-lineHeight);
        color: var(--figma-color-text);
        height: var(--figma-size-medium);
        width: 100%;
        display: flex;
        align-items: center;
        cursor: default;
        user-select: none;
        padding: 0 var(--figma-size-xxxsmall) 0 var(--figma-size-xxsmall);
    }

    div.large {
        height: 40px;
        font-size: var(--font-size-xlarge);
        letter-spacing: var(--font-letter-spacing-pos-xlarge);
        line-height: var(--font-lineHeight-large);
    }

    div.large.border {
        height: 41px;
        border-bottom: 1px solid var(--figma-color-border);
    }
</style>
