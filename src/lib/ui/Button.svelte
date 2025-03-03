<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  let { children, ...props }: {
    children: import('svelte').Snippet
  } & HTMLButtonAttributes = $props()
</script>

<button {...props}>
  {@render children?.()}
</button>

<style lang="scss">
  button {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    font-family: inherit;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border-radius: 6px;

    font-size: 13.3px;

    background-color: var(--card-background);
    color: var(--text-color);
    border: 1px solid var(--button-border);
    transition: background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: background-color, color;

    &:hover {
      background-color: var(--button-background-hover);
      color: var(--button-text-hover);
    }
  }
</style>