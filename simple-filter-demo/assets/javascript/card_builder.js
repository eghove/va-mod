let cardHolder = [];


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
  if (num_rows > 0) {
    for (let i = 1; i < num_rows + 1; i++) {
      // invoke the indivRow function for each pass through the loop
      let mainDiv = indivRow();
      mainDiv.attr("data-row", i);
      $("#card-section").append(mainDiv);
    }
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
      mainDiv.attr("data-col", i);
      mainDiv.addClass("tester");
      $(".card-row").append(mainDiv);
    }
}

// function that builds the grid
gridBuilder = (rows, cols) => {
  rowBuilder(rows);
  colBuilder();
}

// takes in the number of cards to build the deck
cardDeckBuilder = (num_of_cards) => {
  // determine how many rows of three are needed
  let num_rows = Math.ceil(num_of_cards/3);
  gridBuilder(num_rows, 3);
  
  
}




// MAIN PROCESSES
// tester to insure load
// console.log("card_builder.js loaded");
// console.log(cards[0].description)

// indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link);

// rowBuilder(10);
// colBuilder(3);

cardDeckBuilder(17);
indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link);

cardHolder.push(indivCardBuilder(cards[0].title, cards[0].description, cards[0].thumbnail.src, cards[0].thumbnail.alt_text, cards[0].link));

console.log(cardHolder);
$(".tester").append(cardHolder[0]);
