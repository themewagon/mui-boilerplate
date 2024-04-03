import { PaletteColorOptions, PaletteOptions } from '@mui/material/styles';
import { blue, green, grey, lightBlue, orange, purple, red } from './colors';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral?: PaletteColorOptions;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
  interface Palette {
    neutral: PaletteColor;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
}

const palette: PaletteOptions = {
  action: {
    active: grey[500],
    hover: grey[50],
    selected: grey[100],
    disabled: grey[400],
    disabledBackground: grey[200],
    focus: grey[300],
  },
  neutral: {
    lighter: grey[100],
    light: grey[700],
    main: grey[800],
    dark: grey[900],
    darker: grey[900],
    contrastText: '#ffffff',
  },
  primary: {
    lighter: blue[50],
    light: blue[400],
    main: blue[500],
    dark: blue[600],
    darker: blue[900],
  },
  secondary: {
    lighter: purple[50],
    light: purple[300],
    main: purple[500],
    dark: purple[700],
    darker: purple[900],
  },
  error: { lighter: red[50], light: red[300], main: red[500], dark: red[600], darker: red[900] },
  warning: {
    lighter: orange[50],
    light: orange[400],
    main: orange[500],
    dark: orange[700],
    darker: orange[900],
    contrastText: '#ffffff',
  },
  success: {
    lighter: green[50],
    light: green[400],
    main: green[500],
    dark: green[700],
    darker: green[900],
  },
  info: {
    lighter: lightBlue[50],
    light: lightBlue[300],
    main: lightBlue[500],
    dark: lightBlue[700],
    darker: lightBlue[900],
    contrastText: '#ffffff',
  },
  grey,
  text: {
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[400],
  },
};

export default palette;
