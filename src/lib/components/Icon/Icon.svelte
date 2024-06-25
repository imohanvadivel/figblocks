<script lang="ts">
  export let iconSvg = "";
  export let iconText = "";
  export let spin = false;
  export let color = `--figma-color-icon`;
  export { className as class };
  let className = "";
</script>

<div class="icon-component {className}" class:spin style="color: var({color}, var(--figma-color-icon)); fill: var({color}, var(--figma-color-icon))">
  {#if iconText}
    {iconText}
  {:else if iconSvg}
    {@html iconSvg}
  {/if}
</div>

<style>
  .icon-component {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    user-select: none;
    width: var(--figma-size-medium);
    height: var(--figma-size-medium);
    font-family: var(--font-stack);
    font-size: var(--font-size-xsmall);
  }

  .spin {
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  :global(.icon-component *) {
    fill: inherit;
    color: inherit;
  }
</style>
