import { refs } from './refs';

export default function onCloseBtnClick() {
  refs.lightBoxEl.classList.remove('is-open');
  refs.lightBoxImgEl.src = '';
}
