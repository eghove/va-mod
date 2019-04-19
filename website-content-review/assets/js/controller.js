// main processes
$(".filter-choice").on("click", function () {
  let filter = $(this).attr("data-value");

  console.log(filter);

  if (filter === "content") {
    showAll();
    cBuilder(data);
  } else {
    hideAll()
    showSelect(filter);
    filterImgs(filter);
  }

}
)

// default the carousel to show everything on load
cBuilder(data);