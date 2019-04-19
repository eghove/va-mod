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


