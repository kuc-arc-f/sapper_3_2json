<script context="module">
import Config from '../../../app_config'
import Nav from '../../components/Nav.svelte';
import PagingBox from '../../components/PagingBox.svelte';
import IndexRow from '../posts/IndexRow.svelte';
import LibPagenate from '../../lib/LibPagenate'

//var config = Config.get_config()
export async function preload({ params }) {
  const page = params.slug
  const res = await this.fetch(`page/${params.slug}.json`);
	const data = await res.json();
  var index_posts =data.items
  LibPagenate.init()
  const display = LibPagenate.is_paging_display(index_posts.length)
//console.log(params.slug)
  return {
    index_posts: index_posts, page_display: display , page: page
  };
}
</script>

<script>
export let index_posts , page_display, page;
// console.log(page_display)
</script>

<style>
.body_wrap{ position:relative; }
.badge_post{
	position:absolute; top:-15px; left:10px; 
}    
</style>

<svelte:head>
	<title>Posts</title>
</svelte:head>
<Nav />
<div class="body_main_wrap">
  <div class="container pb-4">
    <div class="row">
      <div class="col-md-12">
      </div>
    </div>
    <div class="body_wrap card shadow-sm my-4">
      <span class="badge_post badge pt-2 pb-1 rounded myblog_bgcolor_accent px-3">
        <h5>Posts</h5>
      </span>    
      <div id="post_items_box" class="card-body mt-2 mb-4">
        <div id="div_news">
        </div>
        <div class="posts_items_row my-3">
          {#each index_posts as item}
          <IndexRow id={item.id} save_id={item.save_id} title={item.title} 
          date={item.created_at} category_name={""} />
          {/each}          
        </div>
      </div>
    </div>
    <PagingBox page_display={page_display} page={page} />
  </div>
  
</div>
