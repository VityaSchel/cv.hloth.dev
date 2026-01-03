<script lang="ts">
  let { children } = $props()
</script>

<h2>
  {@render children()}
</h2>

<style lang="scss">
  h2 {
    font-size: 16px;
    font-variation-settings: normal;
    font-weight: 600;
    letter-spacing: -0.6px;
    line-height: 24px;
    tab-size: 4;
    margin: 0;
    color:  var(--text-color);
    transition: color var(--theme-transition-duration) var(--theme-transition-easing);
  }
</style>