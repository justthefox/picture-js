import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.js-feedback-slider-item', '', '.js-main-prev', '.js-main-next');
  sliders('.js-main-slider-item', 'vertical');
});
