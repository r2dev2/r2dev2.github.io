<script>
  import projects from './projects.js';
  import Project from './Project.svelte';
  import Header from './Header.svelte';
</script>

<Header />
<main>
  <section name="About">
    <h2>About</h2>
    <div class="two-col">
      <div class="col">
        <img src="./pfp.webp" alt="picture of me!" width="150px" height="150px" style="justify-content: left; border-radius: 50%;" />
      </div>
      <div class="col">
        Hi! I'm a developer and hacker (the cybersecurity kind) at UCLA. You might know me from:
        <ul>
          <li>former intern at <a href="https://cadence.com">Cadence</a> and <a href="http://axiado.com">Axiado</a></li>
          <li>maintainer of <a href="https://livetl.app">LiveTL</a> (I am <a href="https://github.com/r2dev2">r2dev2</a>) and various other <a href="./projects">open source software</a></li>
          <li>CTFs with <a href="https://ctftime.org/team/186494">PBR | UCLA</a>, I also write web challenges for <a href="https://lac.tf">LaCTF</a> (I am r2uwu2)</li>
          <li>chess - my lichess is <a href="https://lichess.org/@/r2d2bb8">r2d2bb8</a>, send me a challenge!</li>
        </ul>
      </div>
    </div>
  </section>

  <section name="Projects" style="display: none;">
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
    /* --heading-color: #818cab; */
    --heading-color: #ba8e76;
    /* --heading-color: #7e604b; */
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

  .two-col {
    display: flex;
    flex-direction: row;
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

    .two-col {
      flex-direction: column;
      gap: 1rem;
    }

    .col:first-child {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
</style>
