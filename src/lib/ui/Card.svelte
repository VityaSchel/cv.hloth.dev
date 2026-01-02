<script lang="ts">
  import Button from "./Button.svelte"
    import CardHighlight from "./CardHighlight.svelte"
  import Subtitle from "./Subtitle.svelte"
  import Title from "./Title.svelte"

  let { title, subtitle, buttons, preview, highlight }: {
    title: string
    subtitle: string
    buttons: { label: string; url: string; variant?: "primary" | "secondary"; download?: boolean }[]
    preview: { src: string; width: number; height: number }
    highlight?: boolean
  } = $props()
</script>

<svelte:head>
  <link rel="preload" as="image" href={preview.src} />
</svelte:head>
<div class="card">
  {#if highlight}
    <CardHighlight />
    <svg viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="highlight-corner"><path d="M2.554 1.899a2 2 0 0 1 3.799 1.255L4.426 8.986A2 2 0 0 1 .627 7.732zM12.235 4.8a2 2 0 0 1 2.922 2.731l-4.806 5.143a2 2 0 1 1-2.922-2.731zm6.236 8.12a2 2 0 0 1 1.263 3.796l-6.423 2.137a2 2 0 1 1-1.263-3.795z" fill="#fff" /></svg>
  {/if}
  <div class="content">
    <div class="top">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
    <div class="actions-box">
      {#each buttons as button}
        <a href={button.url} target="_blank" rel="noreferrer nofollow" download={button.download ? "" : undefined}>
          <Button tabindex={-1} variant={button.variant}>{button.label}</Button>
        </a>
      {/each}
    </div>
  </div>
  <div class="image">
    <img src={preview.src} alt={title} width={preview.width} height={preview.height} style="aspect-ratio: {preview.width} / {preview.height}" />
  </div>
</div>

<style lang="scss">
  .card {
    background-color: var(--card-background);
    display: flex;
    color: var(--text-color);
    border: 1px solid var(--card-border);
    border-radius: 24px;
    width: 400px;
    max-width: 100%;
    box-shadow: var(--card-shadow-color) 0px 1px 2px 0px;
    min-width: 320px;
    position: relative;

    @media screen and (max-width: 400px) {
      border-radius: 16px;
    }

    .content {
      display: flex;
      flex-direction: column;

      .top {
        padding: 24px;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 400px) {
          padding: 20px;
        }
      }

      .actions-box {
        display: flex;
        padding: 24px;
        padding-top: 0;
        margin-top: auto;
        gap: 12px;

        @media screen and (max-width: 400px) {
          padding: 20px;
        }
      }
    }

    .image {
      padding: 16px;
      padding-inline-start: 0;
      min-width: 128px;

      img {
        flex-shrink: 0;
        border-radius: 8px;
        height: auto;
        align-self: center;
      }

      @media screen and (max-width: 400px) {
        padding: 8px;
      }
    }

    .highlight-corner {
      position: absolute;
      left: 100%;
      bottom: 100%;
      transform: translate(-20%, 20%);
      width: 44px;
      height: 40px;

      @media screen and (max-width: 400px) {
        width: 22px;
        height: 20px;
      }
    }
  }
</style>