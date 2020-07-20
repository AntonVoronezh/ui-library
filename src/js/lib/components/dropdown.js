import $ from "../core";

$.prototype.dropdown = function () {
  for (let i = 0; i < this.lenght; i++) {
    const id = this[i].getAttribute("id");

    $(this[i]).on("click", () => {
      $(`[data-toggle-id="${id}]"`).fadeToggle(300);
    });
  }
};

// console.log($(".dropdown-toggle"))
$(".dropdown-toggle").dropdown();
