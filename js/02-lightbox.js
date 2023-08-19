import { galleryItems } from './gallery-items.js';
// Change code below this line

const itemsList = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image js-img"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
}
itemsList.insertAdjacentHTML('beforeend', createMarkup(galleryItems));


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});
console.log(galleryItems);
