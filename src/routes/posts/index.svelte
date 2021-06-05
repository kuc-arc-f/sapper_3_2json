<script context="module">
import Config from '../../../app_config'
import Nav from '../../components/Nav.svelte';
import TopHeadBox from '../../components/TopHeadBox.svelte';
import PagingBox from '../../components/PagingBox.svelte';
import IndexRow from './IndexRow.svelte';
import PagesRow from './PagesRow.svelte';
import CategoryRow from './CategoryRow.svelte';
import LibPagenate from '../../lib/LibPagenate'
var config = Config.get_config()

export async function preload() {
  const res = await this.fetch(`posts.json`);
	const data = await res.json();
  var index_posts =data.items
  LibPagenate.init()
  const max = LibPagenate.get_max_page(index_posts.length)
  var pageInfo=LibPagenate.get_page_start(1)
  index_posts = LibPagenate.getOnepageItems(index_posts, pageInfo.start , pageInfo.end )
  const display = LibPagenate.is_paging_display(index_posts.length)
//  const arr = LibPagenate.get_arr_items(max)
//console.log(max)
  return {
    index_posts ,data , page_display: display , pagenate_arr: []
  };
}
</script>

<script>
export let index_posts, data ,page_display ;
var page_items = data.page_items
var category_items = data.category_items
//console.log(index_posts)
</script>

<style>
.body_wrap{ position:relative; }
.badge_post{
	position:absolute; top:-15px; left:10px; 
}    
.page_area_wrap{display: none;}
</style>

<svelte:head>
	<title>Posts</title>
</svelte:head>
<Nav />
<div class="body_main_wrap">
  <TopHeadBox site_name={config.MY_SITE_NAME} info_text={config.MY_SITE_INFO} />
  <div class="container pb-4">
    <div class="row">
      <div class="col-md-12">
        <div class="btn_disp_ara_wrap mt-0">
          <div class="card shadow-sm my-2">
            <h5 class="card-header myblog_color_accent">Pages</h5>
            <div class="card-body">                  
              <div class="page_btn_wrap">
              {#each page_items as item}
                <PagesRow save_id={item.save_id} title={item.title} />
              {/each}                  
              </div>
            </div>
          </div>
          <!-- category -->
          <div class="card shadow-sm my-2">
            <h5 class="card-header myblog_color_accent">Category</h5>
            <div class="card-body">
              <div class="category_btn_wrap">
                {#each category_items as item}
                <CategoryRow save_id={item.save_id} name={item.name} />
                {/each}                 
              </div>              
            </div>
          </div>
        </div>

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
    <PagingBox page_display={page_display} page={1} />
  </div>
  
</div>
