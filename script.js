function makeElement(tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element
}

function createCard(product) {
  var listItem = makeElement("div", "item");

  var picture = makeElement("img", "product__image");
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var title = makeElement("h4", "desc-text", product.text)
  listItem.appendChild(title);

  var price = makeElement("button", "button-49", product.price)
  listItem.appendChild(price)

  var availabilityClass = "item--available";
  if (!productInfo.isAvailable) {
    availabilityClass = "item--unavailable"
  }
  listItem.classList.add(availabilityClass)

  return listItem;
}

var cardList = document.querySelector('.items');
console.log(cardList.children);

var productInfo = {
  isAvailable: false,
  imgUrl: "media/modern-pop.jpg",
  text: "Pop4",
  price: "$500",
  isSpecial: false,
  specialPrice: null,
}

var cardItem = createCard(productInfo);
cardList.appendChild(cardItem);
// var listItem = document.createElement("div");
// listItem.classList.add("item");
// cardList.appendChild(listItem);
// console.log(cardList.children);

// var title = document.createElement("h4");
// title.classList.add("desc-text");
// title.textContent = "Pop4";
// listItem.appendChild(title);

// var price = document.createElement("button");
// price.classList.add("button-49")
// price.textContent = "$300"
// listItem.appendChild(price)

// var listItem = makeElement("div", "item");
// cardList.appendChild(listItem);

// var picture = makeElement("img", "product__image");
// picture.src = "media/modern-pop.jpg";
// picture.alt = "Modern Pop";
// listItem.appendChild(picture);

// var title = makeElement("h4", "desc-text", "Pop4")
// listItem.appendChild(title);

// var price = makeElement("button", "button-49", "$300")
// listItem.appendChild(price)