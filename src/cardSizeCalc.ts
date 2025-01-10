import * as util from '@/util';

export const legacyCardSizeCalc: CardSizeCalcCallable = (size, card) => {
  if (typeof card.size !== 'object') {
    throw new Error('For legacy cards, card.size must be an object');
  }
  const result = {} as CardSizeCalcResult;
  const ratio = card.size.ratio.height / card.size.ratio.width;
  const widthRange: NumberRange = {
    min: Math.min(card.size.width.min || Infinity, (card.size.height.min || Infinity) / ratio),
    max: Math.max(card.size.width.max || 0, (card.size.height.max || 0) / ratio),
  };
  if (widthRange.min && widthRange.min !== Infinity && size.width < widthRange.min) {
    result.width = widthRange.min;
  } else if (widthRange.max && size.width > widthRange.max) {
    result.width = widthRange.max;
  } else {
    result.width = Math.min(size.width, size.height / ratio);
  }
  result.height = result.width * ratio;

  card.size.linesPerColumn &&
    (result.fontsize = `${util.round(result.height / card.size.linesPerColumn)}px`);

  return result;
};
