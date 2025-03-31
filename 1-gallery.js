import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as g}from"./assets/vendor-B5umZdDZ.js";/* empty css                      */const e=[{preview:"img/1.jpg",original:"img/1.jpg",description:"Plan"},{preview:"img/2.jpg",original:"img/2.jpg",description:"lamp"},{preview:"img/3.jpg",original:"img/3.jpg",description:"phone"},{preview:"img/2-1.jpg",original:"img/2-1.jpg",description:"kitchen"},{preview:"img/2-2.jpg",original:"img/2-2.jpg",description:"room"},{preview:"img/2-3.jpg",original:"img/2-3.jpg",description:"office"},{preview:"img/3-1.jpg",original:"img/3-1.jpg",description:"coffee"},{preview:"img/3-2.jpg",original:"img/3-2.jpg",description:"sweater"},{preview:"img/3-3.jpg",original:"img/3-3.jpg",description:"presentation"}],r=document.querySelector(".gallery"),p=e.map(i=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i.original}">
        <img
          class="gallery-image"
          src="${i.original}"
          alt="${i.description}"
        />
      </a>
    </li>`).join("");r.innerHTML=p;new g(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
