/**
 * Двигает заголовок, взависимости от прогресса слайдера
 * @param {DOMelem} elm
 * @param {number} totalSlide
 * @param {number} currentSlide
 * @param {number} prevSlide
 * @param {boolean} isLast
 * @param {number} modifier для корректировки шага
 */
export default (
  elm,
  totalSlide: number,
  currentSlide: number,
  prevSlide: number,
  isLast: boolean,
  modifier = 0
) => {
  if (currentSlide === null || prevSlide === null || currentSlide === 0 && prevSlide === 0) return;

  const coords = elm.getBoundingClientRect();
  const width = coords.right - coords.left;
  const step = width / (totalSlide + modifier);

  const toLeft = () => coords.left - step * (currentSlide - prevSlide);
  const toRight = () => coords.left + step * (prevSlide - currentSlide);

  const newTranslateX =
    currentSlide > prevSlide ? toLeft() : toRight();

  // TODO: remove
  // console.log('moveOld: ' + prevSlide)
  // console.log('moveNew: ' + currentSlide)

  elm.style.cssText = `transform: translateX(${newTranslateX}px)`;
};
