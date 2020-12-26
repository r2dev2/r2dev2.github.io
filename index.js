const username = "r2dev2bb8";
let gh_data = {};

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
    let json = await fetch(d.link).then(r => r.json())
    gh_data[d.name] = json;
  }));
}

(async () => {
  let infoSections = document.querySelectorAll("section");
  infoSections.forEach(section => {
    let header = document.createElement("h2");
    header.classList.add("section-header");
    header.textContent = section.title;
    section.prepend(header);
  });

  await load_gh_data();

  let promises = [
    fill_bio(),
    set_avatar(),
  ];
  await Promise.all(promises);
})()
