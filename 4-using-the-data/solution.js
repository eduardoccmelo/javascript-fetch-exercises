const url = "https://randomuser.me/api/?inc=gender,name,picture&results=10";

fetch(url)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((dataObject) => {
    console.log(dataObject);
    dataObject.results.forEach((person) => {
      const section = document.createElement("section");
      section.classList.add("person");
      document.body.append(section);
      const h2 = document.createElement("h2");
      h2.textContent = `${person.name.first} ${person.name.last}`;
      section.append(h2);
      const img = document.createElement("img");
      img.src = `${person.picture.medium}`;
      img.alt = `${person.name.first} ${person.name.last}`;
      section.append(img);
    });
  })
  .catch((error) => {
    console.log(error);
  });
