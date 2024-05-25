let btnNext = document.querySelector(".next");
let btnBack = document.querySelector(".back");

let container = document.querySelector(".container");
let list = document.querySelector(".container .list");
let thumb = document.querySelector(".container .thumb");

btnNext.onclick = () => moveItemsOnclick("next");
btnBack.onclick = () => moveItemsOnclick("back");

function moveItemsOnclick(type) {
  let listItems = document.querySelectorAll(".list .list-item");
  let thumbtItems = document.querySelectorAll(".thumb .thumb-item");

  if (type === "next") {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbtItems[0]);
    container.classList.add("next");
  } else {
    list.prepend(listItems[listItems.length - 1]);
    thumb.prepend(thumbtItems[thumbtItems.length - 1]);
    container.classList.add("back");
  }

  setTimeout(() => {
    container.classList.remove("next");
    container.classList.remove("back");
  }, 3000);
}
