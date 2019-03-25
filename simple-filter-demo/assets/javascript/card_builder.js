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

  let cardDiv = $('<div class="usa-media_block-body init-card">');
  let cardTitle = $("<h3>").text(title);
  let cardDescription = $("<p>").text(description);
  let cardImg = $("<img src=" + thumbnail + "/>");
  cardImg.attr("alt", alt);
  let button = $('<a href=' + link + ' target="_blank" rel="noopener noreferrer"><button class="usa-button">Learn More</button></a>');
  // assemble the card
  let indivCard = cardDiv.append(cardImg, cardTitle, cardDescription, button);
  return indivCard;
  // $(".tester").append(indivCard);
}

// function that builds an individual row
indivRow = () => {
  let mainDiv = $('<div class="usa-grid usa-graphic_list-row">');
  mainDiv = mainDiv.addClass("card-row");
  return mainDiv;
}

// funtion that builds all of the rows when given the number of rows to build
rowBuilder = (num_rows) => {
  let divHolder;
  if (num_rows > 0) {
    for (let i = 0; i < num_rows; i++) {
      // invoke the indivRow function for each pass through the loop
      let mainDiv = indivRow();
      mainDiv = mainDiv.attr("data-row", i);
      // return mainDiv;
      // $("#card-section").append(mainDiv);

    }
    return divHolder;
  }
}

// function that builds an individual colum
indivCol = () => {
  let mainDiv = $('<div class="usa-width-one-third usa-media_block">');
  mainDiv = mainDiv.addClass("card-holder");
  return mainDiv;
}

// function that builds the columns
colBuilder = () => {
  for (let i = 0; i < 3; i++) {
    let mainDiv = indivCol();
    mainDiv = mainDiv.addClass("tester");
    return mainDiv;
    // $(".card-row").append(mainDiv);
  }
}

// function that builds the grid
gridBuilder = (rows) => {
  let grid = $("#card-section");
  let row = rowBuilder(rows);
  let columns = colBuilder();
  grid.append(row);
}

// takes in the number of cards to build the deck
cardDeckBuilder = (num_of_cards) => {
  // determine how many rows of three are needed
  let num_rows = Math.ceil(num_of_cards / 3);
  gridBuilder(num_rows);


}

populateCardHolder = () => {
  cardHolder = [];
  for (let i = 0; i < cards.length; i++) {
    cardHolder.push(indivCardBuilder(cards[i].title, cards[i].description, cards[i].thumbnail.src, cards[i].thumbnail.alt_text, cards[i].link))
  }
}
// ============MAIN PROCESSES===================

// testers
cardDeckBuilder(17);
indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link);

populateCardHolder();

console.log(cardHolder);
$(".tester").append(cardHolder[0]);

tagSearch("Test 1");


