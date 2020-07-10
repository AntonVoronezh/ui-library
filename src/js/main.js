import "./lib/lib";

// console.log($('div').show());
// $("button").on("click", function () {
// $("div").eq(2).toggleClass("active");
// });

$("div").click(function () {
  console.log($(this).index());
});

// console.log($('div').eq(2).find2('.some'))
// console.log($('.some').closest('.findme'))

// console.log($(".more").eq(0).siblings());
// console.log($(".findme").siblings());
console.log($(".findme").fadeIn(2000, ()=>console.log('111')));
