<script>
  import Heading from "./ui/Heading.svelte"
  import Date from "./ui/Date.svelte"
</script>

<aside class="changelog">
  <Heading>Changelog</Heading>
  <ul>
    <li>v6 — New version of resume & removed Russian translation <Date at={1759174359000} /></li>
    <li>v5 — Rebuilt with Svelte & added CV <Date at={1741002612000} /></li>
    <li>v4 — Changed 2 key projects and hard skills</li>
    <li>v3 — Fixed mistakes in English grammar</li>
    <li>v2 — Made small changes to soft skills section</li>
    <li>v1 — My first resume!</li>
  </ul>
</aside>

<style lang="scss">
  .changelog {
    padding: 32px 16px;
    border-left: 1px solid var(--border-color);
    margin-left: 128px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--text-color);

    @media screen and (max-width: 1024px) {
      margin-left: 0px;
      border: none;
    }
    
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        font-size: 11px;
    
        li {
          line-height: 24px;
        }
      }
  }
</style>