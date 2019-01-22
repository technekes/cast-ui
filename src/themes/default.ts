import { lighten, darken } from '../utils/colorUtils';

export const defaultColors = {
  blue: '#0985E3',
  green: '#00B52D',
  red: '#FE4A49',
  yellow: '#FEC934',
  white: 'white',
  gray: '#8D9599',
  lightGray: '#E7EFE8',
  darkGray: '#515C61',
  black: '#0A1521',
  placeholderGray: '#727A80',
  disabledBackground: '#ECEFF2',
  disabledBorder: '#A3AAAD',
  panelBackground: '#F5F7F8',
};

export const defaultTheme = {
  colors: defaultColors,
  borders: {
    radius: '1px',
    radiusSm: '.2rem',
    radiusLg: '.3rem',
    width: '1px',
  },
  styles: {
    primary: {
      borderColor: defaultColors.blue,
      flood: defaultColors.blue,
      lightFlood: lighten(defaultColors.blue, 50),
      hoverlightFlood: lighten(defaultColors.blue, 80),
      text: defaultColors.blue,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.blue, 5),
      selectedFlood: darken(defaultColors.blue, 25),
    },
    danger: {
      borderColor: defaultColors.red,
      flood: defaultColors.red,
      lightFlood: lighten(defaultColors.red, 50),
      hoverlightFlood: lighten(defaultColors.red, 80),
      text: defaultColors.red,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.red, 5),
      selectedFlood: darken(defaultColors.blue, 25),
    },
    warning: {
      borderColor: defaultColors.yellow,
      flood: defaultColors.yellow,
      lightFlood: lighten(defaultColors.yellow, 50),
      hoverlightFlood: lighten(defaultColors.yellow, 80),
      text: defaultColors.yellow,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.yellow, 5),
      selectedFlood: darken(defaultColors.blue, 25),
    },
    success: {
      borderColor: defaultColors.green,
      flood: defaultColors.green,
      lightFlood: lighten(defaultColors.green, 50),
      hoverlightFlood: lighten(defaultColors.green, 80),
      text: defaultColors.green,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.green, 5),
      selectedFlood: darken(defaultColors.blue, 25),
    },
    default: {
      borderColor: defaultColors.gray,
      flood: defaultColors.white,
      lightFlood: defaultColors.white,
      hoverlightFlood: defaultColors.white,
      text: defaultColors.black,
      reverseText: defaultColors.black,
      hoverFlood: darken(defaultColors.white, 5),
      selectedFlood: darken(defaultColors.blue, 25),
    },
  },
  typography: {
    fontFamily: '"Open Sans", arial, sans-serif',
  },
  input: {
    background: defaultColors.white,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  label: {
    padding: '9px 8px',
  },
  textarea: {
    background: defaultColors.white,
    backgroundDisabled: defaultColors.lightGray,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
    placeholderColor: defaultColors.placeholderGray,
    disabled: {
      background: defaultColors.disabledBackground,
      borderColor: defaultColors.disabledBorder,
    },
  },
  panel: {
    body: {
      background: defaultColors.panelBackground,
    },
  },
  common: {
    sm: {
      borderRadius: '1px',
      fontSize: '10px',
      padding: '5px',
    },
    md: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px',
    },
    lg: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '10px',
    },
  },
  validation: {
    borderColor: 'red',
    errorTextColor: defaultColors.placeholderGray,
    fontSize: '11px',
    padding: '4px',
  },
};
