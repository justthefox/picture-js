import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders(
    '.js-feedback-slider-item',
    '',
    '.js-main-prev',
    '.js-main-next',
    30000,
  );
  sliders('.js-main-slider-item', 'vertical');
  forms();
});
