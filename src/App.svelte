<script>
  import projects from './projects.js';
  import Project from './Project.svelte';
</script>

<main>
  <div class="profile">
    <img
      src="https://avatars3.githubusercontent.com/u/50760816?s=460&u=5d982fdca816f9ad156e4f0b66d0e97e71e37e58&v=4"
      class="pfp"
      width="160"
      height="160"
      alt="Ronak's profile picture" />
    <h1>Ronak Badhe</h1>
  </div>

  <section name="About">
    <h2>About</h2>
    I'm a 16 year old developer at Lynbrook High School. I play chess and am interested in full stack development and machine learning.
  </section>

  <section name="Projects">
    <h2>Projects</h2>
    <div class="projects">
      {#each projects as project}
        <Project {...project} />
      {/each}
    </div>
  </section>

  <section name="Contact Info">
    <h2>Contact Info</h2>
    Contact me via a lichess direct message over <a href="https://lichess.org/@/r2d2bb8">here</a>.
  </section>
</main>

<style>
  :global(:root) {
    --primary-color: #9A97F3;
    --font-color: #e5e5e5;
    --bg-color: #151515;
    --heading-color: #818cab;
    --card-color: #252525;
  }
  
  :global(body) {
    background-color: var(--bg-color);
    color: var(--font-color);
  }

  h1 {
    margin-top: 0;
    font-weight: 100;
    font-size: 4rem;
  }

  h2 {
    color: var(--heading-color);
  }

  main {
    padding: 1rem;
    margin: 0 auto;
  }

  .pfp {
    width: 10rem;
  }

  .profile {
    text-align: center;
  }

  a {
    color: #0099FF;
  }

  .projects {
    display: grid;
    width: 100%;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  @media screen and (max-width: 600px) {
    .projects {
      display: flex;
      width: 100%;
      flex-direction: column;
    }
  }
</style>
