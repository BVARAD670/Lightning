// There is some odd JavaScript math going on here. For some reason, bit-shifting
// the alpha value by 24 bits leads to incorrect results, but multiplying it by
// 1 shifted by 24 bits is just fine
const rgba = (r, g, b, a) =>
  (Math.round(a * 0xff) * (1 << 24)) +
  (r << 16) +
  (g << 8) +
  b;
const rgb = (r, g, b) => rgba(r, g, b, 1);


export const COLORS = {
  BACKGROUND: rgba(16, 16, 16, 1), // #101010
  HOMESCREEN_OVERLAY: rgba(20, 20, 23, 1), // 0x141417
  BLACK: rgba(0, 0, 0, 1),
  CLEAR: rgba(0, 0, 0, 0),
  WHITE: rgba(255, 255, 255, 1),
  YELLOW: rgba(255, 255, 0, 1),
  YELLOW_100: rgb(198, 137, 18),
  WHITE_100: rgb(238, 241, 243),
  WHITE_200: rgba(255, 255, 255, 0.2),
  WHITE_800: rgba(255, 255, 255, 0.8),
  WHITE_900: rgba(255, 255, 255, 0.9),
  WHITE_950: rgba(255, 255, 255, 0.95),
  RED_0xc90318: rgba(201, 3, 24, 1), // #c90318
  GREEN_100: rgba(24, 159, 34, 1), // #189F22
  GREEN_110: rgba(81, 194, 58, 1), // #51C23A
  GREEN_200: rgb(110, 154, 43), // #6e9a2B
  AMBER_100: rgba(255, 157, 0, 1), // #ff9d00
  AMBER_110: rgba(254, 199, 7, 1), // #fec707
  RED_100: rgba(194, 0, 24, 1), // #c20018
  RED_105: rgba(217, 0, 58, 1), // #d9003a
  RED_110: rgba(249, 72, 55, 1), // #f94837
  GREY_100: rgb(232, 232, 232), // #e8e8e8
  GREY_150: rgb(229, 229, 229), // #e5e5e5
  GREY_200: rgb(200, 200, 200), // #c8c8c8
  GREY_400: rgb(177, 185, 191), // #b1b9bf
  GREY_500: rgb(170, 170, 170), // #aaaaaa
  GREY_550: rgb(163, 163, 163), // #a3a3a3
  GREY_565: rgb(101, 105, 114), // #656972
  GREY_575: rgb(117, 117, 117), // #757575
  GREY_580: rgba(100, 106, 112, 0.95), // #646a70@95
  GREY_590: rgb(100, 106, 112), // #646a70
  GREY_600: rgb(94, 94, 94), // #5e5e5e
  GREY_700: rgb(48, 48, 48), // #303030
  GREY_800: rgb(42, 44, 45), // #2a2c2d
  GREY_850: rgb(38, 38, 38), // #262626
  GREY_900: rgb(25, 25, 25), // #191919 WHITE_UNFOCUS
  BLUE_400: rgb(43, 156, 216), // #2b9cd8
  BLUE_500: rgb(2, 114, 182), // #0272b6
  BLUE_600: rgb(26, 105, 146), // #1a6992
  NOWPLAYING_LEFT: rgb(147, 116, 248),
  NOWPLAYING_RIGHT: rgb(142, 114, 247)
};
