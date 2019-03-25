// ============GLOBAL VARIABLES============

// display items holds
let displayItems = [];

// cardHolder holds the pieces of the display that will be rendered.
let cardHolder = [];


// ============FUNCTIONS===================

// ===LOGIC FUNCTIONS======================

// function the takes in a 'tag' parameter and returns a new array of initiatives featuring that tag
function tagSearch(tag) {
  // reset/clear out displayItems
  displayItems = [];
  let query = String(tag);
  // loop through everything in card_object.js to find the requisite tags
  // outerloop
  for (let i = 0; i < cards.length; i++) {
    // inner loop
    for (let j = 0; j < cards[i].tags.length; j++) {
      if (query === cards[i].tags[j]) {
        displayItems.push(cards[i]);
      }
    }
  }
  // console.log(displayItems);
}

// ===DISPLAY FUNCTIONS====================

// function that builds individual cards
indivCardBuilder = (title, description, thumbnail, alt, link) => {
  // card pieces
  // div that sets the width of the card
  let cardDivWidth = $('<div class="usa-width-one-third usa-media_block">');
  let cardDiv = $('<div class="usa-media_block-body init-card">');
  let cardTitle = $("<h3>").text(title);
  let cardDescription = $("<p>").text(description);
  let cardImg = $("<img src=" + thumbnail + "/>");
  cardImg.attr("alt", alt);
  let button = $('<a href=' + link + ' target="_blank" rel="noopener noreferrer"><button class="usa-button">Learn More</button></a>');
  // assemble the card
  let indivCard = cardDivWidth.append(cardDiv.append(cardImg, cardTitle, cardDescription, button));
  return indivCard;
  // $(".tester").append(indivCard);
}

populateCardHolder = () => {
  cardHolder = [];
  for (let i = 0; i < cards.length; i++) {
    cardHolder.push(indivCardBuilder(cards[i].title, cards[i].description, cards[i].thumbnail.src, cards[i].thumbnail.alt_text, cards[i].link))
  }
}
// function that displays up to three cards per row when given the value of the card
function rowOfCards (card1, card2, card3) {
  // Build a row
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
}
// ============MAIN PROCESSES===================

// testers
// cardDeckBuilder(17);
// indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link);

// populateCardHolder();

// console.log(cardHolder);
// $(".tester").append(cardHolder[0]);

// tagSearch("Test 1");


tagSearch("VA Leaders");
buildCardRows(displayItems);