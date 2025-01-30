let cardContainer = document.getElementById("card-container");

function createCardAndContent(flag, country, population) {
  // Create the main card div
  let card = document.createElement("div");
  card.id = "card";
  card.classList.add("card", "p-4");
  card.style.width = "18rem";

  // Create the image element
  let img = document.createElement("img");
  img.src = flag; 
  img.classList.add("card-img-top");
  img.alt = "flag-img"; 

  // Create the card body div
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create the title
  let title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = country; 

  // Create the paragraph
  let paragraph = document.createElement("p");
  paragraph.classList.add("card-text");
  paragraph.innerHTML = `Population: ${population}`; 

  // Append elements in order
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(title);
  cardBody.appendChild(paragraph);
  
  // Append the card to the card container
  cardContainer.appendChild(card);
}

var fetchInfoFromApi = fetch("https://restcountries.com/v2/all")
  .then((data) => data.json())
  .then((data1) => {
    var lengthOf = data1.length;
    for (let i = 0; i < lengthOf; i++) {
      var flag = data1[i].flags.png;
      var country = data1[i].name;
      var population = data1[i].population;

      // Pass the data to create the card with the fetched information
      createCardAndContent(flag, country, population);
    }
  })
  .catch((error) => console.error("Error fetching data:", error)); 
