<script>
import Config from '../../app_config'
var config = Config.get_config()
console.log(config.MY_SITE_NAME)
</script>

<style>
     
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none;
}
.cover-container {
  max-width: 42em;
}
.body_wrap{ height: 100%; }
.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}
</style>

<svelte:head>
	<title>{config.MY_SITE_NAME}</title>
</svelte:head>
<!-- -->
<link href="/css/cover.css?a2" rel="stylesheet" />
<div class="body_wrap d-flex text-center text-white myblog_bgcolor_main">
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="mb-auto">
      <div>
        <h3 class="float-md-start mb-0"></h3>
        <nav class="nav nav-masthead justify-content-center float-md-end">
          <a class="nav-link active" aria-current="page" href="/posts">Home</a>
          <a class="nav-link active" href="/about">About</a>
          <a class="nav-link active" href="/license">License</a>
        </nav>
      </div>
    </header>
    <main class="px-3">
      <h1>{config.MY_SITE_NAME}</h1>
      <p class="lead">svelte + sapper SSG sample , json file read       
      </p>
      <p class="lead">
        <a href="/posts" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
      </p>
    </main> 
    <footer class="mt-auto text-white-50">
      <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">
        Bootstrap 5</a></p>
    </footer>        
  
  </div>
</div>
