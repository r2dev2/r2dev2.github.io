<script>
  import people from './people.js';
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
          <li>maintainer of <a href="https://livetl.app">LiveTL</a> (I am <a href="https://github.com/r2dev2">r2dev2</a>) and various other <a href="#projects">open source software</a></li>
          <li>CTFs with <a href="https://pbr.acmcyber.com/">PBR | UCLA</a>, I also write web security challenges for <a href="https://lac.tf">LaCTF</a> (I am r2uwu2)</li>
          <li>chess - my lichess is <a href="https://lichess.org/@/r2d2bb8">r2d2bb8</a>, send me a challenge!</li>
        </ul>
      </div>
    </div>
    <p>Contact me via a lichess direct message over <a href="https://lichess.org/@/r2d2bb8">here</a>.</p>
  </section>

  <section name="Cool People">
    <h2>Cool People</h2>
    I think these people are pretty cool, go check them out!
    <div class="cool-people">
      {#each people as { link, badge, title }}
        <a class="person" {title} href={link}>
          <img src={badge} {title} alt={title} width="64" height="64" />
        </a>
      {/each}
    </div>
  </section>

  <section name="Projects" id="projects">
    <h2>Projects</h2>
    <p>I have developed many open source projects, some more useful than others. Maybe one will suit your needs!</p>
    <div class="projects">
      {#each projects as project}
        <Project {...project} />
      {/each}
    </div>
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
    scroll-behavior: smooth;
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

  .cool-people {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.75rem 0;
  }

  .cool-people .person img {
    border-radius: 10%;
  }

  .cool-people .person:hover {
    filter: brightness(50%);
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
