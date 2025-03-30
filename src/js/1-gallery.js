import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/styles.css";

const images = [
  {
    preview:
      "/img/1.jpg",
    original:
      "/img/1.jpg",
    description: "Plan",
  },
  {
    preview:
      "/img/2.jpg",
    original:
      "/img/2.jpg",
    description: "lamp",
  },
  {
    preview:
      "/img/3.jpg",
    original:
      "/img/3.jpg",
    description: "phone",
  },
  {
    preview:
      "/img/2-1.jpg",
    original:
      "/img/2-1.jpg",
    description: "kitchen",
  },
  {
    preview:
      "/img/2-2.jpg",
    original:
      "/img/2-2.jpg",
    description: "room",
  },
  {
    preview:
      "/img/2-3.jpg",
    original:
      "/img/2-3.jpg",
    description: "office",
  },
  {
    preview:
      "/img/3-1.jpg",
    original:
      "/img/3-1.jpg",
    description: "coffee",
  },
  {
    preview:
      "/img/3-2.jpg",
    original:
      "/img/3-2.jpg",
    description: "sweater",
  },
  {
    preview:
      "/img/3-3.jpg",
    original:
      "/img/3-3.jpg",
    description: "presentation",
  },
];

const galleryContainer = document.querySelector(".gallery");

const galleryHTML = images
  .map(
    (image) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.original}">
        <img
          class="gallery-image"
          src="${image.original}"
          alt="${image.description}"
        />
      </a>
    </li>`
  )
  .join("");

galleryContainer.innerHTML = galleryHTML;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
