const username = "r2dev2";
let gh_data = {};

const fetchConfig = { };

async function set_avatar() {
  let pfpImg = document.querySelector("#profilepic");
  pfpImg.src = gh_data.general.avatar_url;
}

async function fill_bio() {
  let bioTag = document.querySelector("#bio");
  bioTag.textContent = gh_data.general.bio;
}

async function load_gh_data() {
  const datas = [
    {
      link: `https://api.github.com/users/${username}`,
      name: "general",
    }
  ];
  await Promise.all(datas.map(async (d) => {
    let json = await fetch(d.link, fetchConfig).then(r => r.json())
    gh_data[d.name] = json;
  }));
}

async function load_projects() {
  const projects = await fetch("./projects.json").then(r => r.json());
  let space = document.querySelector("#projectsSpace");
  await Promise.all(projects.map(createProjectCard))
    .then(cards => {
      cards.map(c => {
        space.appendChild(c)
      });
    });
}

async function createProjectCard(project) {
  let card = document.createElement("div");
  card.classList.add("project-card");
  const info = await fetch(`https://api.github.com/repos/${project.name}`, fetchConfig)
    .then(r => r.json());

  card.appendChild(createProjectTitle(info));
  card.appendChild(createProjectDescription(info));
  card.appendChild(createProjectCardBuffer());
  card.appendChild(createProjectStars(info));
  return wrapCardWithLink(card, 
                          `https://www.github.com/${info.full_name}`);
}

function createProjectCardBuffer() {
  let buf = document.createElement("div");
  buf.style.height = "100%";
  return buf;
}

function createProjectDescription(info) {
  let description = document.createElement("p");
  description.textContent = info.description
  return description;
}

function createProjectStars(info) {
  let img = document.createElement("img");
  img.src = `https://img.shields.io/github/stars/${info.full_name}?style=social`;
  img.classList.add("star-count");
  return img;
}

function createProjectTitle(info) {
  let title = document.createElement("h3");
  title.classList.add("project-title");
  title.classList.add("capitalize");
  title.textContent = info.name;
  return title;
}

function wrapWithLink(ele, link) {
  let surround = document.createElement('a');
  surround.href = link;
  surround.style.textDecoration = "none";
  surround.appendChild(ele);
  return surround;
}

function wrapCardWithLink(ele, link) {
  let wrapped = wrapWithLink(ele, link);
  wrapped.classList.add("project-card-wrapper");
  return wrapped;
}

(async () => {
  let infoSections = document.querySelectorAll("section");
  infoSections.forEach(section => {
    let header = document.createElement("h2");
    header.classList.add("capitalize");
    header.textContent = section.getAttribute("name");
    section.prepend(header);
  });

  await load_gh_data();

  let promises = [
    fill_bio(),
    set_avatar(),
    load_projects(),
  ];
  await Promise.all(promises);
})()
