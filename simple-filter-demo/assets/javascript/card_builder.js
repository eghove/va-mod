// ============GLOBAL VARIABLES============

// holds the items to display in cards
let displayItems = [];

// ============FUNCTIONS===================

// ===LOGIC FUNCTIONS======================

// function the takes in a 'tag' parameter and returns a new array of initiatives featuring that tag
function tagSearch(tag) {
  // reset/clear out displayItems
  displayItems = [];
  let query = String(tag);
  // loop through everything in card_object.js to find the requisite tags
  // outer loop
  for (let i = 0; i < cards.length; i++) {
    // inner loop
    for (let j = 0; j < cards[i].tags.length; j++) {
      if (query === cards[i].tags[j]) {
        displayItems.push(cards[i]);
      }
    }
  }
}

// ===DISPLAY FUNCTIONS====================

// function that builds individual cards takin in title, description, thumbnail image, alt text, and link
indivCardBuilder = (title, description, thumbnail, alt, link) => {
  // card pieces
  // div that sets the width of the card
  let cardDivWidth = $('<div class="usa-width-one-third usa-media_block">');
  // set the classes necessary for the card holder
  let cardDiv = $('<div class="usa-media_block-body init-card">');
  // builds the title of the card
  let cardTitle = $("<h3>").text(title);
  // builds the description for the card
  let cardDescription = $("<p>").text(description);
  // link in the image for the card
  let cardImg = $("<img src=" + thumbnail + "/>");
  // sets the alt for the image used in the card
  cardImg.attr("alt", alt);
  // builds the card's button
  let button = $('<a href=' + link + ' target="_blank" rel="noopener noreferrer"><button class="usa-button">Learn More</button></a>');
  // assembles the card
  let indivCard = cardDivWidth.append(cardDiv.append(cardImg, cardTitle, cardDescription, button));
  // returns the card as an object
  return indivCard;
}

// function that displays up to three cards per row when given the value of the card
function rowOfCards (card1, card2, card3) {
  // Builds a row
  let row =  $('<div class="usa-grid usa-graphic_list-row card-row">');
  // if there's a value for card1, do this:
  if (card1) {
    row.append(indivCardBuilder(card1.title, card1.description, card1.thumbnail.src, card1.thumbnail.alt_text, card1.link))
  };
  // if there's a value for card2, do this:
  if (card2) {
    row.append(indivCardBuilder(card2.title, card2.description, card2.thumbnail.src, card2.thumbnail.alt_text, card2.link))
  };
  // if there's a value for card3, do this:
  if (card3) {
    row.append(indivCardBuilder(card3.title, card3.description, card3.thumbnail.src, card3.thumbnail.alt_text, card3.link),)
  };
  // append everything to card section
  $("#card-section").append(row);
};

// function that loops through displayItems in chunks of three using an array
function buildCardRows (array) {
  // size of the chunk, in this case 3
  let chunk = 3;
  // loop through the array in chunks
  for (let i = 0; i < array.length; i +=chunk) {
    let tempArray = array.slice(i, i+chunk);
    rowOfCards(tempArray[0], tempArray[1], tempArray[2])
  }
};

// function that clears card section when needed
function clearCards() {
  $("#card-section").empty();
}


// ============MAIN PROCESSES===================

// display all cards on initial load
buildCardRows(cards);

// button listener for the tag filter bar
$(".tag").on("click", function() {
  let tag = $(this).text();
  tag = String(tag);
  // display all cards if "All" tag selected
  if (tag==="All") {
    clearCards();
    // calls the original, unfiltered card_object.js
    buildCardRows(cards);
  } else {
    clearCards();
    // invokes the function that builds the filtered list of cards
    tagSearch(tag);
    // invokes the function using the array holding the filtered cards from card_object.js
    buildCardRows(displayItems)
  }
});
