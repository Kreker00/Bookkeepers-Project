import { getCategoryByBook, getBestBook } from '../category/api-requests';
import { getMarkupByCategory, getMarkupBestBooks } from './books-markup';
import { booksSelectors } from './books-selectors';
import { categorySelectors } from '../category/category-selectors';
import { showAllCategories } from './all-category-content';
import Notiflix from 'notiflix';


export async function createBookByCategory(event) {
  try {
    if (event.target.textContent === "All categories") {
      booksSelectors.onlyBooksContent.innerHTML = ''

      showAllCategories()
    }

 else if (!event.target.classList.contains('category-item')) {
    return;
  }

else {const categoryToSearch = event.srcElement.innerText;
  const toSearchData = encodeURIComponent(categoryToSearch); 
  const data = await getCategoryByBook(toSearchData);
      booksSelectors.onlyBooksContent.innerHTML = ''

      // add/remove the active class

//  categorySelectors.categoryItemAll.classList.remove('category-active')
//       event.target.classList.add('category-active');
      




titleColor(categoryToSearch)


    categorySelectors.allCategory.classList.add('category-active');
  const bookList = document.createElement('ul');
  bookList.classList.add('book-list');
  booksSelectors.onlyBooksContent.insertAdjacentElement('beforeend', bookList);

  const markup = getMarkupByCategory(data);
      bookList.innerHTML = markup;
    

 }
  }

  catch (error) {
   Notiflix.Notify.info('Sorry, no books found..');
  }
}




 function titleColor(inputString) {
const words = inputString.split(' ');
const lastWord = words[words.length - 1];
const modifiedString = inputString.replace(lastWord, `<span class="category-name-bold">${lastWord}</span>`);
 booksSelectors.allCategoryName.innerHTML = modifiedString;
}


export async function openAllCategoryHandle(event) {
  try {
    if (!event.target.dataset.title) {
      return
    }
    const categoryName = event.target.dataset.title
    const toSearchData = encodeURIComponent(categoryName);
    const data = await getCategoryByBook(toSearchData);
    booksSelectors.onlyBooksContent.innerHTML = ''

    // Need to add/remove the active class 
    // + check the css for categories

    titleColor(categoryName)


    categorySelectors.allCategory.classList.add('category-active');
    const bookList = document.createElement('ul');
    bookList.classList.add('book-list');
    booksSelectors.onlyBooksContent.insertAdjacentElement('beforeend', bookList);

    const markup = getMarkupByCategory(data);
    bookList.innerHTML = markup;

  }
  catch (error) {
    Notiflix.Notify.info('Sorry, no books found..');
  }
}