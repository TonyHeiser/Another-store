// var productInfo = {
//   isAvailable: true,
//   imgUrl: "media/modern-pop.jpg",
//   text: "Pop4",
//   price: "$500",
//   isSpecial: true,
//   specialPrice: "$599",
// }

// var cardItem = createCard(productInfo);
// cardList.appendChild(cardItem);
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


var cardsData = [
  {
    isAvailable: true,
    imgUrl: 'media/2Yw3FNZ5HSQ.jpg',
    text: 'Pop4',
    price: "$200",
    isSpecial: false
  },
  {
    isAvailable: false,
    imgUrl: 'media/3e79d0c549bad2dde28057c338eae2a3.jpg',
    text: 'Pop5',
    price: "$1500",
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'media/pop-art-woman-with-candypill-on-the-gal-amar.jpg',
    text: 'Pop6',
    price: "$2500",
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'media/screen-shot-2014-09-25-at-10-22-22-pm-1024x1024.png',
    text: 'Pop7',
    price: "$4900",
    isSpecial: true,
    specialPrice: "$100"
  }
];

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
  if (!product.isAvailable) {
    availabilityClass = "item--unavailable"
  }
  listItem.classList.add(availabilityClass)

  if (product.isSpecial) {
    listItem.classList.add("item--special");
    var specialPrice = makeElement('button', 'button-49', product.specialPrice);
    listItem.appendChild(specialPrice)
  }

  return listItem;
}

var cardList = document.querySelector('.items');

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = createCard(cardsData[i])
  cardList.appendChild(cardItem)
}


// ^Popup

var popup = document.querySelector('.modal');
var openPopupButton = document.querySelector(".button-open");
var closePopupButton = popup.querySelector(".button-close");

openPopupButton.addEventListener("click", function(evt) {
  evt.preventDefault();

  popup.classList.add("modal--show")
});

closePopupButton.addEventListener("click", function() {
  popup.classList.remove("modal--show")
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 27) {
    popup.classList.remove('modal--show');
  }
});


//^ Gallery

var photos = [
  'media/Lips.jpg',
  'media/Marilyn.jpg',
  'media/couple.jpg',
  'media/6img.jpg',
  'media/Black-white-red.jpg',
  'media/green-bgc.jpg'
];


var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener("click", function(){
    fullPhoto.src = photo;
  })
}

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i])
}


// ~Checkbox

var list = document.querySelector('.todo-list');
// var items = list.querySelectorAll('.todo-list-item');
var items = list.children;
var emptyListMessage = document.querySelector(".empty-tasks");
var newItemForm = document.querySelector('.add-form');
var newItemTitle = newItemForm.querySelector(".add-form-input");
var taskTemplate = document.querySelector("#task-template").content;
var newItemTemplate = taskTemplate.querySelector(".todo-list-item");

var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove("hidden")
  } else {
    emptyListMessage.classList.add("hidden")  
  }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i])
};

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  var taskText = newItemTitle.value;
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector("span");
  taskDescription.textContent = taskText;
  addCheckHandler(task)
  list.appendChild(task);
  toggleEmptyListMessage();
  newItemTitle.value = "";
});
