// test
console.log("filter-script.js is loaded");

// functions

// hides all content
function hideAll() {
  $(".content").hide();
}

// shows all content
function showAll() {
  $(".content").show();
}

// shows select content
function showSelect(filter) {
  $("." + filter + "").show();
}

// main processes
$(".filter-choice").on("click", function () {
  let filter = $(this).attr("data-value");

  console.log(filter);

  if (filter === "content") {
    showAll();
  } else {
    hideAll()
    showSelect(filter);
  }

}
)
