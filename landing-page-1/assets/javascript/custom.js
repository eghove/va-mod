// CUSTOM JS FOR THE NAV BAR
// displays submenu on hover
$(".usa-nav-link").on("mouseover", function () {
  $(this).attr("aria-expanded", "true");
  $(this).next().attr("aria-hidden", "false");
})

// hides submenu on when user no longer hovering
$(".usa-nav-link").on("mouseleave", function () {
  $(this).attr("aria-expanded", "false");
  $(this).next().attr("aria-hidden", "true");
})