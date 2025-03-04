<script>
  import Card from "./ui/Card.svelte"
</script>

<section class="links">
  <div class="cards">
    <Card title='Resume' subtitle='My single-page colorful resume made in Figma' button={{ label: 'Open', url: '/v5/en/Viktor-Shchelochkov-Resume.pdf' }} />
    <Card title='CV' subtitle='My boring CV written in the most corporate way possible' button={{ label: 'Open', url: '/v5/en/Viktor-Shchelochkov-CV.pdf' }} />
    <Card title='Резюме' subtitle='Мое одностраничное веселое цветное резюме' button={{ label: 'Открыть', url: '/v5/ru/Виктор-Щелочков-Резюме.pdf' }} />
    <Card title='CV' subtitle='Мое скучное CV, написанное максимально формально' button={{ label: 'Открыть', url: '/v5/ru/Виктор-Щелочков-CV.pdf' }} />
  </div>
</section>

<style lang="scss">
  .cards {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 16px;
    width: 100%;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
      grid-auto-flow: row;
    }
  }
</style>