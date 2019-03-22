

// FUNCTIONS
// function that builds individual cards
indivCardBuilder = (title, description, thumbnail, alt, link) => {
  // card pieces
  let cardDiv = $('<div class="usa-media_block-body init-card">');
  let cardTitle = $("<h3>").text(title);
  let cardDescription = $("<p>").text(description);
  let cardImg = $("<img src=" + thumbnail + "/>");
  cardImg.attr("alt", alt);
  let button = $('<a href=' + link + ' target="_blank" rel="noopener noreferrer"><button class="usa-button">Learn More</button></a>');
  // assemble the card
  cardDiv.append(cardImg);
  cardDiv.append(cardTitle);
  cardDiv.append(cardDescription);
  cardDiv.append(button);
  $("#tester").append(cardDiv);
}

// MAIN PROCESSES
// tester to insure load
console.log("card_builder.js loaded");
console.log(cards[0].description)

indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link);