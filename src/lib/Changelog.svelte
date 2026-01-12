<script>
  import Heading from "./ui/Heading.svelte"
  import Date from "./ui/Date.svelte"
</script>

<aside class="changelog">
  <Heading>Changelog</Heading>
  <ul>
    <li>v8 — Merge CV and resume, replace unneccessary details with key experience <Date at={1768221254000} /></li>
    <li>v7 — New design, CV and image previews <Date at={1767385108000} /></li>
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
    max-width: 280px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--text-color);
    transition: border-color var(--theme-transition-duration) var(--theme-transition-easing), color var(--theme-transition-duration) var(--theme-transition-easing);

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

          &:not(:last-child) {
            margin-bottom: 8px;
          }
        }
      }
  }
</style>