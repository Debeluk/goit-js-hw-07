import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", itemClick);

function itemClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.classList.contains("gallery__image")) {
    const originalUrl = target.dataset.source;
    const description = target.alt;

    const lightboxContent = `<img src="${originalUrl}" alt="${description}" width="800" height="600">`;

    const modal = basicLightbox.create(lightboxContent);

    modal.show();
  }
}
