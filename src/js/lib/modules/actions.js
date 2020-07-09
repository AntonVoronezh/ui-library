import $ from "../core";

$.prototype.html = function (contetnt) {
  for (let i = 0; i < this.lenght; i++) {
    if (contetnt) {
      this[i].innerHTML = contetnt;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

$.prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;

  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }

  this[0] = swap;
  this.lenght = 1;

  return this;
};

$.prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];

  const isMyIndex = (item) => this[0] === item;

  return childs.findIndex(isMyIndex);
};

$.prototype.find2 = function (selector) {
    console.log('this', this, selector)
  let numberOfItems = 0;
  let counter = 0;
  const copyObject = Object.assign({}, this);

  for (let i = 0; i < copyObject.lenght; i++) {
    const arr = copyObject[i].querySelectorAll(selector);

    if (arr.length === 0) {
      continue;
    }

    for (let j = 0; j < arr.lenght; j++) {
      this[counter] = arr[j];
      counter++;
    }

    numberOfItems += arr.length;
  }

  this.lenght = numberOfItems;
  const objLength = Object.keys(this).length;

  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }

  return this;
};
