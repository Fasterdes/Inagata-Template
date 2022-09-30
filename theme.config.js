import { extendTheme } from '@chakra-ui/react';

const themes = extendTheme({
  colors: {
    inagata: {
      primary: '#0045F5',
      warning: '#FFCC00',
      danger: '#FF3C30',
      success: '#3CD278',
      black500: '#1A1A1A',
      gray500: '#6A737D',
      gray100 : '#EDEDED',
      gray50: '#FCFCFC',
    },
  },
});

export default themes;
