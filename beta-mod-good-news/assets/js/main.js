
 

  function buildShare(prevImage, titleText, descText, fbookLink, twitterLink, linkedInLink, srcLink) {
    // build the row
    let row = $("<div>");
    // add the classes to the row
    row = row.addClass("row share-card");

    // build the column
    let col = $("<div>");
    // add classes to the column
    col = col.addClass("col-md-10 offset-md-1");

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
    // give fbook a class
    fbook = fbook.addClass("fbook");
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
    let twitterHelper = '<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-text=""'+
    'data-url="" data-show-count="false">Tweet' + 
 '</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
    let twitter = $(twitterHelper);


    // build the linkedIn share
    let linkedInHelper = '<script type="IN/Share" data-url=""></script>';
    let linkedIn = $(linkedInHelper);

    
    // build the article source button
    let srcButton = $("<a>");
    // add the styling class
    srcButton = srcButton.addClass("btn btn-success btn-sm");
    
    // set the button attributes
    srcButton = srcButton.attr({
        href: srcLink,
        role: "button",
        target: "_blank",
        rel: "noopener noreferrer"
      });

    // add the text to the button
    srcButton = srcButton.text("Read more!");

    // build the Share by Email object
    let emailShare = $("<a>");
    function emailStringBuilder(articleSrc) {
      let base = "mailto:";
      let subject = "?subject=Check out this artcle about VA!";
      let body = "&body=I found this article about VA to be interesting:%0D%0A";
      let article = "" + articleSrc + "%0DLet me know what you think!";
      return base + subject + body + article;
    }
    emailShare = emailShare.attr("href", emailStringBuilder(srcLink));
    emailShare = emailShare.text("Share Article by Email!");
    emailShare = emailShare.addClass("btn btn-secondary btn-sm email");

    // <a href="mailto:eghove@gmail.com?subject=Check out this article about VA!&body=I found this article about VA to be interesting">www.va.gov</a>



    // ASSEMBLY
    var hook = $("#page-content");

    // setting the twitter attributes here instead of inline with backticks
    twitter = twitter.attr("data-text", titleText);
    twitter = twitter.attr("data-url", twitterLink)

    // setting the linkedIn attributes here instead of inline with backticks
    linkedIn = linkedIn.attr("data-url", linkedInLink)

    // append pieces of the card to the card body
    cardBody = cardBody.append(cardTitle, cardText, fbook, twitter, linkedIn, "<br/><br/>", srcButton, emailShare);

    // append the preview image, card-body to the card
    card = card.append(previewImg, "<hr>", cardBody);
    // append the card to the column
    col = col.append(card);
    // append the colum to the row
    row = row.append(col);

    // append the row to the hook
    hook.append(row);



  }

// loop through all elements in shareData

for (let i=0; i < shareData.length; i++) {
  buildShare(shareData[i].preview_image, shareData[i].title_text, shareData[i].descpription_text, shareData[i].faceBook_link, shareData[i].twitter_link, shareData[i].linkedIn_link, shareData[i].article_src);

};


