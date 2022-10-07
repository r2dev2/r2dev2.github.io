<script>
  import projects from './projects.js';
  import Project from './Project.svelte';
</script>

<div class="profile">
  <img src="eyes.webp" alt="Ronak's eyes" />
  <h1>Ronak Badhe</h1>
</div>
<main>
  <!--
  <div class="profile">
    <img
      src="https://avatars3.githubusercontent.com/u/50760816?s=460&u=5d982fdca816f9ad156e4f0b66d0e97e71e37e58&v=4"
      class="pfp"
      width="160"
      height="160"
      alt="Ronak's profile picture" />
    <h1>Ronak Badhe</h1>
  </div>
  -->

  <section name="About">
    <h2>About</h2>
    I'm a 18 year old developer at UCLA.
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
  }
  
  :global(body) {
    background-color: var(--bg-color);
    color: var(--font-color);
    padding: 0;
  }

  img {
    width: 100%;
    filter: blur(10px);
    transform: scale(1.1);
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    font-weight: 1000;
    font-size: 4rem;
    transform: translate(-50%, -50%);
    margin: 0;
    -webkit-text-stroke: 1px var(--accent-color);
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
    position: relative;
    text-align: center;
    overflow: hidden;
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
