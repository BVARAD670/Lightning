export const BASE_PATH = (() => {
  return `${window.location.protocol}//${window.location.host}`;
})();
/**
 * Fonts
 *
 * Contains global font style information to easily maintain consistency throughout components.
 */

const FONT_BASE_URL = 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-standard-optimized';
const FONT_BROWN_BASE_URL = 'https://static.cimcontent.net/common-web-assets/fonts/xfinity-brown-optimized';
/**
 * Establishes the Xfinity Standard Font Family
 */
const XFINITY_STANDARD = {
  light: {
    family: 'XfinityStandardLight',
    url: `${FONT_BASE_URL}/xfinitystandard-light.woff`,
    descriptors: {}
  },
  thin: {
    family: 'XfinityStandardThin',
    url: `${FONT_BASE_URL}/xfinitystandard-thin.woff`,
    descriptors: {}
  },
  regular: {
    family: 'XfinityStandardRegular',
    url: `${FONT_BASE_URL}/xfinitystandard-regular.woff`,
    descriptors: {}
  },
  medium: {
    family: 'XfinityStandardMedium',
    url: `${FONT_BASE_URL}/xfinitystandard-medium.woff`,
    descriptors: {}
  },
  bold: {
    family: 'XfinityStandardBold',
    url: `${FONT_BASE_URL}/xfinitystandard-bold.woff`,
    descriptors: {}
  },
  boldBrown: {
    family: 'XfinityBrownBold',
    url: `${FONT_BROWN_BASE_URL}/xfinitybrown-bold.woff`,
    descriptors: {}
  }
};

const CEA_FONTS = {
  cea_casual: {
    family: 'cea_casual',
    url: `${BASE_PATH}/fonts/cea_casual.ttf`
  },
  cea_mono_sans: {
    family: 'cea_mono_sans',
    url: `${BASE_PATH}/fonts/cea_mono_sans.ttf`
  },
  cea_mono_serif: {
    family: 'cea_mono_serif',
    url: `${BASE_PATH}/fonts/cea_mono_serif.ttf`
  },
  cea_prop_sans: {
    family: 'cea_prop_sans',
    url: `${BASE_PATH}/fonts/cea_prop_sans.ttf`
  },
  cea_prop_serif: {
    family: 'cea_prop_serif',
    url: `${BASE_PATH}/fonts/cea_prop_serif.ttf`
  },
  cea_cursive: {
    family: 'cea_cursive',
    url: `${BASE_PATH}/fonts/cea_script.ttf`
  },
  cea_small_caps: {
    family: 'cea_small_caps',
    url: `${BASE_PATH}/fonts/cea_small_caps.ttf`
  }
};

/**
 * Used to pair font style names with proper weights.
 */
export const FONTS = [
  XFINITY_STANDARD.light,
  XFINITY_STANDARD.thin,
  XFINITY_STANDARD.regular,
  XFINITY_STANDARD.medium,
  XFINITY_STANDARD.bold,
  XFINITY_STANDARD.boldBrown
];
export const PLAYER_FONTS = [
  CEA_FONTS.cea_casual,
  CEA_FONTS.cea_cursive,
  CEA_FONTS.cea_mono_sans,
  CEA_FONTS.cea_mono_serif,
  CEA_FONTS.cea_prop_sans,
  CEA_FONTS.cea_prop_serif,
  CEA_FONTS.cea_small_caps
];

const TEXT_OVERFLOW_ATTRIBUTES = {
  textOverflow: 'ellipsis',
  maxLinesSuffix: '...'
};

/**
 * Used to pair a font styles with the appropriate size to be used inside specific components.
 *
 * Typically each one just contains the fontFace, fontSize and when needed the lineHeight.
 *
 * If you want to use one of these styles but they're missing a lineHeight try adding it here
 * vs. making a new category.
 *
 * Sort by font weight (light, regular, medium, bold) and within each weight by font size
 */
export const TYPESCALE = {
  light20: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 20
  },

  light24: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 24
  },

  light28: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 28,
    lineHeight: 36
  },

  light30: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 30
  },

  light32: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 32
  },

  light36: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 36,
    lineHeight: 45
  },

  light40: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 40
  },

  light42: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 42
  },

  light48: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 48
  },

  light52: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 52
  },

  light63: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.light.family,
    fontSize: 63
  },
  thin18: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 18
  },
  thin24: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 24
  },
  thin30: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 30
  },
  thin32: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 32
  },
  thin36: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 36,
    lineHeight: 50
  },
  thin40: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 40
  },
  thin100: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.thin.family,
    fontSize: 100
  },

  regular16: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 16,
    lineHeight: 20
  },
  regular18: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 18
  },
  regular21: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 21
  },
  regular24: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 24,
    lineHeight: 30
  },

  regular26: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 26,
    lineHeight: 30
  },

  regular28: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 28,
    lineHeight: 36
  },

  regular30: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 30
  },

  regular32: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 32
  },

  regular36: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 36,
    lineHeight: 45
  },

  regular40: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.regular.family,
    fontSize: 40
  },

  medium18: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 18,
    lineHeight: 25
  },

  medium20: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 20,
    lineHeight: 25
  },

  medium24: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 24,
    lineHeight: 30
  },

  medium28: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 28
  },

  medium30: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 30
  },

  medium32: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 32,
    lineHeight: 48
  },

  medium36: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 36,
    lineHeight: 45
  },
  medium38: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.medium.family,
    fontSize: 38
  },

  bold16: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 16
  },

  bold20: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 20
  },

  bold22: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 22
  },

  bold24: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 24
  },

  bold30: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 30
  },

  bold32: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 32
  },
  boldbrown36: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.boldBrown.family,
    fontSize: 36
  },
  bold48: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 48
  },
  boldBrown56: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.boldBrown.family,
    fontSize: 56
  },
  bold70: {
    ...TEXT_OVERFLOW_ATTRIBUTES,
    fontFace: XFINITY_STANDARD.bold.family,
    fontSize: 70
  }
};
