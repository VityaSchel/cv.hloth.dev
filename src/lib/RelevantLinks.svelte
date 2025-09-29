<script>
  import Card from "./ui/Card.svelte"
</script>

<section class="links">
  <div class="cards">
    <Card title='Resume' subtitle='My single-page colorful resume made in Figma' button={{ label: 'Open', url: '/v6/Viktor-Shchelochkov-Resume.pdf' }} />
    <Card title='CV' subtitle='My boring CV written in the most corporate way possible' button={{ label: 'Open', url: '/v6/Viktor-Shchelochkov-CV.pdf' }} />
  </div>
</section>

<style lang="scss">
  .cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
</style>