(async () => {
  let infoSections = document.querySelectorAll("section");
  infoSections.forEach(section => {
    let header = document.createElement("h2");
    header.classList.add("section-header");
    header.textContent = section.title;
    section.prepend(header);
  });
})()
