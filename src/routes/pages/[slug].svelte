<script context="module">
import Nav from '../../components/Nav.svelte';

export async function preload({ params }) {
	const res = await this.fetch(`pages/${params.slug}.json`);
	const data = await res.json();	
//console.log(data)
  if (res.status === 200) {
    return { post: data };
  } else {
    this.error(res.status, data.message);
  }
}
</script>

<script>
	export let post;
console.log(post)
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
	<title>{post.title}</title>
</svelte:head>

<Nav />
<div class="container bg-light">
  <a href="/posts" class="btn btn-light btnx-outline-orange mt-2">Back</a>
  <hr class="mt-2 mb-2" />
  <div class="show_head_wrap">
    <i class="bi bi-house-fill mx-2"></i> >
      &nbsp;{post.title}
  </div>
  <div class="card shadow-sm my-2">
    <div class="card-body">
      <h1>{post.title}</h1>
      Date: {post.created_at}<br />
    </div>
  </div>
  <div class="card shadow-sm mt-2 mb-4">
    <div class="card-body">
      <div id="post_item" >{@html post.content}
      </div>
    </div>
  </div>                       
</div>
