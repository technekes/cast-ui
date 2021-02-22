import { createCastUITheme, generateColors } from '../utils/createTheme';

export { ThemeProvider } from 'styled-components';

const colors = {
  white: '#ffffff',
  black: '#000000',
  highlight400: '#E8EEFD',
  highlight200: '#F2F6FF',
  drk800: '#303E47',
  drk600: '#687279',
  drk400: '#A7ADB1',
  drk200: '#C6CACC',
  lt800: '#DADCDE',
  lt600: '#E6E8EA',
  lt400: '#F0F2F4',
  lt200: '#F5F7F8',
  primary: '#0072CE',
  success: '#00BF6F',
  danger: '#FC2802',
  warning: '#FD8236',
  secondary: '#C6CACC',
};

const cobaltColors = generateColors(colors);
export const cobaltTheme = createCastUITheme(
  {
    colors,
    borders: {
      radius: '1px',
      radiusSm: '3.2px',
      radiusLg: '4.8px',
      width: '1px',
    },
    otherProps: {
      styles: {
        primary: {
          disabledFlood: cobaltColors.drk200,
          light: {
            alertColor: cobaltColors.drk800,
            alertBackground: cobaltColors.primaryBackground,
            notificationColor: cobaltColors.drk800,
            notificationBackground: cobaltColors.primaryBackground,
            badgeBackground: cobaltColors.primaryBackground,
            badgeColor: cobaltColors.primary,
          },
        },
        secondary: {
          disabledFlood: cobaltColors.drk200,
          badgeBackground: cobaltColors.drk400,
          badgeColor: cobaltColors.white,
          alertColor: cobaltColors.drk800,
          notificationColor: cobaltColors.drk800,
          light: {
            alertColor: cobaltColors.drk800,
            alertBackground: cobaltColors.secondaryBackground,
            notificationColor: cobaltColors.drk800,
            notificationBackground: cobaltColors.secondaryBackground,
            badgeBackground: cobaltColors.secondaryBackground,
            badgeColor: cobaltColors.secondary,
          },
        },
        danger: {
          disabledFlood: cobaltColors.drk200,
          badgeBackground: cobaltColors.dangerFaded,
          light: {
            alertColor: cobaltColors.drk800,
            alertBackground: cobaltColors.dangerBackground,
            notificationColor: cobaltColors.drk800,
            notificationBackground: cobaltColors.dangerBackground,
            badgeBackground: cobaltColors.dangerBackground,
            badgeColor: cobaltColors.danger,
          },
        },
        warning: {
          disabledFlood: cobaltColors.drk200,
          badgeBackground: cobaltColors.warningFaded,
          light: {
            alertColor: cobaltColors.drk800,
            alertBackground: cobaltColors.warningBackground,
            notificationColor: cobaltColors.drk800,
            notificationBackground: cobaltColors.warningBackground,
            badgeBackground: cobaltColors.warningBackground,
            badgeColor: cobaltColors.warning,
          },
        },
        success: {
          disabledFlood: cobaltColors.drk200,
          badgeBackground: cobaltColors.successFaded,
          light: {
            alertColor: cobaltColors.drk800,
            alertBackground: cobaltColors.successBackground,
            notificationColor: cobaltColors.drk800,
            notificationBackground: cobaltColors.successBackground,
            badgeBackground: cobaltColors.successBackground,
            badgeColor: cobaltColors.success,
          },
        },
      },
      pagination: {
        text: cobaltColors.drk800,
        disabledText: cobaltColors.drk200,
      },
      body: {
        lineHeight: '18px',
        color: cobaltColors.drk800,
      },
      typography: {
        header: {
          10: {
            fontSize: '13px',
          },
          20: {
            fontSize: '14px',
          },
        },
      },
      input: {
        border: `1px solid ${cobaltColors.secondary}`,
        sm: {
          padding: '4px 7px',
        },
        md: {
          height: '30px',
          padding: '8px 10px',
          iconTop: '7px',
        },
        lg: {
          padding: '11px 16px 13px',
        },
      },
      checkbox: {
        stackedSpacing: '10px',
      },
      modal: {
        header: {
          borderColor: cobaltColors.lt800,
          padding: '15px',
          color: cobaltColors.drk800,
        },
        body: {
          borderBottom: cobaltColors.lt800,
          padding: '15px',
          color: cobaltColors.drk800,
        },
        footer: {
          borderColor: cobaltColors.lt800,
          padding: '15px',
        },
      },
      textarea: {
        backgroundDisabled: cobaltColors.secondaryBackground,
        color: cobaltColors.drk800,
        padding: '6px 12px',
        disabled: {
          borderColor: cobaltColors.secondaryFaded,
        },
      },
      panel: {
        headerBorderColor: cobaltColors.drk400,
        bodyBackgroundColor: cobaltColors.lt200,
        bodyBorderColor: cobaltColors.drk400,
      },
      badge: {
        borderRadius: '4px',
        fontSize: '15px',
        sm: {
          borderRadius: '4px',
          fontSize: '12px',
          padding: '4px 8px 3px',
        },
        md: {
          borderRadius: '4px',
          fontSize: '15px',
          padding: '4px 8px 3px',
        },
        lg: {
          borderRadius: '4px',
          fontSize: '18px',
          padding: '4px 8px 3px',
        },
      },
      alert: {
        borderRadius: '1px',
        fontWeight: 'bold',
        lightFontWeight: '400',
      },
      card: {
        borderColor: cobaltColors.secondaryHover,
      },
      popover: {
        color: cobaltColors.drk800,
        borderColor: cobaltColors.lt800,
        boxShadow: `0 0 5px ${cobaltColors.lt800}`,
      },
      tooltip: {
        background: cobaltColors.drk800,
      },
      common: {
        md: {
          padding: '8px 16px',
        },
      },
      table: {
        border: `1px solid ${cobaltColors.lt800}`,
        header: {
          borderBottomColor: cobaltColors.drk800,
          color: cobaltColors.drk800,
        },
        row: {
          borderBottomColor: cobaltColors.drk400,
          highlightColor: cobaltColors.highlight200,
          hoverColor: cobaltColors.lt200,
        },
      },
      tabs: {
        bottomBorderWidth: '4px',
        padding: '0 0 4px 0',
        margin: '16px 16px 0 16px',
      },
      copyToClipboard: {
        color: cobaltColors.drk800,
      },
      navbar: {
        height: '64px',
        padding: '0 45px ',
        borderTop: '',
        borderBottom: '',
        color: cobaltColors.drk800,
      },
      tabnav: {
        background: cobaltColors.highlight200,
        borderTop: 'none',
        borderBottom: `1px solid ${cobaltColors.lt800}`,
        color: cobaltColors.drk800,
        tab: {
          margin: '0 56px 0 0',
        },
        activetab: {
          color: cobaltColors.drk800,
        },
        tabDropdown: {
          color: cobaltColors.drk800,
        },
      },
      spinner: {
        backgroundColor: cobaltColors.lt800,
      },
      itemContainer: {
        borderColor: cobaltColors.lt800,
      },
      select: {
        multiSelect: {
          sm: {
            borderRadius: '4px',
          },
          md: {
            borderRadius: '4px',
          },
          lg: {
            borderRadius: '4px',
          },
        },
      },
      fileUpload: {
        fontSize: '14px',
        dropZone: {
          color: cobaltColors.secondaryHover,
        },
      },
    },
  },
  'Cobalt',
);
