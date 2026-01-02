<script>
  import Card from "./ui/Card.svelte"
</script>

<section class="links">
  <div class="cards">
    <Card title='Resume' subtitle='My single-page colorful resume made in Figma' button={{ label: 'Open', url: '/v7/Viktor-Shchelochkov-Resume.pdf' }} preview={{ src: "/v7/Viktor-Shchelochkov-Resume-preview.avif", width: 128, height: 181 }} highlight />
    <Card title='CV' subtitle='My boring CV written in the most corporate way possible' button={{ label: 'Open', url: '/v7/Viktor-Shchelochkov-CV.pdf' }} preview={{ src: "/v7/Viktor-Shchelochkov-CV-preview.avif", width: 128, height: 165 }} />
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