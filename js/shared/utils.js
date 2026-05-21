'use strict';

export const $ = (selector) =>
  document.querySelector(selector);

export const $$ = (selector) =>
  document.querySelectorAll(selector);

export const onClick = (selector, fn) => {
  const element = document.querySelector(selector);

  if (element) {
    element.addEventListener('click', fn);
  }
};
