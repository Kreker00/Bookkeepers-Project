import { cardMarkup } from './basket-markup';
import { onErrorStubMarkup } from './basket-markup';
import { selectors } from './basket-selectors';

// const STOREDBOOKS = 'books';
// let formData = JSON.parse(localStorage.getItem(KEY)) || {};

// populateForm();

// function saveFormValue(evt) {
//   formData[evt.target.name] = evt.target.value;

//   localStorage.setItem(KEY, JSON.stringify(formData));
// }

// id,
//   list_name,
//   book_image,
//   description,
//   author,
//   title,

function onGetLocalArr() {
  const saveCart = JSON.parse(localStorage.getItem(STOREDBOOKS));
  if (saveCart.length === 0) {
    onErrorStubMarkup();
  }

  // if (saveCart) {
  //   // emailEl.value = saveMessage.email || '';
  //   // textareaEl.value = saveMessage.message || '';
  // }
}
