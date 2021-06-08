<script>
  export let name;
  export let description;

  $: title = name.split('/')[1];
</script>

<div class="project-card">
  <h3>{title}</h3>
  <p>{description}</p>
  <div class="center">
    <img
      src="https://img.shields.io/github/stars/{name}?style=social"
      alt="{name}'s star count" />
  </div>
</div>

<style>
  .project-card {
    background-color: var(--card-color);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: .5rem;
    margin: 1rem;
    width: 30rem;
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
</style>
