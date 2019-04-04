$(document).ready(function () {
  // console.log( shareData[0].preview_image );

  function buildShare(prevImage, titleText, descText, fbookLink, twitterLink, linkedInLink) {
    // build the row
    let row = $("<div>");
    // add the classes to the row
    row = row.addClass("row share-card");

    // build the column
    let col = $("<div>");
    // add classes to the column
    col = col.addClass("col-md-12");

    // build the card holder
    let card = $("<div>");
    // add classes to the card
    card = card.addClass("card");

    // build the preview image
    let previewImg = $("<img>");
    // add classes to the preview image
    previewImg = previewImg.addClass("card-img-top");
    // add attributes to the image, including the link
    previewImg = previewImg.attr("src", prevImage);

    // build the card-body
    let cardBody = $("<div>");
    // add classes to the card-body
    cardBody = cardBody.addClass("card-body");

    // build the card-title
    let cardTitle = $("<h5>");
    // add class to the card-title
    cardTitle = cardTitle.addClass("card-title");
    // add content to the card-title
    cardTitle = cardTitle.text(titleText);

    // build the card-text
    let cardText = $("<p>");
    // add class to the card-text
    cardText = cardText.addClass("card-text");
    // add content to card-text
    cardText = cardText.text(descText);

    // build the facebook share
    let fbook = $("<iframe>");
    // set attributes for facebook share button
    fbook = fbook.attr({
      src: "https://www.facebook.com/plugins/share_button.php?href=" + fbookLink + "&layout=button&size=small&width=59&height=20&appId",
      width: "59",
      height: "20",
      style: "border:none;overflow:hidden",
      scrolling: "no",
      frameborder: "0",
      allowTransparency: "true",
      allow: "encrypted-media"
    });

    // build the twitter share
    let twitterHelper = `<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text="${titleText}"
    data-url="${twitterLink}" data-show-count="false">Tweet
  </a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> `
    let twitter = $(twitterHelper)


    // build the linkedIn share
    let linkedInHelper = `<script type="IN/Share" data-url="${linkedInLink}"></script>`
    let linkedIn = $(linkedInHelper)


    // ASSEMBLY
    var hook = $("#page-content");

    // append pieces of the card to the card body
    cardBody = cardBody.append(cardTitle, cardText, fbook, twitter, linkedIn);

    // append the preview image, card-body to the card
    card = card.append(previewImg, cardBody);
    // append the card to the column
    col = col.append(card);
    // append the colum to the row
    row = row.append(col);

    // append the row to the hook
    hook.prepend(row);



  }

 buildShare(shareData[0].preview_image, shareData[0].title_text, shareData[0].descpription_text, shareData[0].faceBook_link, shareData[0].twitter_link, shareData[0].linkedIn_link);





});

