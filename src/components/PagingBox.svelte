<script>
export let page_display , page;
//console.log("page=", page)
var nextPage = parseInt(page) + 1
</script>

<style>
</style>

{#if page_display == 1}
  <div class="paginate_wrap text-center">
    <div class="btn-group" role="group" aria-label="Basic example">
      <a href="/page/1" class="btn btn-outline-dark">
        1st</a>
      <a href={`/page/${nextPage}`} class="btn btn-outline-dark">
        next</a>        
    </div>
  </div>
{/if}
