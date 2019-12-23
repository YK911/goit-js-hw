"use strict";
import galleryItems from "./gallery-items.js";

/* ==== create nessesary nodes ====*/
const tagList = {
  gallery: document.querySelector(".js-gallery"),
  modal: document.querySelector(".lightbox"),
  image: document.querySelector(".lightbox__image")
};

/* ==== create gallery collection ====*/
const initializeGallery = galleryItems.reduce((acc, item) => {
  return (acc += `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
  </a>
  </li>`);
}, "");
tagList.gallery.insertAdjacentHTML("afterbegin", initializeGallery);

/* ==== adding listener ====*/
tagList.gallery.addEventListener("click", handleClick);
tagList.modal.addEventListener("click", handleClose);
document.addEventListener("keydown", handleKeyPress);

/* ==== create functional expressions ====*/
function handleClick(event) {
  event.preventDefault();
  tagList.modal.classList.add("is-open");
  tagList.image.src = event.target.dataset.source;
}

function handleClose(event) {
  event.preventDefault();
  if (event.target === tagList.image) {
    return;
  }
  tagList.modal.classList.remove("is-open");
  tagList.image.src = "";
}

function allowedKey(key) {
  const ALLOWED_KEYS = ["Escape", "ArrowRight", "ArrowLeft"];
  return ALLOWED_KEYS.includes(key);
}

function handleKeyPress(event) {
  if (!allowedKey(event.code)) {
    return;
  }

  if (event.code === "Escape") {
    tagList.modal.classList.remove("is-open");
    tagList.image.src = "";
    return;
  }

  let index;
  const currentImg = galleryItems.find((item, currentIndex) => {
    index = currentIndex;
    return item.original === tagList.image.src;
  });
  if (event.code === "ArrowRight") {
    index += 1;
  }
  if (event.code === "ArrowLeft") {
    index -= 1;
  }
  if (index < 0) {
    index = galleryItems.length - 1;
  }
  if (index > galleryItems.length - 1) {
    index = 0;
  }
  tagList.image.src = galleryItems[index].original;
}
