import $ from "jquery";

$(function(){
  $(document).on("mouseover", "h1", function () {
    $(this).css({ "color": "blue" });
  }).on("mouseout", "h1", function () {
    $(this).css({ "color": "" });
  })
});

$(".btn").on("click", function(){
  $(".btn").toggleClass("close-btn");
  $(".menu").toggleClass("open-menu");
});