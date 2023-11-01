// Отримайте посилання на елементи модального вікна
const modal = document.querySelector('.modal');
const closeBtn = modal.querySelector('.icon-x-close');
const addToShoppingListBtn = modal.querySelector('.btn-books');
// Функція для відкриття модального вікна з детальною інформацією про книгу
function openModal(bookData) {
  // Заповніть вміст модального вікна з даними книги
  modal.querySelector('.cover-image').src = bookData.coverImageURL;
  modal.querySelector('.books-name').textContent = bookData.title;
  modal.querySelector('.author').textContent = bookData.author;
  modal.querySelector('.description').textContent = bookData.description;
  modal.querySelector('.amazon-link').href = bookData.amazonURL;
  modal.querySelector('.book-link').href = bookData.bookstoreURL;
  // Відобразіть модальне вікно
  modal.style.display = 'block';
}
// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = 'none';
}
// Додайте обробники подій для закриття модального вікна
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
// Додайте обробник події для кнопки "Додати до Shopping list"
addToShoppingListBtn.addEventListener('click', () => {
  // Додайте код для додавання книги до Shopping list і оновлення інформації в localStorage
  // Наприклад, можна зберігати список книг у масиві та оновлювати його в localStorage
  // Потім можна відобразити інформацію про Shopping list користувача
});
