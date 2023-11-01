import { shopCardMarkup } from './basket-markup';
import { onErrorStubMarkup } from './basket-markup';
import { KEY } from '../modal/modal-local-storage';
import { selectors } from './basket-selectors';
import Notiflix from 'notiflix';

let localCardArr = JSON.parse(localStorage.getItem(KEY)) || [];

selectors.ShopUlEl.addEventListener('click', removeItemCard);

onGetLocalArr();

function onGetLocalArr() {
  try {
    if (localCardArr.length === 0) {
      onErrorStubMarkup(localCardArr);
      return;
    }
    shopCardMarkup(localCardArr);
  } catch (error) {
    console.error('Error:', error);
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

function removeItemCard(clickedItem) {
  if (clickedItem.target.className != 'shopping-delete-btn') {
    return;
  }

  let index = localCardArr.findIndex(item => item === clickedItem);

  localCardArr.splice(index, 1);

  localStorage.setItem(KEY, JSON.stringify(localCardArr));

  window.location.href = '';
}
