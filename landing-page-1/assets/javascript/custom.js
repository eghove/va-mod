// CUSTOM JS FOR THE NAV BAR
// displays submenu on hover
$(".usa-nav-link").on("mouseover", function () {
  $(this).attr("aria-expanded", "true");
  $(this).next().attr("aria-hidden", "false");
})

$(".usa-nav-submenu").on("mouseover", function () {
  $(this).attr("aria-hidden", "false");
  $(this).siblings().attr("aria-expanded", "true");
})

// hides submenu on when user no longer hovering
$(".usa-nav-link").on("mouseleave", function () {
  $(this).attr("aria-expanded", "false");
  $(this).next().attr("aria-hidden", "true");
})

$(".usa-nav-submenu").on("mouseleave", function () {
  $(this).attr("aria-hidden", "true");
  $(this).siblings().attr("aria-expanded", "false");
})