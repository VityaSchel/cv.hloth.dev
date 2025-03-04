<script lang="ts">
  import { format, formatDistanceStrict } from 'date-fns'

  let { at }: {
    at: number
  } = $props()

  let formattedTitle = $derived(format(at, 'MMMM do yyyy'))
  let formattedContent = $derived(formatDistanceStrict(at, new Date(), {
    addSuffix: true
  }))
</script>

<span title={formattedTitle}>[{formattedContent}]</span>

<style lang="scss">
  span {
    font-family: monospace;
    color: #5c5c5c;
  }
</style>