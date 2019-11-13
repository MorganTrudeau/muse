'use strict';

import {StyleSheet, PixelRatio, Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = Math.min(SCREEN_WIDTH / 360, 1.2);

export function normalize(size) {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const HEIGHT = Dimensions.get('window').height;

const SMALL_SCREEN = HEIGHT < 667;

const iconText = normalize(9);
const extraSmallText = normalize(12);
const smallText = normalize(14);
const descriptionText = normalize(15);
const normalText = normalize(16);
const largeText = normalize(18);
const extraLargeText = normalize(22);

export const colors = {
  primary: '#283a6e',
  primaryUnderlay: '#202e58',
  primaryRGBA: '40, 58, 110',
  secondary: '#465b95',
  secondaryUnderlay: '#384877',
  secondaryLight: '#dadee9',
  bg: '#191414',
  bgDark: '#d3defd',
  tabBarBg: '#2f3032',
  tabIconActive: '#fff',
  tabIconInactive: '#696c75',
  empty: '#848ca3',
  shadow: 'rgba(0,0,0,0.8)',
  frost: 'rgba(255,255,255,0.8)',
  text: '#050a19',
  statusBar: '#243463',
  header: '#283a6e',
  lightGrey: '#f8f8fb',
  lightGreyUnderlay: '#dfdfe1',
  grey: '#696c75',
  darkGrey: '#2f3032',
  darkGreyUnderlay: '#202123',
  red: '#8a3249',
  redUnderlay: '#6e283a',
  green: '#498a32',
  greenUnderlay: '#3a6e28',
  white: '#fff',
  black: '#000',
  border: 'rgba(0,0,0,0.6)',
  borderLight: 'rgba(0,0,0,0.3)',
  avatarRed: '#F44336',
  avatarGreen: '#2ecc71',
  avatarGreenRGBA: '46, 204, 113',
  avatarGreenUnderlay: '#24a35a',
};

export default {
  container: {flex: 1, backgroundColor: colors.bg},
  modalContainer: {flex: 1, backgroundColor: colors.secondary},

  textGrey: {color: colors.grey, fontSize: normalText},
  textLink: {color: colors.secondary, fontSize: smallText},

  textIcon: {color: colors.text, fontSize: iconText},
  textIconWhite: {color: colors.white, fontSize: iconText},

  textExtraSmall: {color: colors.text, fontSize: extraSmallText},
  textExtraSmallWhite: {color: colors.white, fontSize: extraSmallText},

  textSmall: {color: colors.text, fontSize: smallText},
  textSmallWhite: {color: colors.white, fontSize: smallText},

  textDescription: {color: colors.text, fontSize: descriptionText},
  textDescriptionWhite: {color: colors.white, fontSize: descriptionText},

  text: {color: colors.text, fontSize: normalText},
  textWhite: {color: colors.white, fontSize: normalText},

  textLarge: {color: colors.text, fontSize: largeText},
  textLargeWhite: {color: colors.white, fontSize: largeText},

  altText: {color: colors.empty, fontSize: normalText},
  textSmallAlt: {color: colors.empty, fontSize: smallText},

  titleSmall: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    fontSize: smallText,
  },
  titleSmallWhite: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: smallText,
  },

  title: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    fontSize: normalText,
  },
  titleWhite: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: normalText,
  },

  titleLarge: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    fontSize: largeText,
  },
  titleLargeWhite: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: largeText,
  },

  titleExtraLarge: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: extraLargeText,
  },
  titleExtraLargeWhite: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: extraLargeText,
  },

  textTimer: {
    color: colors.red,
    fontSize: extraLargeText,
    fontWeight: 'bold',
  },
  textTime: {
    color: colors.text,
    fontSize: extraLargeText,
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: normalize(11),
    fontWeight: 'bold',
  },
  textAvatar: {color: colors.white, fontWeight: 'bold', fontSize: largeText},
  listDescription: {color: colors.white, fontSize: descriptionText},
  listItemContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  calendarTheme: {
    backgroundColor: '#ffffff',
    calendarBackground: '#ffffff',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: colors.red,
    selectedDayTextColor: '#ffffff',
    todayTextColor: colors.red,
    dayTextColor: colors.text,
    textDisabledColor: '#d9e1e8',
    dotColor: '#8a3249',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: 'blue',
    textMonthFontWeight: 'bold',
    textDayFontSize: normalize(16),
    textDayFontWeight: 'bold',
    textMonthFontSize: normalize(16),
    textDayHeaderFontSize: normalize(14),
  },

  border: {borderWidth: StyleSheet.hairlineWidth, borderColor: colors.border},
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  borderLightBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderLight,
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
  },
  borderLightTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.borderLight,
  },
  listHeader: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: colors.secondary,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderBottomColor: "rgba(0,0,0,0.45)"
  },
  listSubHeader: {
    backgroundColor: colors.lightGrey,
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  settingItem: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    marginHorizontal: 7,
    marginVertical: 4,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 1,
    zIndex: 1,
    minHeight: HEIGHT < 667 ? 60 : 70,
    justifyContent: 'center',
  },
  settingTitle: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    fontSize: normalText,
  },
  listItem: {
    backgroundColor: colors.white,
    padding: 15,
    marginHorizontal: 7,
    marginVertical: 4,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 1,
    zIndex: 1,
  },
  listContent: {
    backgroundColor: colors.white,
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.borderLight,
  },
  incompleteBorder: {borderWidth: 3, borderColor: colors.avatarRed},
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: colors.grey,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: colors.lightGrey,
    paddingVertical: SMALL_SCREEN ? 9 : 12,
    width: SMALL_SCREEN ? 180 : 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {color: colors.text, fontWeight: 'bold', fontSize: normalText},
  header: {
    backgroundColor: colors.header,
    borderBottomWidth: 0,
    elevation: 0,
  },
  inputContainer: {
    marginHorizontal: 10,
    marginVertical: 15,
    width: '90%',
    maxWidth: 350,
  },
  inputHeader: {
    color: colors.white,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: largeText,
  },
  input: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    minHeight: HEIGHT < 667 ? 40 : 50,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  multiLineInput: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 8,
    minHeight: HEIGHT < 667 ? 40 : 50,
  },
  multiLineInputButton: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingHorizontal: 8,
    minHeight: HEIGHT < 667 ? 40 : 50,
    textAlignVertical: 'top',
  },
  textArea: {
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    padding: 8,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: 100,
    textAlignVertical: 'top',
  },

  shadowLight: {
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 2,
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    elevation: 1,
    zIndex: 1,
  },
  shadowAbove: {
    shadowOffset: {width: 0, height: -2},
    shadowRadius: 6,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    elevation: 8,
    zIndex: 1,
  },
  shadowBelow: {
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    elevation: 4,
    zIndex: 1,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  headerTransparent: {
    borderBottomColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },
  menuIcon: {opacity: 0.8},
};
