<script>
  import Card from './ui/Card.svelte'
</script>

<section class="links">
  <div class="cards">
    <Card
      title="Resume"
      subtitle="My single-page colorful resume made in Figma"
      buttons={[
        { label: 'Open', url: '/v8/Viktor-Shchelochkov-Resume.avif', variant: 'primary' },
        { label: 'Open as PDF', url: '/v8/Viktor-Shchelochkov-Resume.pdf', variant: 'secondary', download: true }
      ]}
      preview={{ src: '/v8/Viktor-Shchelochkov-Resume-preview.avif', width: 128, height: 181 }}
      highlight
    />
  </div>
</section>

<style lang="scss">
  .links {
    max-width: 100%;

    .cards {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }
  }
</style>
