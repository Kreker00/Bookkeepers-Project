import { selectors } from './basket-selectors';

export function shopCardMarkup(bookData) {
  const cardItem = bookData
    .map(book => {
      return `<li class="shopping-item">
      <div class="shopping-list-item">
        <div class="shopping-book-overlay">
          <img
            class="shopping-book-img"
            src="${book.book_image}"
            alt="${book.title}"
            width="100"
            height="142"
          />

      <p class="shopping-book-overlay-text">quick view</p>
    </div>

    <div class="shopping-item-container">
      <h3 class="shopping-book-title">${book.title}</h3>

      <p class="shopping-book-category-text">${book.list_name}</p>

      <p class="shopping-book-description">${book.description}</p>

      <p class="shopping-book-author">${book.author}</p>

      <div class="shopping-link-wrap">
        <a
          href="${book.buy_links[0].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture>
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(min-width: 1440px)"
            />
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(min-width: 768px)"
            />
            <source
              srcset="
                ./img/images/amazon-1x.png 1x,
                ./img/images/amazon-2x.png 2x
              "
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-amazon"
              src="./img/images/amazon-1x.png"
              alt="amazon"
              width="32"
              height="11"
            />
          </picture>
        </a>
        <a
          href="${book.buy_links[1].url}"
          target="_blank"
          rel="noopener noreferrer"
          class="shopping-link"
        >
          <picture>
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(min-width: 1440px)"
            />
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(min-width: 768px)"
            />
            <source
              srcset="./img/images/book-1x.png 1x, ./img/images/book-2x.png 2x"
              media="(max-width: 768px)"
            />
            <img
              class="shopping-img-book"
              src="./img/images/book-1x.png"
              alt="book"
              width="11"
              height="11"
            />
          </picture>
        </a>
      </div>
    </div>
  </div>
  <button class="shopping-delete-btn" type="button">
    <svg class="shopping-delete-btn-icon" width="16" height="16">
      <use href="./img/icons/symbol-defs.svg#icon-delete"></use>
    </svg>
  </button>
</li>
`;
    })
    .join('');

  selectors.ShopUlEl.insertAdjacentHTML('beforeend', cardItem);
}

// let currentPage = 1;

// let options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '200px',
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onLoad, options);
// observer.observe(selectors.targetEl);
// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       currentPage += 1;
//       shopCardMarkup(evt);
//       if (saveCardArr.length) {
//         observer.unobserve(selectors.targetEl);
//       }
//     }
//   });
// }

export function onErrorStubMarkup() {
  const stubItem = `<li class="shopping-error-wrap">
      <p class="shopping-error-text">
        This page is empty, add some books and proceed to order.
      </p>
      
        <picture>
          <source
            srcset="
              ./img/images/oooops-tab-1x.png 1x,
              ./img/images/oooops-tab-2x.png 2x 
            "
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ./img/images/oooops-tab-1x.png 1x,
              ./img/images/oooops-tab-2x.png 2x
            "
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ./img/images/oooops-mob-1x.png 1x,
              ./img/images/oooops-mob-2x.png 2x
            "
            media="(max-width: 768px)"
          />
          <img
        class="shopping-error-img"
        src="./img/images/oooops-mob-1x.png"
        alt="books"
        width="265"
        height="198"
      />
        </picture>
    </li>`;
  selectors.ShopStubEl.innerHTML = stubItem;
}
