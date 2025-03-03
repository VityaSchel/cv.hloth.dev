<script>
  import Button from "./Button.svelte"
  import Subtitle from "./Subtitle.svelte"
  import Title from "./Title.svelte"

  let { title, subtitle, button } = $props()
</script>

<div class="card">
  <div class="top">
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </div>
  <div class="actionsBox">
    <a href={button.url} target="_blank" rel="noreferrer nofollow">
      <Button tabindex={-1}>{button.label}</Button>
    </a>
  </div>
</div>

<style lang="scss">
  .card {
    background-color: var(--card-background);
    color: var(--text-color);
    border: 1px solid var(--card-border);
    box-shadow: var(--card-shadow-color) 0px 1px 2px 0px;
    border-radius: 8px;
    width: 300px;

    .top {
      padding: 24px;
      display: flex;
      flex-direction: column;
    }

    .actionsBox {
      display: flex;
      justify-content: space-between;
      padding: 24px;
      padding-top: 0;
    }
  }
</style>