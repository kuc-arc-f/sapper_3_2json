<script>
	export let save_id , id ,date, title, category_name;
</script>
<style>
.card_col_body{ text-align: left; width: 100%;}
.card_col_icon{ font-size: 2.4rem; }
.task_card_box{ width : 95%;}	
</style>
<div class="row justify-content-center">
  <div class="task_card_box card shadow-lg mb-2">
    <div class="card-body">
      <div class="d-flex flex-column flex-md-row">
        <div class="card_col_icon px-md-2 py-2 ">
          <i class="bi bi-clipboard"></i>
        </div>
        <div class="card_col_body  p-md-2">
          <a href={`/posts/${save_id}`}><h3>{title}</h3></a>
            ID : {id} , {date} ,  Category : {category_name}         
        </div>
        <div class="py-2  py-md-3 px-4 ms-auto text-center">
          <a href={`/posts/${save_id}`} class="btn btn-secondary btnx-teal">show
          </a>
        </div>
      </div>

    </div>
  </div>
</div> 