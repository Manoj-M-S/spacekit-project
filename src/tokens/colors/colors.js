let tokens = require('../../../token.json');

const designTokens = {
  theme: {
    colors: {
      White: tokens.white.value,
      Black: tokens.black.value,
      Neutral: {
        100: tokens.neutral[100].value,
        200: tokens.neutral[200].value,
        300: tokens.neutral[300].value,
        400: tokens.neutral[400].value,
        500: tokens.neutral[500].value,
        600: tokens.neutral[600].value,
        700: tokens.neutral[700].value,
        800: tokens.neutral[800].value,
      },
      Primary: {
        100: tokens.primary[100].value,
        200: tokens.primary[200].value,
        400: tokens.primary[400].value,
        600: tokens.primary[600].value,
        800: tokens.primary[800].value,
      },
      Danger: {
        100: tokens.danger[100].value,
        400: tokens.danger[400].value,
        600: tokens.danger[600].value,
        800: tokens.danger[800].value,
      },
      Warning: {
        100: tokens.warning[100].value,
        400: tokens.warning[400].value,
        600: tokens.warning[600].value,
        800: tokens.warning[800].value,
      },
      Success: {
        100: tokens.success[100].value,
        400: tokens.success[400].value,
        600: tokens.success[600].value,
        800: tokens.success[800].value,
      },
    },
  },
  theme1: {
    colors1: {
      Secondary1: {
        100: tokens.secondary1[100].value,
        400: tokens.secondary1[400].value,
        600: tokens.secondary1[600].value,
        800: tokens.secondary1[800].value,
      },
      Secondary2: {
        100: tokens.secondary2[100].value,
        400: tokens.secondary2[400].value,
        600: tokens.secondary2[600].value,
        800: tokens.secondary2[800].value,
      },
      Secondary3: {
        100: tokens.secondary3[100].value,
        400: tokens.secondary3[400].value,
        600: tokens.secondary3[600].value,
        800: tokens.secondary3[800].value,
      },
      Secondary4: {
        100: tokens.secondary4[100].value,
        400: tokens.secondary4[400].value,
        600: tokens.secondary4[600].value,
        800: tokens.secondary4[800].value,
      },
      Secondary5: {
        100: tokens.secondary5[100].value,
        400: tokens.secondary5[400].value,
        600: tokens.secondary5[600].value,
        800: tokens.secondary5[800].value,
      },
      Secondary6: {
        100: tokens.secondary6[100].value,
        400: tokens.secondary6[400].value,
        600: tokens.secondary6[600].value,
        800: tokens.secondary6[800].value,
      },
      Secondary7: {
        100: tokens.secondary7[100].value,
        400: tokens.secondary7[400].value,
        600: tokens.secondary7[600].value,
        800: tokens.secondary7[800].value,
      },
      Secondary8: {
        100: tokens.secondary8[100].value,
        400: tokens.secondary8[400].value,
        600: tokens.secondary8[600].value,
        800: tokens.secondary8[800].value,
      },
    },
  },
};

module.exports = designTokens;
