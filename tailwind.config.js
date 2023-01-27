const {
  fontSize,
  lineHeights,
  white,
  black,
  text,
  warning,
  background,
  stroke,
  neutral,
  primary,
  danger,
  success,
  secondary1,
  secondary2,
  secondary3,
  secondary4,
  secondary5,
  secondary6,
  secondary7,
  secondary8,
  letterSpacing,
} = require('./tokens.json');

for (var key in fontSize) {
  let value = fontSize[key].value;
  value = parseInt(value, 10);
  let remValue = `${value / 16}rem`;
  fontSize[key].value = remValue;
}

for (var linekey in lineHeights) {
  let value = lineHeights[linekey].value;
  value = parseInt(value, 10);
  let remValue = `${value / 16}rem`;
  lineHeights[linekey].value = remValue;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,mdx,html,css}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: white.value,
      black: black.value,
      warning: {
        100: warning[100].value,
        400: warning[400].value,
        600: warning[600].value,
        800: warning[800].value,
      },
      text: {
        heading: text.heading.value,
        body: text.body.value,
        danger: text.danger.value,
        success: text.success.value,
        warning: text.warning.value,
        primaryLight: text.primaryLight.value,
        primaryMedium: text.primaryMedium.value,
        primaryDark: text.primaryDark.value,
        neutralLight: text.neutralLight.value,
        neutralMedium: text.neutralMedium.value,
      },
      textButtonPrimary: {
        buttonDanger: text.button.danger.value,
        buttonPrimaryDefault:
          text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryHover:
          text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryActive:
          text.button.primary.defaultHoverActiveDisabled.value,
        buttonPrimaryDisabled:
          text.button.primary.defaultHoverActiveDisabled.value,
      },
      textButtonSecondary: {
        buttonSecondaryDefault: text.button.secondary.defaultHoverActive.value,
        buttonSecondaryDisabled: text.button.secondary.disabled.value,
      },
      textButtonTeritary: {
        buttonTeritaryDefault: text.button.tertiary.defaultHoverActive.value,
        buttonTeritaryDisabled: text.button.tertiary.disabled.value,
      },
      textButtonLink: {
        buttonLinkDefault: text.button.link.defaultActive.value,
        buttonLinkHover: text.button.link.hover.value,
        buttonLinkDisabled: text.button.link.disabled.value,
      },
      background: {
        success: background.success.value,
        danger: background.danger.value,
        white: background.white.value,
      },
      backgroundNeutral: {
        neutralLight: background.neutralLight.value,
        neutralMedium: background.neutralMedium.value,
        neutralDark: background.neutralDark.value,
        neutralExtraDark: background.neutralExtraDark.value,
      },
      backgroundPrimary: {
        primaryExtraLight: background.primaryExtraLight.value,
        primaryLight: background.primaryLight.value,
        primaryMedium: background.primaryMedium.value,
        primaryDark: background.primaryDark.value,
        primaryExtraDark: background.primaryExtraDark.value,
      },
      backgroundButtonPrimary: {
        buttonPrimaryDefault: background.button.primary.defaultActive.value,
        buttonPrimaryHover: background.button.primary.hover.value,
        buttonPrimaryActive: background.button.primary.defaultActive.value,
        buttonPrimaryDisabled: background.button.primary.disabled.value,
      },
      backgroundButtonSecondary: {
        buttonSecondaryDefault:
          background.button.secondary.defaultActiveDisabled.value,
        buttonSecondaryHover: background.button.secondary.hover.value,
        buttonSecondaryActive:
          background.button.secondary.defaultActiveDisabled.value,
        buttonSecondaryDisabled:
          background.button.secondary.defaultActiveDisabled.value,
      },
      backgroundButtonTertiary: {
        buttonTertiaryDefault:
          background.button.tertiary.defaultActiveDisabled.value,
        buttonTertiaryHover: background.button.tertiary.hover.value,
        buttonTertiaryActive:
          background.button.tertiary.defaultActiveDisabled.value,
        buttonTertiaryDisabled:
          background.button.tertiary.defaultActiveDisabled.value,
      },
      stroke: {
        dividerLight: stroke.dividerLight.value,
        dividerDark: stroke.dividerDark.value,
        focused: stroke.focused.value,
        borderFocused: stroke.border.focused.value,
        borderDanger: stroke.border.danger.value,
        icon: stroke.icon.value,
        borderDefault: stroke.border.default.value,
        borderLight: stroke.border.light.value,
        primary: stroke.border.focused.value,
        secondary: primary[800].value,
      },
      strokeButton: {
        buttonSecondaryGreyDisabled: stroke.button.secondaryGrey.disabled.value,
        buttonSecondaryGreyDefault:
          stroke.button.secondaryGrey.defaultHoverActive.value,
        buttonSecondaryGreyHover:
          stroke.button.secondaryGrey.defaultHoverActive.value,
        buttonSecondaryGreyActive:
          stroke.button.secondaryGrey.defaultHoverActive.value,
      },
      neutral: {
        100: neutral[100].value,
        200: neutral[200].value,
        300: neutral[300].value,
        400: neutral[400].value,
        500: neutral[500].value,
        600: neutral[600].value,
        700: neutral[700].value,
        800: neutral[800].value,
      },
      primary: {
        100: primary[100].value,
        200: primary[200].value,
        400: primary[400].value,
        600: primary[600].value,
        800: primary[800].value,
      },
      danger: {
        100: danger[100].value,
        400: danger[400].value,
        600: danger[600].value,
        800: danger[800].value,
      },
      success: {
        100: success[100].value,
        400: success[400].value,
        600: success[600].value,
        800: success[800].value,
      },
      secondary1: {
        100: secondary1[100].value,
        400: secondary1[400].value,
        600: secondary1[600].value,
        800: secondary1[800].value,
      },
      secondary2: {
        100: secondary2[100].value,
        400: secondary2[400].value,
        600: secondary2[600].value,
        800: secondary2[800].value,
      },
      secondary3: {
        100: secondary3[100].value,
        400: secondary3[400].value,
        600: secondary3[600].value,
        800: secondary3[800].value,
      },
      secondary4: {
        100: secondary4[100].value,
        400: secondary4[400].value,
        600: secondary4[600].value,
        800: secondary4[800].value,
      },
      secondary5: {
        100: secondary5[100].value,
        400: secondary5[400].value,
        600: secondary5[600].value,
        800: secondary5[800].value,
      },
      secondary6: {
        100: secondary6[100].value,
        400: secondary6[400].value,
        600: secondary6[600].value,
        800: secondary6[800].value,
      },
      secondary7: {
        100: secondary7[100].value,
        400: secondary7[400].value,
        600: secondary7[600].value,
        800: secondary7[800].value,
      },
      secondary8: {
        100: secondary8[100].value,
        400: secondary8[400].value,
        600: secondary8[600].value,
        800: secondary8[800].value,
      },
    },
    boxShadow: {
      'none': '0 0 0 rgb(0,0,0)',
      'xs': '0px 1px 4px rgba(16, 24, 40, 0.05)',
      'xs-focused4px-primary':
        '0px 0px 0px 4px rgba(245, 252, 252, 1), 0px 1px 2px rgba(16, 24, 40, 0.05)',
      'xs-focused4px-grey':
        '0px 0px 0px 4px rgba(248, 249, 249, 1), 0px 1px 2px rgba(16, 24, 40, 0.05)',
      'xsFocused4pxError':
        '0px 1px 2px rgba(16, 24, 40, 0.05),0px 0px 0px 4px rgba(254, 228, 226, 1)',
      'sm': '0px 0px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px rgba(16, 24, 40, 0.1)',
      'sm-focused4px-primary': '0px 0px 0pxrgba(245, 252, 252, 1)',
      'sm-focused4px-grey': '0px 0px 0px 4px rgba(242, 244, 247, 1)',
      'md': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      'lg': '0px 4px 6px -2px rgba(16, 24, 40, 0.05), 0px 12px 16px -4px rgba(16, 24, 40, 0.1)',
      'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.04), 0px 20px 24px -4px rgba(16, 24, 40, 0.1)',
      '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.25)',
      '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.2)',
      '4pxPrimary100': '0px 0px 0px 4px rgba(245, 252, 252, 1)',
      '4pxGrey100': '0px 0px 0px 4px rgba(248, 249, 249, 1)',
      '4pxError100': '0px 0px 0px 4px rgba(255, 240, 241, 1)',
      '4pxGrey600': '0px 0px 0px 4px rgba(71, 84, 103, 1)',
      '4pxPrimary200': '0px 0px 0px 4px rgba(218, 237, 237, 1)',
    },
    letterSpacing: {
      widest: '0.125rem',
      default: letterSpacing[0].value,
      closed: letterSpacing.closed.value,
      extraSpaced: letterSpacing.extraWide.value,
      mediumSpaced: letterSpacing.wide.value,
    },
    extend: {
      fontSize: {
        12: fontSize['0'].value,
        14: fontSize['14'].value,
        16: fontSize['16'].value,
        18: fontSize['18'].value,
        20: fontSize['20'].value,
        24: fontSize['24'].value,
        30: fontSize['30'].value,
        36: fontSize['36'].value,
        48: fontSize['48'].value,
        60: fontSize['60'].value,
        72: fontSize['72'].value,
        96: fontSize['96'].value,
        130: fontSize['130'].value,
      },
      lineHeight: {
        0: 0,
        24: lineHeights[24].value,
        28: lineHeights[28].value,
        32: lineHeights[32].value,
        36: lineHeights[36].value,
        40: lineHeights[40].value,
        44: lineHeights[44].value,
        60: lineHeights[60].value,
        72: lineHeights[72].value,
        76: lineHeights[76].value,
        96: lineHeights[96].value,
      },
      margin: {
        1.5: '0.375rem',
        2.5: '0.625rem',
        45: '11.25rem',
      },
      padding: {
        0.5: '0.125rem',
        3.5: '0.875rem',
        4.5: '1.125rem',
        10.5: '2.625rem',
      },
      width: {
        50: '12.5rem',
        80: '20rem',
        85.7: '21.4375rem',
        93.7: '23.4375rem',
      },
      minWidth: {
        60: '15rem',
      },
      height: {
        50: '12.5rem',
        64.5: '16.125rem',
        94: '23.5rem',
        110: '27.5rem',
        114.5: '28.625rem',
        128: '32rem',
        148: '37rem',
      },
      maxWidth: {
        70: '17.5rem',
        85.75: '21.4375rem',
        90: '22.5rem',
        96: '24rem',
        148: '37rem',
        200: '50rem',
        252: '63rem',
      },
      maxHeight: {
        47: '11.75rem',
        57: '14.25rem',
        64: '16rem',
        70: '17.5rem',
        85.75: '21.4375rem',
        98: '24.5rem',
        150: '37.5rem',
      },
      spacing: {
        2.75: '0.6875rem',
        3.5: '0.875rem',
        4.75: '1.1875rem',
        18: '4.5rem',
      },
      zIndex: {
        1: '1',
      },
      strokeWidth: {
        0.375: '0.09375rem',
        0.4175: '0.104375rem',
      },
    },
    fontFamily: {
      serif: ['Helvetica-Now-Display', 'Roboto', 'sans-serif'],
      sans: ['SpaceGroteskRegular', 'Roboto', 'sans-serif'],
      spaceGroteskBold: ['SpaceGroteskBold', 'Roboto', 'sans-serif'],
      spaceGroteskRegular: ['SpaceGroteskRegular', 'Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};
