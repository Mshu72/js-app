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

let count = 0; //letで宣言した関数は再代入できる
count = 1;
count = 2;
count = 3;

// var キーワードでは、値の再代入がこの宇な変数を宣言できる
var booktitle = "Javascript"
