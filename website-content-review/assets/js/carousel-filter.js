// test 
console.log("carousel-filter.js loaded");

const data = [

  // 2019-04-18 images
  {
    src: "./assets/img/20190418-Graphics/20190418-4EverGIBIll.png",
    tags: ["gibill"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-Education-blog-2.jpg",
    tags: ["gibill"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-Hands-of-Veterans.jpg",
    tags: ["none"],
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-Legacy1.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-NCA-photo.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-NCA-revised-sketch.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-No-Veteran-Ever-Dies-2.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-No-Veteran-Ever-Dies1.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-Randy-Reeves.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190418-Graphics/20190418-Telehealth-Tech.jpg",
    tags: ["telehealth"]
  },
  // end 2019-04-18 images

  // start 2019-04-17 images
  {
    src: "./assets/img/20190417-Graphics/20190417-Access-Standards-without-va-logo.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Access-Standards.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Customer-service.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-GIS.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Legacy.jpg",
    tags: ["nca"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Mission-Act.jpg",
    tags: ["mission-act"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Urgent-care.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-VA-Community-Care.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-Veterans-at-the-Center.jpg",
    tags: ["none"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-community-provider.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/20190417-facilities.jpg",
    tags: ["vha"]
  },

  {
    src: "./assets/img/20190417-Graphics/HRO1a.png",
    tags: ["hro"]
  },

  {
    src: "./assets/img/20190417-Graphics/HRO2a.png",
    tags: ["hro"]
  },

  {
    src: "./assets/img/20190417-Graphics/HRO3a.png",
    tags: ["hro"]
  },

  {
    src: "./assets/img/20190417-Graphics/Lighthouse1a.png",
    tags: ["apis"]
  },

  {
    src: "./assets/img/20190417-Graphics/Lighthouse2a.png",
    tags: ["apis"]
  },

  {
    src: "./assets/img/20190417-Graphics/Lighthouse3a.png",
    tags: ["apis"]
  },

  {
    src: "./assets/img/20190417-Graphics/Lighthouse4a.png",
    tags: ["apis"]
  },

  {
    src: "./assets/img/20190417-Graphics/Telehealth1a.png",
    tags: ["telehealth"]
  }
  // end 2019-04-17 images






]


let hook = $("#tester");

// functions

// function that buildds the carousel item, takes in the src for the carousel image and a boolean as to whether it is the first slide
function cSlide(img, firstSlide) {
  // build the carousel item, call it cItem
  var cItem = $("<div>");
  // set the first slide to active
  if (firstSlide === true) {
    cItem = cItem.addClass("carousel-item active");
  } else {
    cItem = cItem.addClass("carousel-item");
  }
  // build the carousel image
  var image = $("<img>");
  image = image.addClass("d-block w-100");
  image = image.attr("src", img);
  // append the carousel image to the cItem
  cItem = cItem.append(image);
  // append cItem to the hook on the carousel
  hook.append(cItem);
}

// function that takes in the sorted array and builds the carousel
function cBuilder(array) {
  hook.empty();
  if (array.length > 0) {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        cSlide(array[i].src, true)
      } else {
        cSlide(array[i].src, false)
      }
    }
  } else {
    console.log("CAROUSEL ERROR")
  }
}

// function that filters the images based on tag.
function filterImgs(tag) {
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].tags.length; j++) {
      if (data[i].tags[j] === tag) {
        array.push(data[i])
      }
    }
  }
  // calls the carousel builder
  cBuilder(array);
}




