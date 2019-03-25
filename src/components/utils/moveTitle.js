/**
 * Двигает заголовок, взависимости от прогресса слайдера
 * @param {DOMelem} elm
 * @param {number} totalSlide
 * @param {number} currentSlide
 * @param {number} prevSlide
 * @param {func} isLast
 */
export default (
  elm,
  totalSlide,
  currentSlide,
  prevSlide,
  isLast,
  rowLength = 0
) => {
  if (currentSlide === null || prevSlide === null || currentSlide === 0) return;

  const coords = elm.getBoundingClientRect();
  const width = coords.right - coords.left;
  const step = width / (totalSlide + rowLength);
  const newTranslateX =
    currentSlide > prevSlide ? coords.left - step : coords.left + step;

  // TODO: remove
  // console.log('moveOld: ' + prevSlide)
  // console.log('moveNew: ' + currentSlide)

  elm.style.cssText = `transform: translateX(${newTranslateX}px)`;
};
