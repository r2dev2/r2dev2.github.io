<script>
  import projects from './projects.js';
  import Project from './Project.svelte';
  import Header from './Header.svelte';
</script>

<Header />
<main>
  <section name="About">
    <h2>About</h2>
    I'm a 19 year old developer at UCLA, interning at <a href="https://cadence.com">Cadence</a>.
    I play chess and am interested in full stack development and machine learning.
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
    --accent-color: #1f5265;
    --bg-color: #151515;
    --heading-color: #818cab;
    --card-color: #252525;
    --blue: #0099FF;
  }
  
  :global(body) {
    background-color: var(--bg-color);
    color: var(--font-color);
    padding: 0;
  }

  h2 {
    color: var(--heading-color);
  }

  main {
    padding: 1rem;
    margin: 0 auto;
  }

  a {
    color: var(--blue);
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
