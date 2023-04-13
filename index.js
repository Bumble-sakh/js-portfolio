const projects = [
  {
    name: 'RS Lang',
    description: 'Приложение для изучения английских слов',
    type: 'App',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'SCC', 'SCSS'],
    image: './assets/rs-lang.webp',
    deploy: 'https://rslang-bumble-sakh.netlify.app/#/',
    source: 'https://github.com/RSS-Team-Five/RSLang',
  },
  {
    name: 'Portfolio',
    description: 'Лэндинг для фотографа',
    type: 'Landing',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/portfolio.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/portfolio/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFEPRESCHOOL/tree/portfolio',
  },
  {
    name: 'Shelter',
    description: 'Лэндинг приюта для животных',
    type: 'Landing',
    stack: ['JavaScript', 'HTML', 'SCC', 'SCSS'],
    image: './assets/shelter.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFE2022Q1/shelter/pages/main/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/shelter',
  },
  {
    name: 'Eco sounds',
    description: 'Приложение для релакса',
    type: 'App',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/eco-sounds.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/eco-sounds/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/eco-sounds',
  },
  {
    name: 'Audio player',
    description: 'Аудио плеер',
    type: 'App',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/audio-player.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/audio-player/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/audio-player',
  },
  {
    name: 'Image gallery',
    description: 'Галерея изображений',
    type: 'App',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/image-gallery.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/image-gallery/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/image-gallery',
  },
  {
    name: 'E-Shop',
    description: 'Витрина интернет магазина',
    type: 'App',
    stack: ['JavaScript', 'TypeScript', 'HTML', 'SCC', 'SCSS'],
    image: './assets/online-store.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFE2022Q1/online-store/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/online-store',
  },
  {
    name: 'Tic tac toe',
    description: 'Крестики нолики',
    type: 'Game',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/tic-tac-toe.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/tic-tac-toe/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/tic-tac-toe',
  },
  {
    name: 'Minesweeper',
    description: 'Сапер',
    type: 'Game',
    stack: ['JavaScript', 'HTML', 'SCC'],
    image: './assets/minesweeper.webp',
    deploy: 'https://rolling-scopes-school.github.io/bumble-sakh-JSFEPRESCHOOL/minesweeper/',
    source: 'https://github.com/rolling-scopes-school/bumble-sakh-JSFE2022Q1/tree/minesweeper',
  },
];

const slider = document.querySelector('.swiper-wrapper');

projects.forEach((project) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');
  slide.innerHTML = `
    <a href="${project.deploy}" target="_blank">
      <img class="image" src="${project.image}" alt="${project.name}">
    </a>
`;

  slider.append(slide);
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  // effect: 'slide',
  effect: 'cube',
  // effect: 'cards',

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.navigation.nextEl[0].style.right = 'var(--swiper-navigation-sides-offset, -40px)';
swiper.navigation.prevEl[0].style.left = 'var(--swiper-navigation-sides-offset, -40px)';

console.log(swiper.pagination);

swiper.pagination.el.style.bottom = 'var(--swiper-pagination-bottom,-30px)';
