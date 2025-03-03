<script>
  import Card from "./ui/Card.svelte"
</script>

<section class="links">
  <div class="cards">
    <Card title='Resume' subtitle='My single-page resume/CV in English, compressed to 5 MB' button={{ label: 'Open', url: '/v4/En-optimized.pdf' }} />
    <Card title='Resume (27,5 MB)' subtitle={'The same PDF file, but it\'s exported from Figma without optimization'} button={{ label: 'Open', url: '/v4/En.pdf' }} />
    <Card title='Резюме' subtitle='Одностраничное резюме/CV на русском, сжатое до 5 МБ' button={{ label: 'Открыть', url: '/v4/Ru-optimized.pdf' }} />
    <Card title='Резюме (27,5 MB)' subtitle={'Тот же PDF файл, но он экспортирован из Figma без сжатия'} button={{ label: 'Открыть', url: '/v4/Ru.pdf' }} />
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