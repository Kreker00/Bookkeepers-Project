const btnBurger = document.querySelector('#openBurger');
btnBurger.addEventListener('click', openPopup);
const btnClose = document.querySelector('#closeBurger');
btnClose.addEventListener('click', closePopup);

function openPopup() {
  document.getElementById('overlay').style.display = 'flex';
  //   document.getElementById('popup').style.display = 'block';
  toggleEl('.overlay');
  toggleEl('#openBurger');
  toggleEl('#closeBurger');
  //   console.log('ghhg');
}
function toggleEl(selector) {
  const element = document.querySelector(selector);
  element.classList.toggle('active');
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  //   document.getElementById('popup').style.display = 'none';
  toggleEl('.overlay');
  toggleEl('#openBurger');

  toggleEl('#closeBurger');
}

// -=-==-=---=-=-=-=-=-=-= SCROLL=-=-=-=-=--=-=-=-=-===

document.addEventListener('DOMContentLoaded', function () {
  let html = document.querySelector('html');
  let openBurgerButton = document.querySelector('#openBurger');
  let closeBurgerButton = document.querySelector('#closeBurger');

  openBurgerButton.addEventListener('click', function () {
    html.classList.add('unscroll');
  });

  closeBurgerButton.addEventListener('click', function () {
    html.classList.remove('unscroll');
  });
});

// =--=-=-=-==================================================================

// // функция для установки заданной темы/цветовой схемы
// function setTheme(themeName) {
//   localStorage.setItem('theme', themeName);
//   document.documentElement.className = themeName;
// }

// // функция переключения между светлой и темной темой
// function toggleTheme() {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-light');
//   } else {
//     setTheme('theme-dark');
//   }
// }

// // Немедленно вызванная функция для установки темы при начальной загрузке

// (function () {
//   if (localStorage.getItem('theme') === 'theme-dark') {
//     setTheme('theme-dark');
//     document.getElementById('slider').checked = false;
//   } else {
//     setTheme('theme-light');
//     document.getElementById('slider').checked = true;
//   }
// })();

// -----------------
// '.switch-btn'.click(function () {
//   $(this).toggleClass('switch-on');
// });

// $('.switch-btn').click(function () {
//   $(this).toggleClass('switch-on');
//   if ($(this).hasClass('switch-on')) {
//     $(this).trigger('on.switch');
//   } else {
//     $(this).trigger('off.switch');
//   }
// });

// $(function () {
//   $('.switch-btn').click(function (e, changeState) {
//     if (changeState === undefined) {
//       $(this).toggleClass('switch-on');
//     }
//     if ($(this).hasClass('switch-on')) {
//       $(this).trigger('on.switch');
//     } else {
//       $(this).trigger('off.switch');
//     }
//   });

//   $('.switch-btn').on('on.switch', function () {
//     console.log('Кнопка переключена в состояние on');
//   });

//   $('.switch-btn').on('off.switch', function () {
//     console.log('Кнопка переключена в состояние off');
//   });

//   $('.switch-btn').each(function () {
//     $(this).triggerHandler('click', false);
//   });
// });

// --------------

const themePreference = () => {
  const hasLocalStorage = localStorage.getItem('theme');

  let supports = false;
  let theme = undefined;

  if (hasLocalStorage === 'light') {
    theme = 'light';
  }
  if (hasLocalStorage === 'dark') {
    theme = 'dark';
  }

  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'dark';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: light)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'light';
    supports = true;
  }
  if (window.matchMedia(`(prefers-color-scheme: no-preference)`).matches) {
    theme = hasLocalStorage ? hasLocalStorage : 'none';
    supports = true;
  }

  return { supports, theme };
};

// addFooter = () => {
//   const parent = document.querySelector('.card');
//   const footer = document.createElement('footer');

//   const html = `
//     <p class="footer__p"><span aria-label="checkmark:">✔</span> Your system supports the CSS 5 Media Query <code>prefers-color-scheme</code>.</p>
//   `;

//   footer.classList.add('card__footer', 'footer');
//   footer.innerHTML = html;

//   parent.appendChild(footer);
// };

