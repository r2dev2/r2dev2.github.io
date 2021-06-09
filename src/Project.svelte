<script>
  export let name;
  export let description;

  $: title = name.split('/')[1];
  $: href = `https://github.com/${name}`;
</script>

<a {href}>
<div class="project-card">
  <h3>{title}</h3>
  <p>{description}</p>
  <div style="height: 100%;" />
  <div class="center">
    <img
      src="https://img.shields.io/github/stars/{name}?style=social"
      alt="{name}'s star count" />
  </div>
</div>
</a>

<style>
  .project-card {
    background-color: var(--card-color);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: .5rem;
    height: 100%;
  }

  .center {
    text-align: center;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
    width: 6rem;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: unset;
    transition: 0.2s ease-in-out;
    width: 30rem;
    height: 8rem;
    margin-right: 2rem;
    margin-bottom: 4rem;
  }
</style>
