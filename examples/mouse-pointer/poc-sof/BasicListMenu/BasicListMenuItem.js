import { COLORS } from '../utils/colors.js';
import { BASE_PATH, TYPESCALE } from '../utils/fonts.js';
import lng from '../../../../src/lightning.mjs';

const FOLDER_PATH = '/examples/mouse-pointer/poc-sof/';
const SUBLABEL_COLOR = COLORS.GREY_550;
const INACTIVE_TEXT_COLOR = COLORS.WHITE;
const ACTIVE_TEXT_COLOR = COLORS.BLUE_400;
const DISABLED_TEXT_COLOR = COLORS.GREY_550;
const INACTIVE_BORDER_COLOR = COLORS.GREY_800;
const ACTIVE_BORDER_COLOR = COLORS.WHITE;
const INACTIVE_BORDER_THICKNESS = 1;
const ACTIVE_BORDER_THICKNESS = 4;
const RIGHT_ARROW_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/right-arrow.png`;
const ACTIVE_CHECK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/active-check.png`;
const INACTIVE_CHECK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/inactive-check.png`;
const ACTIVE_LOCK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/active-lock.png`;
const INACTIVE_LOCK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/inactive-lock.png`;
const ACTIVE_UNLOCK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/active-unlock.png`;
const INACTIVE_UNLOCK_IMG = `${BASE_PATH}${FOLDER_PATH}/icons/inactive-unlock.png`;
const DEFAULT_PADDING = 21;
const DEFAULT_SUBLABEL_WIDTH = 750;

export default class BasicListMenuItem extends lng.Component {
  static _template() {
    return {
      w: (w) => w,
      collision: true,
      flex: {
        direction: 'column',
        paddingTop: DEFAULT_PADDING,
        paddingBottom: DEFAULT_PADDING
      },
      InactiveBorders: {
        flexItem: false,
        w: (w) => w,
        h: (h) => h,
        BorderTop: {
          w: (w) => w,
          h: INACTIVE_BORDER_THICKNESS,
          color: INACTIVE_BORDER_COLOR,
          rect: true
        },
        BorderBottom: {
          y: (h) => (h - INACTIVE_BORDER_THICKNESS),
          w: (w) => w,
          h: INACTIVE_BORDER_THICKNESS,
          color: INACTIVE_BORDER_COLOR,
          rect: true
        }
      },
      ActiveBorders: {
        flexItem: false,
        w: (w) => w,
        h: (h) => h,
        visible: false,
        BorderTop: {
          y: -(ACTIVE_BORDER_THICKNESS / 2),
          w: (w) => w,
          h: ACTIVE_BORDER_THICKNESS,
          color: ACTIVE_BORDER_COLOR,
          rect: true
        },
        BorderBottom: {
          y: (h) => (h - (ACTIVE_BORDER_THICKNESS / 2)),
          w: (w) => w,
          h: ACTIVE_BORDER_THICKNESS,
          color: ACTIVE_BORDER_COLOR,
          rect: true
        }
      },
      VerticalAligner: {
        w: (w) => w,
        flex: {
          alignItems: 'center'
        },
        Icon: {
          flexItem: { marginRight: 30 },
          visible: false,
          alpha: 0
        },
        LabelSublabelContainer: {
          flex: { direction: 'column' },
          flexItem: { grow: 1 },

          LabelTextContainer: {
            flex: {},
            flexItem: { grow: 1 },
            Label: {
              text: {
                ...TYPESCALE.regular32,
                textColor: INACTIVE_TEXT_COLOR
              }
            },
            HighlightLabel: {
              text: {
                ...TYPESCALE.regular32,
                textColor: ACTIVE_TEXT_COLOR
              }
            }
          },
          Sublabel: {
            flexItem: { grow: 0 },
            text: {
              ...TYPESCALE.medium24,
              textColor: SUBLABEL_COLOR,
              wordWrap: true,
              wordWrapWidth: DEFAULT_SUBLABEL_WIDTH
            }
          }
        },
        RightContent: {},
        RightArrow: {
          visible: false,
          src: RIGHT_ARROW_IMG
        }
      }
    };
  }

  _init() {
    // focusable defaults to true
    if (this._focusable === undefined) {
      this.focusable = true;
    }
  }

  set action(v) {
    this._action = v;
  }

  get action() {
    return this._action;
  }

  /**
   * Sets whether this item is selectable or not
   *
   * @param {boolean} focusable
   */
  set focusable(focusable) {
    this._focusable = focusable;
    this._updateTextColor();
  }

  /**
   * Gets whether this item is selectable or not
   *
   * @return {boolean}
   */
  get focusable() {
    return this._focusable;
  }

  /**
   * Sets the main label of the list item
   *
   * @param {string} v
   */
  set label(v) {
    this.tag('Label').text.text = v || '';
  }

  /**
   * The default announcment for the list item
   *
   * @param {string} v
   */
  get announce() {
    if (this._announce) {
      return this._announce;
    }
    return this.tag('Label').text.text;
  }

  set announce(v) {
    this._announce = v;
  }

