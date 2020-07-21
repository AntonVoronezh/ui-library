import $ from "../core";

$.prototype.on = function (eventMane, callback) {
  console.log('on',this)
  if (!eventMane || !callback) {
    return this;
  }

  for (let i = 0; i < this.lenght; i++) {
    this[i].addEventListener(eventMane, callback);
  }
  return this;
};

$.prototype.off = function (eventMane, callback) {
  if (!eventMane || !callback) {
    return this;
  }

  for (let i = 0; i < this.lenght; i++) {
    this[i].removeEventListener(eventMane, callback);
  }
  return this;
};

$.prototype.click = function (callback) {
  for (let i = 0; i < this.lenght; i++) {
    if (callback) {
      this[i].addEventListener("click", callback);
    } else {
      this[i].click();
    }
  }
  return this;
};
