import { selectors } from './basket-selectors';

export function shopCardMarkup(bookData) {
  const cardItem = bookData
    .map(() => {
      `<li class="shopping-item">
          <div class="shopping-list-item">
            <div class="shopping-book-overlay">
              <img
                class="shopping-book-img"
                src="${bookData.book_image}"
                alt="book"
                width="100"
                height="142"
              />

              <p class="shopping-book-overlay-text">quick view</p>
            </div>

            <div class="shopping-item-container">
              <h3 class="${bookData.title}</h3>

              <p class="shopping-book-category-text">${list_name}</p>

              <p class="shopping-book-description">
              ${description}
              </p>

              <p class="shopping-book-author">${bookData.author}</p>

              <div class="shopping-link-wrap">
                <a
                  href=""
                  class="shopping-link"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  <img
                    class="shopping-img-amazon"
                    src="./img/images/amazon-1x.png"
                    alt="amazon"
                    width="32"
                    height="11"
                  />
                </a>

                <a
                  href=""
                  class="shopping-link"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                  ><img
                    class="shopping-img-book"
                    src="./img/images/book-1x.png"
                    alt="book"
                    width="16"
                    height="16"
                  />
                </a>
              </div>
            </div>
          </div>
          <button class="shopping-delete-btn" type="button">
            <svg class="shopping-delete-btn-icon" width="16" height="16">
              <use href="./img/icons/symbol-defs.svg#icon-delete"></use>
            </svg>
          </button>
        </li>`;
    })
    .join('');
  selectors.ShopUlEl.insertAdjacentHTML('beforeend', cardItem);
  return cardItem;
}

// let currentPage = 1;

// let options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '200px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);
// observer.observe(selectors.target);
// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       shopCardMarkup(evt);
//       if (saveCardArr.length) {
//         observer.unobserve(selectors.target);
//       }
//     }
//   });
// }

export function onErrorStubMarkup() {
  const stubItem = `<div class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      <img
        class="shopping-error-img"
        src="./img/images/oooops-mob-1x.png"
        alt="books"
        width="265"
        height="198"
      />
    </div>`;
  selectors.ShopStubEl.innerHTML = stubItem;
}
