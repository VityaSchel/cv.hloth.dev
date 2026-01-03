<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements'

  let { children, variant = "primary", ...props }: {
    children: import('svelte').Snippet
    variant?: "primary" | "secondary"
  } & HTMLButtonAttributes = $props()
</script>

<button {...props} class={[variant, props.class]}>
  {@render children?.()}
</button>

<style lang="scss">
  button {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border-radius: 6px;
    
    font-size: 13.3px;
    
    background-color: var(--card-background);
    color: var(--text-color);
    transition: background-color var(--theme-transition-duration) var(--theme-transition-easing), color var(--theme-transition-duration) var(--theme-transition-easing), border-color var(--theme-transition-duration) var(--theme-transition-easing);
    
    &.primary {
      border: 1px solid var(--button-border);
      padding: 8px 16px;
    }

    &.secondary {
      padding: 7px 12px;
    }
    
    &:hover {
      background-color: var(--button-background-hover);
      color: var(--button-text-hover);
    }
  }
</style>