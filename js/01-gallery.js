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
itemsList.addEventListener('click', handlerClick);

function handlerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return
  }
  const {source} = evt.target.dataset;
  const item = galleryItems.find((item)=> item.original === source)
  const instance = basicLightbox.create(`
      <div class = "modal">
        <img src="${item.original}" alt="${item.description}}" />
        </div>
  
  `)
      instance.show()
}



