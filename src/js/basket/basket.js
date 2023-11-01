import { Axios } from 'axios';
const ulShopEl = document.querySelector('.shopping-list-container');
const sectionShopEl = document.querySelector('.shopping-list-section');
// const KEY = 'feedback-form-state';
// let formData = JSON.parse(localStorage.getItem(KEY)) || {};

// populateForm();

// function saveFormValue(evt) {
//   formData[evt.target.name] = evt.target.value;

//   localStorage.setItem(KEY, JSON.stringify(formData));
// }

function onGetLocalArr({
  id,
  list_name,
  book_image,
  description,
  author,
  title,
}) {
  const saveCart = JSON.parse(localStorage.getItem(STOREDBOOKS));

  // if (saveCart) {
  //   // emailEl.value = saveMessage.email || '';
  //   // textareaEl.value = saveMessage.message || '';
  // }
}
