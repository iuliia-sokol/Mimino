import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    headersMain: '#494848',
    subheaderLight: '#B4B4B4',
    textMainDark: '#000000',
    textMainLight: '#FFFFFF',
    textContent: '#7A7A7A',
    textData: '#E5E5E5',
    accent: '#F3C653',
    btnBg: '#000000',
    footerBg: '#0E0C07',
    sectionBg1: '#FFFDEE',
    sectionBg2: '#F0ECD6',
    headerBackdrops: 'rgba(0, 0, 0, 0.65)',
    homePageSectionBackdrop: 'rgba(0, 0, 0, 0.76)',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {},
  fontSizes: {
    xxl: '128px',
    xl: '64px',
    l: '40px',
    m: '36px',
    s: '32px',
    xs: '20px',
    xxs: '16px',
    xxxs: '14px',
  },
  lineHeights: {},
  borders: {},
  radii: {},
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/mimino">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
