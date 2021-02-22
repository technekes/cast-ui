import { lighten, darken } from './colorUtils';

const defaultColors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#F1F6FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#167BE0',
  success: '#59C067',
  danger: '#D93945',
  warning: '#FD984E',
  secondary: '#727A80',
};

export type BaseColorsProp = {
  white: string;
  black: string;
  highlight400: string;
  highlight200: string;
  drk800: string;
  drk600: string;
  drk400: string;
  drk200: string;
  lt800: string;
  lt600: string;
  lt400: string;
  lt200: string;
  primary: string;
  success: string;
  danger: string;
  warning: string;
  secondary: string;
};

export type ThemeColorsProp = BaseColorsProp & {
  primaryHover: string;
  primaryFaded: string;
  primaryBackground: string;
  successHover: string;
  successFaded: string;
  successBackground: string;
  dangerHover: string;
  dangerFaded: string;
  dangerBackground: string;
  warningHover: string;
  warningFaded: string;
  warningBackground: string;
  secondaryHover: string;
  secondaryFaded: string;
  secondaryBackground: string;
};

enum ShadeThresholds {
  darken = 25,
  lighten = 25,
  lightest = 50,
}

export const generateColors = (
  colors: BaseColorsProp = defaultColors,
): ThemeColorsProp => {
  return {
    ...colors,
    primaryHover: darken(colors.primary, ShadeThresholds.darken),
    primaryFaded: lighten(colors.primary, ShadeThresholds.lighten),
    primaryBackground: lighten(colors.primary, ShadeThresholds.lightest),
    successHover: darken(colors.success, ShadeThresholds.darken),
    successFaded: lighten(colors.success, ShadeThresholds.lighten),
    successBackground: lighten(colors.success, ShadeThresholds.lightest),
    dangerHover: darken(colors.danger, ShadeThresholds.darken),
    dangerFaded: lighten(colors.danger, ShadeThresholds.lighten),
    dangerBackground: lighten(colors.danger, ShadeThresholds.lightest),
    warningHover: darken(colors.warning, ShadeThresholds.darken),
    warningFaded: lighten(colors.warning, ShadeThresholds.lighten),
    warningBackground: lighten(colors.warning, ShadeThresholds.lightest),
    secondaryHover: darken(colors.secondary, ShadeThresholds.darken),
    secondaryFaded: lighten(colors.secondary, ShadeThresholds.lighten),
    secondaryBackground: lighten(colors.secondary, ShadeThresholds.lightest),
  };
};

type Borders = {
  radius: string;
  radiusSm: string;
  radiusLg: string;
  width: string;
};

const defaultBorders: Borders = {
  radius: '1px',
  radiusSm: '.2rem',
  radiusLg: '.3rem',
  width: '1px',
};

const generateBorders = (borders: Borders = defaultBorders) => {
  return borders;
};

type Fonts = {
  main: string;
  brand: string;
  code: string;
  pre: string;
};

const defaultFonts: Fonts = {
  main: 'Roboto, "Open Sans", arial, sans-serif',
  brand: '',
  code: '"Roboto Mono", Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
  pre: '"Roboto Mono", Courier, monospace',
};

const generateFonts = (fonts: Fonts = defaultFonts) => fonts;

type ThemeOptions = {
  fonts?: Fonts;
  borders?: Borders;
  colors?: BaseColorsProp;
  otherProps?: {};
};

const deepMerge = (...objects): {} => {
  const isObject = (value: any) => value && typeof value === 'object';

  return objects.reduce((previousObj, currentObj) => {
    Object.keys(currentObj).forEach(key => {
      const previousValue = previousObj[key];
      const currentValue = currentObj[key];

      if (isObject(previousValue) && isObject(currentValue)) {
        previousObj[key] = deepMerge(previousValue, currentValue);
      } else {
        previousObj[key] = currentValue;
      }
    });

    return previousObj;
  }, {});
};

