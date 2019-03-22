

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
  
  $(".tester").append(indivCard);
}

// funtion that builds the rows when given the number of rows to build
rowBuilder = (num_rows) => {
  if (num_rows > 0) {
    for (let i = 1; i < num_rows + 1; i++) {
      let mainDiv = $('<div class="usa-grid usa-graphic_list-row">');
      // assigning the selector for the row
      mainDiv.addClass("card-row");
      // assigning an id to each row
      mainDiv.attr("id", i);
      $("#card-section").append(mainDiv);
    }
  }
}

// function that builds the columns
colBuilder = (num_cols) => {
  if (num_cols > 0) {
    for (let i = 1; i < num_cols + 1; i++) {
      let mainDiv = $('<div class="usa-width-one-third usa-media_block">');
      mainDiv.attr("id", i);
      mainDiv.addClass("tester");
      $(".card-row").append(mainDiv);
    }
  }
}

// function that builds the grid
gridBuilder = (rows, cols) => {
  rowBuilder(rows);
  colBuilder(cols);
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
