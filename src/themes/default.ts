import { lighten, darken } from '../utils/colorUtils';
import { colors } from 'react-select/lib/theme';

export const defaultColors = {
  blue: '#0985E3',
  green: '#00B52D',
  red: '#FE4A49',
  yellow: '#FEC934',
  white: 'white',
  gray: '#DEE9E0',
  lightGray: '#E7EFE8',
  darkGray: '#515C61',
  black: '#0A1521',
};

export const defaultTheme = {
  colors: defaultColors,
  borders: {
    radius: '.25rem',
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
    },
    danger: {
      borderColor: defaultColors.red,
      flood: defaultColors.red,
      lightFlood: lighten(defaultColors.red, 50),
      hoverlightFlood: lighten(defaultColors.red, 80),
      text: defaultColors.red,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.red, 5),
    },
    warning: {
      borderColor: defaultColors.yellow,
      flood: defaultColors.yellow,
      lightFlood: lighten(defaultColors.yellow, 50),
      hoverlightFlood: lighten(defaultColors.yellow, 80),
      text: defaultColors.yellow,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.yellow, 5),
    },
    success: {
      borderColor: defaultColors.green,
      flood: defaultColors.green,
      lightFlood: lighten(defaultColors.green, 50),
      hoverlightFlood: lighten(defaultColors.green, 80),
      text: defaultColors.green,
      reverseText: defaultColors.white,
      hoverFlood: darken(defaultColors.green, 5),
    },
    default: {
      borderColor: defaultColors.gray,
      flood: defaultColors.white,
      lightFlood: defaultColors.white,
      hoverlightFlood: defaultColors.white,
      text: defaultColors.black,
      reverseText: defaultColors.black,
      hoverFlood: darken(defaultColors.white, 5),
    },
  },
  typography: {
    fontFamily: '"Open Sans", arial, sans-serif',
  },
  input: {
    background: defaultColors.white,
    backgroundDisabled: defaultColors.lightGray,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
  },
  inputGroup: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
  },
  label: {
    padding: '6px 8px',
  },
  Textarea: {
    background: defaultColors.white,
    backgroundDisabled: defaultColors.lightGray,
    borderColor: defaultColors.gray,
    color: defaultColors.darkGray,
    padding: '.375rem .75rem',
  },
  nav: {
    background: colors.primary,
    color: defaultColors.white,
    height: '50px',
    brand: {
      color: defaultColors.white,
    },
  },
  common: {
    sm: {
      borderRadius: '4px',
      fontSize: '10px',
      padding: '5px',
    },
    md: {
      borderRadius: '4px',
      fontSize: '12px',
      padding: '8px',
    },
    lg: {
      borderRadius: '6px',
      fontSize: '14px',
      padding: '10px',
    },
  },
  validation: {
    errorColor: 'red',
    fontSize: '11px',
    padding: '4px',
  },
};