document.addEventListener(
  'DOMContentLoaded',
  e => {
    console.clear();

    const userThemePreference = themePreference();
    const toggle = document.querySelector('[js-toggle]');
    const clearStorage = document.querySelector('[js-clearStorage]');
    const html = document.documentElement;

    const setTheme = () => {
      switch (userThemePreference.theme) {
        case 'dark':
          toggle.checked = true;
          html.classList.add('dark');
          html.classList.remove('light');
          break;
        case 'light':
          toggle.checked = false;
          html.classList.remove('dark');
          html.classList.add('light');
          break;
      }
    };

    setTheme();

    if (userThemePreference.supports) {
      // addFooter();
    }

    // clearStorage.addEventListener(
    //   'click',
    //   e => {
    //     localStorage.removeItem('theme');
    //     console.info('local storage cleared');
    //   },
    //   false
    // );

    toggle.addEventListener(
      'click',
      e => {
        if (toggle.checked) {
          html.classList.add('dark');
          html.classList.remove('light');
          localStorage.setItem('theme', 'dark');
        } else {
          html.classList.remove('dark');
          html.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      },
      false
    );
  },
  false
);

// --------

// class ThemeSwitcher {
//   constructor(configuration) {
//     const defaultConfig = {
//       targetElementClass: 'application',
//       triggerButtonClass: 'theme-switcher-button',
//       triggerButtonActiveClass: 'theme-switcher-button-active',
//       darkThemeClass: 'dark-theme',
//       themeLocalStorageID: 'theme',
//       onChangeTheme: () => {},
//     };

//     this.activeTheme = 'light';
//     this.options = Object.assign(defaultConfig, configuration);

//     this.initialization();
//   }

//   initialization() {
//     this.defineElements();
//     this.applyCurrentTheme();
//     this.switchThemeHandler();
//     this.registerMatchMediaListener();
//   }

//   defineElements() {
//     const { triggerButtonClass, targetElementClass } = this.options;

//     this.triggerButton = document.querySelector(`.${triggerButtonClass}`);
//     this.targetElement = document.querySelector(`.${targetElementClass}`);
//   }

//   onChangeThemeHandler() {
//     const { onChangeTheme } = this.options;

//     if (onChangeTheme) {
//       return onChangeTheme(this);
//     }
//   }

//   setDarkTheme() {
//     //prettier-ignore
//     const {
//                darkThemeClass,
//                themeLocalStorageID,
//                triggerButtonActiveClass
//           } = this.options;

//     localStorage.setItem(themeLocalStorageID, 'dark');

//     this.activeTheme = 'dark';
//     this.targetElement.classList.add(darkThemeClass);
//     this.triggerButton.classList.add(triggerButtonActiveClass);

//     this.onChangeThemeHandler();
//   }

//   setLightTheme() {
//     //prettier-ignore
//     const {
//                darkThemeClass,
//                themeLocalStorageID,
//                triggerButtonActiveClass
//           } = this.options;

//     localStorage.setItem(themeLocalStorageID, 'light');

//     this.activeTheme = 'light';
//     this.targetElement.classList.remove(darkThemeClass);
//     this.triggerButton.classList.remove(triggerButtonActiveClass);

//     this.onChangeThemeHandler();
//   }

//   setPreferredTheme() {
//     const conditionID1 = window.matchMedia;
//     const conditionID2 = window.matchMedia(
//       '(prefers-color-scheme: dark)'
//     ).matches;

//     conditionID1 && conditionID2 ? this.setDarkTheme() : this.setLightTheme();
//   }

//   applyCurrentTheme() {
//     //prettier-ignore
//     const { themeLocalStorageID } = this.options;

//     if (localStorage.getItem(themeLocalStorageID) != null) {
//       this.activeTheme = localStorage.getItem(themeLocalStorageID);

//       switch (localStorage.getItem(themeLocalStorageID)) {
//         case 'light':
//           return this.setLightTheme();
//         case 'dark':
//           return this.setDarkTheme();
//         default:
//           return this.setPreferredTheme();
//       }
//     } else {
//       return this.setPreferredTheme();
//     }
//   }

//   switchThemeHandler() {
//     this.triggerButton.addEventListener('click', () => {
//       switch (this.activeTheme) {
//         case 'light':
//           return this.setDarkTheme();
//         case 'dark':
//           return this.setLightTheme();
//       }
//     });
//   }

//   registerMatchMediaListener() {
//     const prefersColorScheme = window.matchMedia(
//       '(prefers-color-scheme: dark)'
//     );

//     prefersColorScheme.addEventListener(
//       'change',
//       this.applyCurrentTheme.bind(this)
//     );
//   }
// }
