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

// selectors.shopRemoveBtnEl.addEventListener('click', onRemoveCard);
// onRemoveCard(cardArr);

// function onRemoveCard(evt) {
//   console.log(evt);
//   let removeArr = evt;
//   const cardTarget = evt.target.Dataset[id];
//   const idElement = cardArr.find(cardTarget).indexOf();
//   const or = cardArr.splice(idElement, 1);
//   localStorage.setItem(KEY, JSON.stringify(cardArr));
//   shopCardMarkup(cardArr);

//   // const cardIndex = evt.indexOf(cardTarget);
//   // console.log(cardIndex);
//   // const removeIndex = evt.splice(cardIndex, 1);

//   localStorage.setItem(KEY, JSON.stringify(removeArr));
// }

// listItem.addEventListener("onclick", function(e) {
//   remove(e.target);
//   //функция получит в качестве аргумента объект по которому кликнули
// });
// function remove(o) {
//   // для удаления нужного нам элемента используем свойство объекта в котором хранится индекс
//   arrayForSort.splice(o.indexOfLi, 1);
// }

// function removeBook(currentBook) {
//     try {
//       const getQueueFromStorage = localStorage.getItem("'QueueBook")
//       const getQueueArray = JSON.parse(getQueueFromStorage)

//       const queueBookIndex = getQueueArray.findIndex(value => value.id === currentBook.id);
//       getQueueArray.splice(queueBookIndex, 1)
//       localStorage.setItem("QueueBook", JSON.stringify(getQueueArray))

//   } catch (error) {
//     // console.error(' error: ', error.message);
//   }
// }
// /
