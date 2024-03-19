<script>
  import projects from './projects.js';
  import Project from './Project.svelte';
</script>

<div class="profile">
  <img class="eyes" src="eyes.webp" alt="Ronak's eyes" />
  <div class="info">
    <h1>Ronak Badhe</h1>
    <div class="links">
      <a href="https://github.com/r2dev2/CTF">
        <!-- flag svg from google material icons -->
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF" style="--len: 103">
          <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
        </svg>
        <span>CTF</span>
      </a>
      <a href="https://github.com/r2dev2/">
        <!-- hub svg from google material icons -->
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 20 20" height="48px" viewBox="-2 -2 22 22" width="48px" fill="#FFFFFF" style="--len: 110">
          <path d="M12.71,12.84c0.84-0.88,1.17-2.06,0.99-3.18l1.59-0.48c0.42,0.78,1.25,1.32,2.2,1.32c1.38,0,2.5-1.12,2.5-2.5 s-1.12-2.5-2.5-2.5C16.12,5.5,15,6.62,15,8c0,0.08,0,0.15,0.01,0.22L13.42,8.7c-0.52-1.15-1.61-2-2.92-2.17l0-1.58 c1.14-0.23,2-1.24,2-2.45C12.5,1.12,11.38,0,10,0S7.5,1.12,7.5,2.5c0,1.21,0.86,2.22,2,2.45l0,1.58C8.2,6.71,7.11,7.55,6.58,8.7 L4.99,8.22C5,8.15,5,8.08,5,8c0-1.38-1.12-2.5-2.5-2.5S0,6.62,0,8s1.12,2.5,2.5,2.5c0.95,0,1.78-0.53,2.2-1.32L6.3,9.66 c-0.18,1.12,0.15,2.3,0.99,3.18l-1.15,1.43C5.8,14.1,5.41,14,5,14c-1.38,0-2.5,1.12-2.5,2.5S3.62,19,5,19s2.5-1.12,2.5-2.5 c0-0.61-0.22-1.17-0.58-1.6l1.15-1.43c1.18,0.71,2.68,0.71,3.86,0l1.15,1.43c-0.36,0.43-0.58,0.99-0.58,1.6c0,1.38,1.12,2.5,2.5,2.5 s2.5-1.12,2.5-2.5S16.38,14,15,14c-0.41,0-0.8,0.1-1.14,0.27L12.71,12.84z"/>
        </svg>
        <span>Dev</span>
      </a>
      <a href="https://r2dev2.github.io/blog">
        <!-- hub svg from google material icons -->
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="48px" viewBox="0 0 24 24" width="48px" fill="#FFFFFF">
          <g><path d="M16,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V8L16,3z M8,7h3c0.55,0,1,0.45,1,1v0c0,0.55-0.45,1-1,1H8 C7.45,9,7,8.55,7,8v0C7,7.45,7.45,7,8,7z M16,17H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0 C17,16.55,16.55,17,16,17z M16,13H8c-0.55,0-1-0.45-1-1v0c0-0.55,0.45-1,1-1h8c0.55,0,1,0.45,1,1v0C17,12.55,16.55,13,16,13z M15,8 V5l4,4h-3C15.45,9,15,8.55,15,8z"/></g>
        </svg>
        <span>Blog</span>
      </a>
    </div>
  </div>
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

  .eyes {
    width: 100%;
    filter: blur(20px);
    transform: scale(1.1);
    user-select: none;
    pointer-events: none;
  }

  /* div with my name and links */
  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* the links section of info div */
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }

  .links a {
    --mult: 1;
    --size: calc(var(--mult) * 5rem);
    --bg-opacity: 0.3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(var(--mult) * 1.5rem);
    background: rgba(0,0,0,var(--bg-opacity));
    color: white;
    width: var(--size);
    height: var(--size);
    border: 2px solid white;
    border-radius: 0.125rem;
  }

  .links a svg {
    width: 2rem;
    height: 2rem;
  }

  path {
    stroke: white;
    stroke-width: 1;
    stroke-dasharray: var(--len, 103);
    stroke-dashoffset: var(--len, 103);
    transition: none;
  }

  .links a:hover path {
    fill: none;
    stroke-dashoffset: 0;
    transition: stroke-dashoffset 500ms linear;
  }

  .links a:hover {
    --bg-opacity: 0.4;
    text-decoration: none;
  }

  h1 {
    font-weight: 1000;
    font-size: 4rem;
    margin: 0 0 1rem 0;
    -webkit-text-stroke: 1px var(--accent-color);
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.125rem;
    }
    .links a {
      --mult: 0.4;
    }
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
