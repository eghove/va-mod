// MAIN PROCESSES
$(".filter-choice").on("click", function () {
  let filter = $(this).attr("data-value");

  if (filter === "content") {
    showAll();
    
  } else {
    hideAll()
    showSelect(filter);
  }

}
)
