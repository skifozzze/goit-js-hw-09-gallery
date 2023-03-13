import { galleryItems } from './galleryItems';

export default function createGalleryMarkup(item) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a
            class="gallery__link"
            href="${original}"
          >
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
    .join('');
}
