import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as e}from"./assets/vendor-B5umZdDZ.js";/* empty css                      */const i="/goit-js-hw-09/",r=[{preview:`${i}img/1.jpg`,original:`${i}img/1.jpg`,description:"Plan"},{preview:`${i}img/2.jpg`,original:`${i}img/2.jpg`,description:"lamp"},{preview:`${i}img/3.jpg`,original:`${i}img/3.jpg`,description:"phone"},{preview:`${i}img/2-1.jpg`,original:`${i}img/2-1.jpg`,description:"kitchen"},{preview:`${i}img/2-2.jpg`,original:`${i}img/2-2.jpg`,description:"room"},{preview:`${i}img/2-3.jpg`,original:`${i}img/2-3.jpg`,description:"office"},{preview:`${i}img/3-1.jpg`,original:`${i}img/3-1.jpg`,description:"coffee"},{preview:`${i}img/3-2.jpg`,original:`${i}img/3-2.jpg`,description:"sweater"},{preview:`${i}img/3-3.jpg`,original:`${i}img/3-3.jpg`,description:"presentation"}],p=document.querySelector(".gallery"),o=r.map(g=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${g.original}">
        <img
          class="gallery-image"
          src="${g.original}"
          alt="${g.description}"
        />
      </a>
    </li>`).join("");p.innerHTML=o;new e(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
