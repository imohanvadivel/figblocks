<script lang="ts">
  export let label:string;
</script>

<li class="label">{label}</li>

<style>
  .label {
    display: flex;
    align-items: center;
    height: var(--figma-size-small);
    margin-top: var(--figma-size-xxsmall);
    padding: 0 var(--figma-size-xxsmall) 0 var(--figma-size-medium);
    color: var(--figma-color-text-menu-secondary);
    font-family: var(--font-stack);
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    letter-spacing: var(--font-letter-spacing-neg-small);
    line-height: var(--font-lineHeight);
  }

  .label:first-child {
    border-top: none;
    margin-top: 0;
  }
</style>