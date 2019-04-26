


// GLOBAL VARIABLE
const galleryHook = $("#galleryHook");

// FUNCTIONS

function galleryItem(src, tagArray) {
  let colDiv = $('<div>');
  colDiv = colDiv.addClass("col-md-4");
  // add the tags we need to filter
  colDiv = colDiv.addClass("content");
  for (let j=0; j<tagArray.length; j++){
   colDiv = colDiv.addClass(tagArray[j]);
  }

  // make the card linkable
  let linkHolder = $('<a>');
  linkHolder = linkHolder.attr({
    href: src,
    target: "_blank",
    rel: "noopener noreferrer"
  });
  

  let card = $('<div>');
  card = card.addClass("card mb-4 shadow-sm");

  let image = $('<img>');
  image = image.addClass("bd-placeholder-img card-img-top");
  // add attributes to the image
  image = image.attr({
    width: "100%",
    height: "225",
    src: src,
    preserveAspectRatio: "xMidYMid slice",
    focusable: "false"
  });

  // put the image into the card
  card = card.append(image);

  // put the card into the linkholder
  linkHolder = linkHolder.append(card);

  // put the linkholder into the colDiv
  colDiv = colDiv.append(linkHolder);

  // append the colDiv to the galleryHook
  $("#galleryHook").append(colDiv);
};


// MAIN PROCESSES
// put all images in the carousel-data.js onto the page
for (let i = 0; i < data.length; i++) {
  galleryItem(data[i].src, data[i].tags)
};