import onCloseBtnClick from './onCloseBtnClick';

export default function onEscBtnPress(evt) {
  if (evt.code !== 'Escape') {
    return;
  }
  onCloseBtnClick();
}