const changeResolver = (themeProps: {}, extendedProps: {}): {} => {
  return deepMerge(themeProps, extendedProps);
};

export const createCastUITheme = (options: ThemeOptions, name = 'Default') => {
  const borders = generateBorders(options.borders);
  const colors = generateColors(options.colors);
  const fonts = generateFonts(options.fonts);

  const theme = {
    name,
    colors,
    borders,
    styles: {
      primary: {
        borderColor: colors.primary,
        flood: colors.primary,
        disabledFlood: colors.primaryFaded,
        lightFlood: colors.primaryFaded,
        hoverlightFlood: colors.primaryFaded,
        text: colors.primary,
        reverseText: colors.white,
        hoverFlood: colors.primaryHover,
        selectedFlood: colors.primaryHover,
        badgeBackground: colors.primary,
        badgeColor: colors.white,
        alertColor: colors.white,
        alertBackground: colors.primary,
        notificationColor: colors.white,
        notificationBackground: colors.primary,
        listGroupColor: colors.white,
        listGroupBackground: colors.primary,
        light: {
          alertColor: colors.black,
          alertBackground: colors.primaryFaded,
          notificationColor: colors.black,
          notificationBackground: colors.primaryFaded,
          badgeBackground: colors.primaryFaded,
          badgeColor: colors.black,
        },
        cardTopBorderColor: colors.primary,
      },
      secondary: {
        borderColor: colors.secondary,
        flood: colors.secondary,
        disabledFlood: colors.secondaryFaded,
        lightFlood: colors.secondaryFaded,
        hoverlightFlood: colors.secondaryFaded,
        text: colors.primary,
        reverseText: colors.white,
        hoverFlood: colors.secondaryHover,
        selectedFlood: colors.secondaryHover,
        badgeBackground: colors.secondary,
        badgeColor: colors.black,
        alertColor: colors.black,
        alertBackground: colors.secondary,
        notificationColor: colors.black,
        notificationBackground: colors.secondary,
        listGroupColor: colors.black,
        listGroupBackground: colors.secondary,
        light: {
          alertColor: colors.black,
          alertBackground: colors.secondaryFaded,
          notificationColor: colors.black,
          notificationBackground: colors.secondaryFaded,
          badgeBackground: colors.secondaryFaded,
          badgeColor: colors.black,
        },
        cardTopBorderColor: colors.secondary,
      },
      danger: {
        borderColor: colors.danger,
        flood: colors.danger,
        disabledFlood: colors.dangerFaded,
        lightFlood: colors.dangerFaded,
        hoverlightFlood: colors.dangerFaded,
        text: colors.danger,
        reverseText: colors.white,
        hoverFlood: colors.dangerHover,
        selectedFlood: colors.dangerHover,
        badgeBackground: colors.danger,
        badgeColor: colors.white,
        alertColor: colors.white,
        alertBackground: colors.danger,
        notificationColor: colors.white,
        notificationBackground: colors.danger,
        listGroupColor: colors.white,
        listGroupBackground: colors.danger,
        light: {
          alertColor: colors.black,
          alertBackground: colors.dangerFaded,
          notificationColor: colors.black,
          notificationBackground: colors.dangerFaded,
          badgeBackground: colors.dangerFaded,
          badgeColor: colors.black,
        },
        cardTopBorderColor: colors.danger,
      },
      warning: {
        borderColor: colors.warning,
        flood: colors.warning,
        disabledFlood: colors.warningFaded,
        lightFlood: colors.warningFaded,
        hoverlightFlood: colors.warningFaded,
        text: colors.warning,
        reverseText: colors.white,
        hoverFlood: colors.warningHover,
        selectedFlood: colors.warningHover,
        badgeBackground: colors.warning,
        badgeColor: colors.white,
        alertColor: colors.white,
        alertBackground: colors.warning,
        notificationColor: colors.white,
        notificationBackground: colors.warning,
        listGroupColor: colors.white,
        listGroupBackground: colors.warning,
        light: {
          alertColor: colors.black,
          alertBackground: colors.warningFaded,
          notificationColor: colors.black,
          notificationBackground: colors.warningFaded,
          badgeBackground: colors.warningFaded,
          badgeColor: colors.black,
        },
        cardTopBorderColor: colors.warning,
      },
      success: {
        borderColor: colors.success,
        flood: colors.success,
        disabledFlood: colors.successFaded,
        lightFlood: colors.successFaded,
        hoverlightFlood: colors.successFaded,
        text: colors.success,
        reverseText: colors.white,
        hoverFlood: colors.successHover,
        selectedFlood: colors.successHover,
        badgeBackground: colors.success,
        badgeColor: colors.white,
        alertColor: colors.white,
        alertBackground: colors.success,
        notificationColor: colors.white,
        notificationBackground: colors.success,
        listGroupColor: colors.white,
        listGroupBackground: colors.success,
        light: {
          alertColor: colors.black,
          alertBackground: colors.successFaded,
          notificationColor: colors.black,
          notificationBackground: colors.successFaded,
          badgeBackground: colors.successFaded,
          badgeColor: colors.black,
        },
        cardTopBorderColor: colors.success,
      },
    },
    pagination: {
      text: colors.black,
      fontWeight: 'normal',
      padding: '4px 0',
      background: colors.white,

      activeText: colors.primary,
      activeFontWeight: 'bold',
      activeBackground: colors.white,
      disabledText: colors.secondary,
      disabledBackground: colors.white,
      hoverTextColor: colors.primary,
      hoverBackground: colors.white,
      hoverFontWeight: 'bold',

      button: {
        width: '24px',
        height: '24px',
        fontWeight: 'normal',
        padding: '3px 3px 4px',
        borderColor: colors.white,
        activeBorderColor: colors.primary,
        disabledBorderColor: colors.white,
        disabledText: colors.lt600,
        hoverBorderColor: colors.white,
        hoverBackground: colors.lt400,
      },
    },
    body: {
      fontFamily: fonts.main,
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '160%',
      color: colors.primary,
      backgroundColor: colors.white,
    },
    button: {
      outlineBackgroundColor: colors.white,
      sm: {
        fontSize: '11px',
        padding: '7px 8px',
        lineHeight: '12px',
      },
      md: {
        fontSize: '14px',
        padding: '8px 14px',
        lineHeight: '14px',
      },
      lg: {
        fontSize: '16px',
        padding: '10px 16px',
        lineHeight: '18px',
      },
    },
    typography: {
      fontFamily: fonts.main,
      secondaryFontFamily: '',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '160%',
      color: colors.drk800,
      caption: {
        10: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '10px',
          lineHeight: '100%',
        },
        20: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '100%',
        },
      },
      bodyText: {
        10: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '100%',
        },
        20: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '160%',
        },
      },
      code: {
        background: colors.lt200,
        fontFamily: fonts.code,
        fontSize: '95%',
        lineHeight: '140%',
      },
      digits: {
        fontWeight: '700',
        fontSize: '18px',
      },
      display: {
        10: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '22px',
          lineHeight: '125%',
        },
        20: {
          fontFamily: fonts.main,
          fontWeight: '400',
          fontSize: '27px',
          lineHeight: '120%',
        },
      },
      header: {
        10: {
          fontFamily: fonts.main,
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '160%',
        },
        20: {
          fontFamily: fonts.main,
          fontWeight: '700',
          fontSize: '23px',
          lineHeight: '175%',
        },
      },
      link: {
        fontWeight: '500',
        fontSize: '14px',
        color: colors.primary,
        textDecoration: 'none',
        disabled: {
          color: colors.drk400,
        },
        visited: {
          color: colors.primaryFaded,
          textDecoration: 'underline',
        },
        hover: {
          color: colors.primary,
          textDecoration: 'underline',
        },
      },
      pre: {
        background: colors.lt200,
        fontFamily: fonts.pre,
        fontSize: '100%',
        lineHeight: '100%',
      },
      sectionHeader: {
        fontWeight: '500',
        fontSize: '16px',
        borderWidth: '1px',
        borderColor: colors.secondary,
        borderStyle: 'solid',
      },
      subHeading: {
        fontWeight: '500',
        fontSize: '16px',
      },
      subTitle: {
        fontWeight: '300',
        fontSize: '18px',
        lineHeight: '135%',
      },
      title: {
        10: {
          fontFamily: fonts.main,
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '130%',
        },
        20: {
          fontFamily: fonts.main,
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '135%',
        },
      },
    },
    input: {
      background: colors.white,
      border: `1px solid ${colors.secondaryFaded}`,
      color: colors.drk800,
      fontSize: '14px',
      placeholderColor: colors.drk400,
      disabled: {
        background: colors.lt600,
        border: `1px solid ${colors.lt600}`,
        addonTextColor: colors.drk400,
      },
      sm: {
        height: '26px',
        padding: '6px 7px',
        iconTop: '6px',
      },
      md: {
        height: '30px',
        padding: '9px 10px 7px 10px',
        iconTop: '7px',
      },
      lg: {
        height: '38px',
        padding: '11px 13px 13px 13px',
        iconTop: '9px',
      },
    },
    inputGroup: {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        color: colors.drk800,
        horizontalMargin: '12px 0',
      },
      label: {
        padding: '8px 16px 8px 0',
        fontWeight: 500,
        horizontalWidth: '300px',
      },
    },
    radioButton: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.primary,
      disabledText: colors.lt600,
      unselectedColor: colors.white,
      stackedSpacing: '10px',
      inlineSpacing: '20px',
      sm: {
        size: '6px',
      },
      md: {
        size: '10px',
      },
      lg: {
        size: '14px',
      },
    },
    checkbox: {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: colors.primary,
      disabledText: colors.lt600,
      unselectedColor: colors.white,
      selectedColor: colors.primary,
      stackedSpacing: '19px',
      inlineSpacing: '20px',
      sm: {
        height: '28px',
        squareSize: '6px',
        squareMargin: '7px 0',
        indeterminateTopPosition: '3px',
        checkedTopPosition: '7px',
        marginLeft: '4px',
      },
      md: {
        height: '32px',
        squareSize: '10px',
        squareMargin: '7px 0',
        indeterminateTopPosition: '5px',
        checkedTopPosition: '9px',
        marginLeft: '6px',
      },
      lg: {
        height: '40px',
        squareSize: '14px',
        squareMargin: '8px 0',
        indeterminateTopPosition: '7px',
        checkedTopPosition: '11px',
        marginLeft: '6.5px',
      },
    },
    toggle: {
      background: {
        inactiveColor: colors.lt800,
        inactiveBorderColor: colors.lt800,
        activeColor: colors.lt800,
        activeBorderColor: colors.lt800,
        disabled: colors.lt400,
        disabledBorderColor: colors.lt400,
      },
      inactiveColor: colors.drk600,
      inactiveBorderColor: colors.drk600,
      activeColor: colors.primary,
      activeBorderColor: colors.primary,
      activeDisabledColor: colors.drk200,
      activeDisabledBorderColor: colors.drk200,
      inactiveDisabledColor: colors.drk200,
      inactiveDisabledBorderColor: colors.drk200,
      sm: {
        toggleSize: '20px',
        toggleOffsetTop: '-3px',
        toggleOffsetLeft: '0px',
        activeOffset: '0px',
        backgroundHeight: '15px',
        backgroundWidth: '35px',
      },
      md: {
        toggleSize: '25px',
        toggleOffsetTop: '-5px',
        toggleOffsetLeft: '0px',
        activeOffset: '0px',
        backgroundHeight: '15px',
        backgroundWidth: '45px',
      },
      lg: {
        toggleSize: '30px',
        toggleOffsetTop: '-5px',
        toggleOffsetLeft: '0px',
        activeOffset: '0px',
        backgroundHeight: '20px',
        backgroundWidth: '55px',
      },
    },
    label: {
      padding: '9px 8px',
    },
    listGroup: {
      theme: {
        light: {
          color: colors.drk800,
          backgroundColor: colors.white,
          chevronColor: colors.primary,
        },
        dark: {
          color: colors.drk800,
          backgroundColor: colors.highlight200,
          chevronColor: colors.primary,
        },
      },
    },
    modal: {
      header: {
        minHeight: '0',
        backgroundColor: colors.lt200,
        borderColor: colors.secondaryFaded,
        padding: '16px 16px',
        fontSize: '16px',
      },
      body: {
        minHeight: '0',
        backgroundColor: colors.white,
        borderBottom: colors.secondaryFaded,
        padding: '8px 16px',
      },
      footer: {
        minHeight: '0',
        backgroundColor: colors.lt200,
        borderColor: colors.secondaryFaded,
        padding: '8px 16px',
      },
      overlay: {
        zIndex: '999999',
      },
      sm: {
        width: '300px',
      },
      md: {
        width: '745px',
      },
      lg: {
        width: '1220px',
      },
    },
    textarea: {
      background: colors.white,
      backgroundDisabled: colors.secondaryFaded,
      borderColor: colors.secondary,
      color: colors.secondaryHover,
      padding: '.375rem .75rem',
      placeholderColor: colors.drk400,
      disabled: {
        background: colors.lt600,
        borderColor: colors.drk400,
      },
    },
    panel: {
      header: {
        padding: '14px 16px',
      },
      body: {
        padding: '30px 30px',
      },
      borderWidth: '1px',
      bodyBackgroundColor: colors.lt200,
      bodyBorderColor: colors.secondaryFaded,
      headerColor: colors.primary,
      headerBackgroundColor: colors.white,
      headerBorderColor: colors.secondaryFaded,
    },
    badge: {
      borderRadius: '10px',
      fontSize: '10px',
      sm: {
        borderRadius: '10px',
        fontSize: '10px',
        padding: '4px 10px',
      },
      md: {
        borderRadius: '12px',
        fontSize: '12px',
        padding: '4px 10px',
      },
      lg: {
        borderRadius: '14px',
        fontSize: '14px',
        padding: '4px 10px',
      },
    },
    alert: {
      borderRadius: '0px',
      fontSize: '14px',
      display: 'block',
      padding: '8px 16px',
      fontWeight: 'bold',
      lineHeight: '18px',
    },
    notification: {
      borderRadius: '1px',
      fontSize: '14px',
      padding: '8px 16px',
      fontWeight: 'bold',
      lineHeight: '18px',
    },
    card: {
      borderRadius: '2px',
      borderColor: colors.lt800,
      fontSize: '14px',
      padding: '8px 16px',
      background: colors.white,
      boxShadow: '0 2px 4px rgba(0,0,0,.075) !important;',
      highlightAllBorderWidth: '1px',
      highlightedBorderWidth: '5px',
    },
    popover: {
      withArrowDistance: 10,
      withoutArrowDistance: 9,
      background: colors.white,
      color: colors.black,
      borderRadius: '1px',
      borderColor: colors.secondaryFaded,
      boxShadow: `0 0 5px ${colors.secondaryFaded}`,
    },
    tooltip: {
      background: colors.primary,
      borderRadius: '1px',
    },
    common: {
      sm: {
        borderRadius: '1px',
        fontSize: '11px',
        padding: '4px 8px',
        tableCellPadding: '5px 0',
        inputIconSize: '14px',
      },
      md: {
        borderRadius: '1px',
        fontSize: '14px',
        padding: '8px 14px',
        tableCellPadding: '9px 0',
        inputIconSize: '20px',
      },
      lg: {
        borderRadius: '1px',
        fontSize: '16px',
        padding: '10px 16px',
        tableCellPadding: '11px 0',
        inputIconSize: '24px',
      },
    },
    validation: {
      borderColor: colors.danger,
      color: colors.drk800,
      fontSize: '11px',
      fontStyle: 'italic',
      padding: '4px',
    },
    table: {
      fontSize: '14px',
      header: {
        borderBottomColor: colors.secondaryHover,
        color: colors.primary,
        fontWeight: 'bold',
      },
      row: {
        borderBottomColor: colors.secondaryFaded,
        hoverColor: colors.secondaryFaded,
        highlightColor: colors.highlight200,
        readonlyColor: colors.lt200,
      },
      column: {
        highlightColor: colors.highlight200,
        readonlyColor: colors.lt200,
      },
    },
    datepicker: {
      zIndex: 99,
    },
    tabs: {
      color: colors.drk800,
      borderColor: colors.primary,
      hoverColor: colors.primaryFaded,
      borderRadius: '0px',
      bottomBorderWidth: '5px',
      fontSize: '14px',
      padding: '12px',
      margin: '0',
    },
    copyToClipboard: {
      fontFamily: fonts.pre,
      fontSize: '14px',
      color: colors.primary,
      background: colors.lt200,
      copiedColor: colors.drk400,
      padding: '16px',
      button: {
        textTransform: 'uppercase',
        height: '20px',
        fontWeight: '600',
        primaryColor: colors.primary,
        successColor: colors.success,
        margin: '0 4px',
      },
    },
    navbar: {
      height: '60px',
      background: colors.white,
      padding: '0 32px ',
      borderTop: '',
      borderBottom: '',
      color: colors.primary,
    },
    tabnav: {
      background: lighten(colors.primary, 45),
      padding: '0 32px ',
      borderTop: '',
      borderBottom: '',
      color: colors.primary,
      tab: {
        padding: '4px 0 8px',
        margin: '0 56px 0 0',
        color: 'inherit',
        fontWeight: 'inherit',
        cursor: 'pointer',
        background: 'transparent',
        opacity: '1',
        bottomBorderWidth: '0',
        bottomBorderColor: 'transparent',
        transition: 'opacity 0.15s',
        iconColor: colors.primary,
      },
      activetab: {
        color: colors.primary,
        fontWeight: 700,
        cursor: 'pointer',
        background: 'transparent',
        opacity: '1',
        bottomBorderWidth: '4px',
        bottomBorderColor: colors.primary,
        iconColor: colors.primary,
      },
      tabDropdown: {
        color: colors.primary,
        background: colors.white,
        padding: '8px 16px',
        hoverColor: colors.primary,
        hoverBackground: colors.lt200,
      },
    },
    sidenav: {
      fontSize: '14px',
      color: colors.primary,
      height: '',
      width: '50px',
      openWidth: '220px',
      background: colors.lt200,
      padding: '',
      margin: '',
      zIndex: 5,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 'auto',
      borderLeft: '',
      borderRight: `1px solid ${colors.lt800}`,
      transition: 'min-width 0.15s',
      secondaryNavbar: {
        width: '0px',
        openWidth: '170px',
        background: colors.white,
        padding: '80px 0 16px',
        margin: '',
        zIndex: 4,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 'auto',
        borderLeft: '',
        borderRight: `1px solid ${colors.lt800}`,
        transition: 'left 0.15s',
      },
      nav: {
        padding: '',
        margin: '',
      },
      toggle: {
        height: '80px',
        cursor: 'pointer',
        padding: '0 12px',
        borderBottom: `1px solid ${colors.lt800}`,
        display: 'grid',
      },
      navItem: {
        color: 'inherit',
        fontWeight: 'inherit',
        cursor: 'pointer',
        background: 'transparent',
        opacity: '1',
        leftBorderWidth: '0',
        leftBorderColor: 'transparent',
        topNavBorderBottom: `1px solid ${colors.lt800}`,
        bottonNavBorderBottom: '',
        transition: 'opacity 0.15s',
      },
      activenavItem: {
        color: colors.primary,
        fontWeight: 700,
        cursor: 'pointer',
        background: colors.white,
        opacity: '1',
        leftBorderWidth: '4px',
        leftBorderColor: colors.primary,
        topNavBorderBottom: `1px solid ${colors.lt800}`,
        bottonNavBorderBottom: '',
      },
      activeSecnavItem: {
        color: colors.primary,
        fontWeight: 700,
        background: colors.lt200,
      },
      itemToggle: {
        position: 'absolute',
        right: '0',
        background: colors.lt200,
        height: '100%',
        width: '30px',
        display: 'flex',
      },
      navIcon: {
        padding: '8px 0 8px 12px',
      },
      navText: {
        padding: '8px 0 8px 12px',
      },
    },
    spinner: {
      backgroundColor: colors.secondaryFaded,
      borderColor: colors.primary,
    },
    itemContainer: {
      borderColor: colors.secondaryFaded,
    },
    draggable: {
      borderColor: colors.secondaryFaded,
    },
    select: {
      color: colors.drk800,
      dropdownColor: colors.drk800,
      optionBackgroundColor: colors.white,
      hoverOptionBackgroundColor: colors.lt200,
      hoverOptionColor: colors.primary,
      selectedOptionColor: colors.primary,
      selectedOptionBackgroundColor: colors.white,
      borderColor: colors.secondary,
      width: '100%',
      disabled: {
        color: colors.drk800,
        dropdownColor: colors.drk400,
        borderColor: colors.lt600,
        backgroundColor: colors.lt600,
        placeholderColor: colors.drk400,
      },
      sm: {
        height: '28px',
        padding: '2px 10px',
      },
      md: {
        height: '32px',
        padding: '3px 10px 2px',
      },
      lg: {
        height: '40px',
        padding: '6px 13px',
      },
      multiSelect: {
        badgeBackgroundColor: colors.lt600,
        disabled: {
          badgeBackgroundColor: colors.drk200,
        },
        sm: {
          height: '26px',
          padding: '0px 10px',
          valueMargin: '2px 8px 2px 0',
          labelHeight: '20px',
          borderRadius: '13px',
          indicatorsPosition: '0px',
        },
        md: {
          height: '28px',
          padding: '2px 10px 0 10px',
          valueMargin: '0 8px 2px 0',
          labelHeight: '24px',
          borderRadius: '13px',
          indicatorsPosition: '0px',
        },
        lg: {
          height: '33px',
          padding: '5px 13px 0 13px',
          valueMargin: '0 8px 5px 0',
          labelHeight: '28px',
          borderRadius: '13px',
          indicatorsPosition: '0px',
        },
      },
    },
    fileUpload: {
      dropZone: {
        color: colors.lt800,
        border: `1px dashed ${colors.lt800}`,
        draggingBorder: `1px dashed ${colors.drk400}`,
        borderRadius: '1px',
        textAlign: 'center',
        padding: '16px',
        margin: '0 0 16px',
        ctaColor: colors.primary,
        background: colors.white,
        draggingBackground: colors.lt200,
      },
      file: {
        defaultColor: colors.drk800,
        primaryColor: colors.primary,
        dangerColor: colors.danger,
        background: colors.lt200,
        borderRadius: '1px',
        textAlign: 'left',
        padding: '16px',
        margin: '3px 0',
      },
    },
    progressBar: {
      height: '8px',
      borderRadius: '6px',
      background: colors.lt800,
      progressBackground: colors.primary,
      transition: 'width .2s ease-in',
    },
    toast: {
      position: {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
      },
    },
  };
  return { ...theme, ...changeResolver(theme, options.otherProps || {}) };
};
