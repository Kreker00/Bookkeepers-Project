const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.icon-x-close');
const addToShoppingListBtn = modal.querySelector('.btn-books');

function openModal(bookData) {
  modal.querySelector('.cover-image').src = bookData.coverImageURL;
  modal.querySelector('.books-name').textContent = bookData.title;
  modal.querySelector('.author').textContent = bookData.author;
  modal.querySelector('.description').textContent = bookData.description;
  modal.querySelector('.amazon-link').href = bookData.amazonURL;
  modal.querySelector('.book-link').href = bookData.bookstoreURL;
  // Відобразіть модальне вікно
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});

addToShoppingListBtn.addEventListener('click', () => {});
