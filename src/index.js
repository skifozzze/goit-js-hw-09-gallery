import { galleryItems } from './js/galleryItems';
import { refs } from './js/refs';
import createGalleryMarkup from './js/createGalleryMarkup';
import onImageClick from './js/onImageClick';
import onCloseBtnClick from './js/onCloseBtnClick';
import onEscBtnPress from './js/onEscBtnPress';
import onLightBoxOverlayClick from './js/onLightBoxOverlayClick';

refs.galleryEl.addEventListener('click', onImageClick);
refs.closeBtnEl.addEventListener('click', onCloseBtnClick);
refs.lightBoxOverlayEl.addEventListener('click', onLightBoxOverlayClick);
window.addEventListener('keydown', onEscBtnPress);

const galleryMarkup = createGalleryMarkup(galleryItems);

refs.galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
