import { shopCardMarkup } from './basket-markup';
import { onErrorStubMarkup } from './basket-markup';
import { KEY } from '../modal/modal-local-storage';
import { selectors } from './basket-selectors';
import Notiflix from 'notiflix';

let cardArr = JSON.parse(localStorage.getItem(KEY)) || [];

onGetLocalArr();

function onGetLocalArr() {
  try {
    if (cardArr.length === 0) {
      onErrorStubMarkup(cardArr);
      return;
    }
    shopCardMarkup(cardArr);
  } catch (error) {
    console.error('Error:', error);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
selectors.ShopUlEl.addEventListener('click', onRemoveCard);

export function onRemoveCard(evt) {
  let dataId = evt.target.dataset.cardId;
  let removeBtn = evt.target.closest('.shopping-item');

  if (evt.target.className !== 'shopping-delete-btn') {
    return;
  } else {
    console.log(dataId);
    console.log(evt.target);

    removeBtn.remove();
    // localStorage.removeItem(KEY);

    onErrorStubMarkup(cardArr);
  }

  // console.log(evt.target);
  // if (evt.target.childNodes) {
  //   const or = evt.target.classList.closest('shopping-delete-btn');
  //   console.log(or);
  // }

  // let removeArr = evt.dataset;
  // if (evt.target.classList.contains('shopping-delete-btn')) {
  //   this.remove();
  // }
}
