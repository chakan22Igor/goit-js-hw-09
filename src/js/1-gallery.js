import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";
import "../css/styles.css";

const basePath = import.meta.env.BASE_URL;

const images = [
  {
    preview:
      `${basePath}img/1.jpg`,
    original:
      `${basePath}img/1.jpg`,
    description: "Plan",
  },
  {
    preview:
      `${basePath}img/2.jpg`,
    original:
      `${basePath}img/2.jpg`,
    description: `lamp`,
  },
  {
    preview:
      `${basePath}img/3.jpg`,
    original:
      `${basePath}img/3.jpg`,
    description: `phone`,
  },
  {
    preview:
      `${basePath}img/2-1.jpg`,
    original:
      `${basePath}img/2-1.jpg`,
    description: `kitchen`,
  },
  {
    preview:
      `${basePath}img/2-2.jpg`,
    original:
      `${basePath}img/2-2.jpg`,
    description: `room`,
  },
  {
    preview:
      `${basePath}img/2-3.jpg`,
    original:
      `${basePath}img/2-3.jpg`,
    description: `office`,
  },
  {
    preview:
      `${basePath}img/3-1.jpg`,
    original:
      `${basePath}img/3-1.jpg`,
    description: `coffee`,
  },
  {
    preview:
      `${basePath}img/3-2.jpg`,
    original:
      `${basePath}img/3-2.jpg`,
    description: `sweater`,
  },
  {
    preview:
      `${basePath}img/3-3.jpg`,
    original:
      `${basePath}img/3-3.jpg`,
    description: `presentation`,
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
