<script context="module">
import Nav from '../../components/Nav.svelte';
import IndexRow from '../posts/IndexRow.svelte';
import LibCms from '../../lib/LibCms'

export async function preload({ params }) {
	const res = await this.fetch(`category/${params.slug}.json`);
	const data = await res.json();
  var category = LibCms.get_category_item(data.category_items, String(params.slug))

  if (res.status === 200) {
    return { 
      index_posts: data.items ,category: category
    };
  } else {
    this.error(res.status, data.message);
  }
}
</script>

<script>
	export let index_posts ,category;
console.log(category)
</script>

<style>
div#post_item > hr {
  height: 1px;
  background-color: #000;
  border: none;
}
.show_head_wrap{ font-size: 1.4rem; }
</style>

<svelte:head>
	<title>Category</title>
</svelte:head>

<Nav />
<div class="body_main_wrap">
  <div class="container bg-white">
    <h1 class="mb-0">Category: {category.name}</h1>
    <div class="body_wrap card shadow-sm my-2">
      <div id="post_items_box" class="card-body mt-0 mb-2">
        <div class="posts_items_row my-2">
          {#each index_posts as item}
          <IndexRow id={item.id} save_id={item.save_id} title={item.title}
             date={item.created_at} category_name={item.category.name} />
          {/each}
        </div>
      </div>      
    </div>

  </div>
</div>

