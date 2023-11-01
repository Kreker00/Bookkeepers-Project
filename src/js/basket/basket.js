import { shopCardMarkup } from './basket-markup';
import { onErrorStubMarkup } from './basket-markup';
import { selectors } from './basket-selectors';
import { KEY } from '../modal/modal-local-storage';

onGetLocalArr();

function onGetLocalArr() {
  try {
    const cardArr = JSON.parse(localStorage.getItem(KEY));
    console.log(cardArr);

    console.log(cardArr);
    shopCardMarkup(cardArr);
    if (cardArr.length === 0) {
      onErrorStubMarkup(cardArr);
      return;
    }

    // onRemoveCard(saveCardArr);
  } catch (error) {
    console.error('Error:', error);
    // onErrorStubMarkup(saveCardArr);
  }
}

function onRemoveCard(evt) {
  let removeArr = evt;
  const cardTarget = evt.currentTarget;
  const cardIndex = evt.indexOf(cardTarget);
  const removeIndex = evt.splice(cardIndex, 1);

  localStorage.setItem(STORED_BOOKS, JSON.stringify(removeArr));
}

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
