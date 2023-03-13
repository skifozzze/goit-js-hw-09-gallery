import { refs } from './refs';

export default function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const bigImageUrl = evt.target.dataset.source;

  refs.lightBoxEl.classList.add('is-open');

  refs.lightBoxImgEl.src = bigImageUrl;
  refs.lightBoxImgEl.alt = evt.target.alt;
}
