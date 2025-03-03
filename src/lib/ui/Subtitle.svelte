<script lang="ts">
  let { children } = $props()
</script>

<span>{@render children?.()}</span>

<style lang="scss">
  span {
    font-size: 14px;
    font-variation-settings: normal;
    line-height: 20px;
    tab-size: 4;
    text-size-adjust: 100%;
    margin: 0;
    margin-top: 6px;
    color: var(--subtitle-color);
  }
</style>