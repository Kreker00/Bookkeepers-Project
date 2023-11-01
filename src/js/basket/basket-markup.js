export function cardMarkup(evt) {
  const cardItem = evt
    .map(() => {
      `<li class="shopping-item">
          <div class="shopping-list-item">
            <div class="shopping-book-overlay">
              <img
                class="shopping-book-img"
                src="${book_image}"
                alt="book"
                width="100"
                height="142"
              />

              <p class="shopping-book-overlay-text">quick view</p>
            </div>

            <div class="shopping-item-container">
              <h3 class="${title}</h3>

              <p class="shopping-book-category-text">${list_name}</p>

              <p class="shopping-book-description">
              ${description}
              </p>

              <p class="shopping-book-author">${author}</p>

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
  ulShopEl.insertAdjacentHTML('beforeend', cardItem);
}

export function onErrorStubMarkup(evt) {
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
  sectionShopEl.innerHTML = stubItem;
}