  set announceContext(v) {
    this._announceContext = v;
  }

  get announceContext() {
    if (this._announceContext) {
      return this._announceContext;
    }
    return this.tag('HighlightLabel').text.text;
  }

  /**
   * When set, this extra label appears to the right of the main label highlighted in blue
   *
   * @param {string} v
   */
  set highlightLabel(v) {
    this.tag('HighlightLabel').text.text = v || '';
  }

  /**
   * Sets the sublabel that appears in smaller grey text under the label
   *
   * @param {string} v
   */
  set sublabel(v = '') {
    // Set a negative marginTop on the sublabel if there is one so its more flush with the label text
    this.tag('Sublabel').patch({
      flexItem: { marginTop: v ? -10 : 0 },
      text: {
        text: v
      }
    });
  }

  /**
   * Sets the wordWrapWidth of the sublabel.
   *
   * This is here because there does not seem to be a way to auto-size the wordWrapWidth based
   * on the flexbox layout :(
   *
   * @param {number} v
   */
  set sublabelWidth(v = DEFAULT_SUBLABEL_WIDTH) {
    this.tag('Sublabel').patch({
      text: {
        wordWrapWidth: v
      }
    });
  }

  /**
   * Controls the visibility of the right arrow icon to the right of the label
   *
   * @param {boolean} v
   */
  set rightArrow(v) {
    this.tag('RightArrow').visible = !!v;
  }

  get rightArrow() {
    return this.tag('RightArrow').visible;
  }

  /**
   * Controls top/bottom padding of the list item
   *
   * @param {number} v Padding
   */
  set padding(v = DEFAULT_PADDING) {
    this.patch({
      flex: { paddingTop: v, paddingBottom: v }
    });
  }

  /**
   * Set an icon to use to the left of the label text.
   *
   * Use iconVisible to control its visibility.
   *
   * If set, even if not visible, the space that would be consumed by the icon will be
   * present.
   *
   * Can be:
   * - undefined for no icon
   * - 'check' for check icon
   * - 'lock' for lock icon
   * - 'unlock' for unlock icon
   *
   * @param {undefined|'check'|'lock'} v
   */
  set icon(v) {
    if (this._icon !== v) {
      this._icon = v;
      this.tag('Icon').patch(this._getIconTemplate());
    }
  }

  get icon() {
    return this._icon;
  }

  get rightContent() {
    return this._rightContent;
  }

  set rightContent(v) {
    if (!v) {
      return;
    }

    this._rightContent = v;
    this.tag('RightContent').patch(v);
  }
  /**
   * Set if icon is visible or not
   *
   * @param {boolean} v
   */
  set iconVisible(v) {
    if (this._iconVisible !== v) {
      this._iconVisible = v;
      this.tag('Icon').patch(this._getIconTemplate());
    }
  }

  get iconVisible() {
    return this._iconVisible;
  }

  _getIconTemplate() {
    const hasFocus = this.hasFocus();
    let src = undefined;
    let visible = false;
    if (this._icon === 'check') {
      visible = true;
      src = hasFocus ? ACTIVE_CHECK_IMG : INACTIVE_CHECK_IMG;
    } else if (this._icon === 'lock') {
      visible = true;
      src = hasFocus ? ACTIVE_LOCK_IMG : INACTIVE_LOCK_IMG;
    } else if (this._icon === 'unlock') {
      visible = true;
      src = hasFocus ? ACTIVE_UNLOCK_IMG : INACTIVE_UNLOCK_IMG;
    }

    return {
      visible,
      alpha: visible && this._iconVisible ? 1 : 0.0000001,
      src
    };
  }

  _updateRightContentColor() {
    const color = this.hasFocus() ? ACTIVE_TEXT_COLOR : DISABLED_TEXT_COLOR;

    this.tag('RightContent')?.children?.forEach((child) => {
      child.patch({ color });
    });
  }

  _updateTextColor() {
    let textColor = this.hasFocus() ? ACTIVE_TEXT_COLOR : INACTIVE_TEXT_COLOR;
    if (!this.focusable) {
      textColor = DISABLED_TEXT_COLOR;
    }

    this.tag('Label').patch({
      text: {
        textColor
      }
    });
  }

  _focus() {
    this.patch({
      zIndex: 1, // Make focused item appear above all others so active border doesn't get overlapped
      ActiveBorders: {
        visible: true
      },
      VerticalAligner: {
        Icon: this._getIconTemplate()
      }
    });
    this._updateTextColor();
    if (this.tag('RightContent').rightFocusColor !== 'false') {
      this._updateRightContentColor();
    }
  }

  _unfocus() {
    this.patch({
      zIndex: 0,
      ActiveBorders: {
        visible: false
      },
      VerticalAligner: {
        Icon: this._getIconTemplate()
      }
    });
    this._updateTextColor();
    this._updateRightContentColor();
  }
  _handleClick() {
    this._focus();
    this.parent.parent._unFocusOtherChildren(this.itemIndex);
    this.parent.parent.setIndex(this.itemIndex);
    this.parent.parent._focus();
    this.parent.parent._handleEnter();
  }
}
