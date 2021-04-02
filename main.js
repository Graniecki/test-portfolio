'use strict';

const header = document.querySelector('.header');

header.addEventListener('click', (event) => {
  const target = event.target;
  const { item } = target.dataset;

  if (!target.matches('.header__item') || target.matches('.selected')) {
    return ;
  }

  document.querySelector(`.${item}`).scrollIntoView({ behavior: "smooth" });
});
