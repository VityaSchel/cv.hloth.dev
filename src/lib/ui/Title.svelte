<script lang="ts">
  let { children } = $props()
</script>

<h1>{@render children?.()}</h1>

<style lang="scss">
  h1 {
    font-size: 24px;
    font-variation-settings: normal;
    font-weight: 600;
    letter-spacing: -0.6px;
    line-height: 24px;
    tab-size: 4;
    margin: 0;
    color:  var(--text-color);
  }
</style>