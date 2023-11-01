import { categorySelectors } from '../category/category-selectors';
import { createBookByCategory } from './book-by-category';
import {makeAllCategoriesContent} from './all-category-content'



makeAllCategoriesContent();


categorySelectors.categoryList.addEventListener('click', createBookByCategory);

// Need to make listener on the btn