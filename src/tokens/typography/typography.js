let tokens = require('../../../token.json');
const fonts = {
  fontFamily: {
    HelveticaNowDisplay: tokens.fontFamilies['helvetica-now-display'].value,
    SpaceGrotesk: tokens.fontFamilies['space-grotesk'].value,
  },
  fontSizes: {
    0: tokens.fontSize['0'].value,
    1: tokens.fontSize['1'].value,
    2: tokens.fontSize['2'].value,
    3: tokens.fontSize['3'].value,
    4: tokens.fontSize['4'].value,
    5: tokens.fontSize['5'].value,
    6: tokens.fontSize['6'].value,
    7: tokens.fontSize['7'].value,
    8: tokens.fontSize['8'].value,
    9: tokens.fontSize['9'].value,
    10: tokens.fontSize['10'].value,
    11: tokens.fontSize['11'].value,
    12: tokens.fontSize['12'].value,
  },
  fontWeight: {
    displayLight: tokens.fontWeights.displayLight.value,
    displaySemiBold: tokens.fontWeights.displaySemiBold.value,
    displayRegular: tokens.fontWeights.displayRegular.value,
    displayMedium: tokens.fontWeights.displayMedium.value,
    displayBold: tokens.fontWeights.displayBold.value,
    textRegular: tokens.fontWeights.textRegular.value,
    textMedium: tokens.fontWeights.textMedium.value,
    textBold: tokens.fontWeights.textBold.value,
    textRegularItalic: tokens.fontWeights.textRegularItalic.value,
    textMediumItalic: tokens.fontWeights.textMediumItalic.value,
    textBoldItalic: tokens.fontWeights.textBoldItalic.value,
    space_grotesk_0: tokens.fontWeights['space-grotesk-0'].value,
    space_grotesk_1: tokens.fontWeights['space-grotesk-1'].value,
    space_grotesk_2: tokens.fontWeights['space-grotesk-2'].value,
    space_grotesk_3: tokens.fontWeights['space-grotesk-3'].value,
    helvetica_now_display_4:
      tokens.fontWeights['helvetica-now-display-4'].value,
    helvetica_now_display_5:
      tokens.fontWeights['helvetica-now-display-5'].value,
    helvetica_now_display_6:
      tokens.fontWeights['helvetica-now-display-6'].value,
    helvetica_now_display_7:
      tokens.fontWeights['helvetica-now-display-7'].value,
    helvetica_now_display_8:
      tokens.fontWeights['helvetica-now-display-8'].value,
    helvetica_now_display_9:
      tokens.fontWeights['helvetica-now-display-9'].value,
  },
};
module.exports = fonts;
