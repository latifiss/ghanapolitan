'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'cheltenham-italic';
  src: url('/fonts/cheltenham/cheltenham-italic-400.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-italic-400.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-italic-400.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: 'cheltenham-italic';
  src: url('/fonts/cheltenham/cheltenham-italic-500.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-italic-500.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-italic-500.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'cheltenham-italic';
  src: url('/fonts/cheltenham/cheltenham-italic-700.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-italic-700.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-italic-700.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'cheltenham-italic';
  src: url('/fonts/cheltenham/cheltenham-italic-800.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-italic-800.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-italic-800.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'cheltenham-normal';
  src: url('/fonts/cheltenham/cheltenham-normal-400.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-normal-400.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-normal-400.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'cheltenham-normal';
  src: url('/fonts/cheltenham/cheltenham-normal-500.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-normal-500.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-normal-500.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'cheltenham-normal';
  src: url('/fonts/cheltenham/cheltenham-normal-700.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-normal-700.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-normal-700.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'cheltenham-normal';
  src: url('/fonts/cheltenham/cheltenham-normal-800.woff2') format('woff2'),
       url('/fonts/cheltenham/cheltenham-normal-800.woff') format('woff'),
       url('/fonts/cheltenham/cheltenham-normal-800.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'franklin-italic';
  src: url('/fonts/franklin/franklin-italic-500.woff2') format('woff2'),
       url('/fonts/franklin/franklin-italic-500.woff') format('woff'),
       url('/fonts/franklin/franklin-italic-500.ttf') format('truetype');
  font-weight: 500;
  font-style: italic;
}

@font-face {
  font-family: 'franklin-italic';
  src: url('/fonts/franklin/franklin-italic-600.woff2') format('woff2'),
       url('/fonts/franklin/franklin-italic-600.woff') format('woff'),
       url('/fonts/franklin/franklin-italic-600.ttf') format('truetype');
  font-weight: 600;
  font-style: italic;
}

@font-face {
  font-family: 'franklin-italic';
  src: url('/fonts/franklin/franklin-italic-700.woff2') format('woff2'),
       url('/fonts/franklin/franklin-italic-700.woff') format('woff'),
       url('/fonts/franklin/franklin-italic-700.ttf') format('truetype');
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: 'franklin-italic';
  src: url('/fonts/franklin/franklin-italic-800.woff2') format('woff2'),
       url('/fonts/franklin/franklin-italic-800.woff') format('woff'),
       url('/fonts/franklin/franklin-italic-800.ttf') format('truetype');
  font-weight: 800;
  font-style: italic;
}

@font-face {
  font-family: 'franklin-italic';
  src: url('/fonts/franklin/franklin-italic-900.woff2') format('woff2'),
       url('/fonts/franklin/franklin-italic-900.woff') format('woff'),
       url('/fonts/franklin/franklin-italic-900.ttf') format('truetype');
  font-weight: 900;
  font-style: italic;
}

@font-face {
  font-family: 'franklin-normal';
  src: url('/fonts/franklin/franklin-normal-500.woff2') format('woff2'),
       url('/fonts/franklin/franklin-normal-500.woff') format('woff'),
       url('/fonts/franklin/franklin-normal-500.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'franklin-normal';
  src: url('/fonts/franklin/franklin-normal-600.woff2') format('woff2'),
       url('/fonts/franklin/franklin-normal-600.woff') format('woff'),
       url('/fonts/franklin/franklin-normal-600.ttf') format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'franklin-normal';
  src: url('/fonts/franklin/franklin-normal-700.woff2') format('woff2'),
       url('/fonts/franklin/franklin-normal-700.woff') format('woff'),
       url('/fonts/franklin/franklin-normal-700.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'franklin-normal';
  src: url('/fonts/franklin/franklin-normal-800.woff2') format('woff2'),
       url('/fonts/franklin/franklin-normal-800.woff') format('woff'),
       url('/fonts/franklin/franklin-normal-800.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: 'franklin-normal';
  src: url('/fonts/franklin/franklin-normal-900.woff2') format('woff2'),
       url('/fonts/franklin/franklin-normal-900.woff') format('woff'),
       url('/fonts/franklin/franklin-normal-900.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
}

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'franklin-normal', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
        line-height: 1.5;
        background-color: ${({ theme }) => theme.colors.background};
        padding: 0;
        margin: 0;
    }

    :root {
        --space-xs: 4px;
        --space-sm: 8px;
        --space-base: 12px;
        --space-md: 16px;
        --space-wide: 20px;
        --space-lg: 24px;
        --space-xl: 32px;
    }

    :root {
        --body-font: 'franklin-normal', -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
    }

    :root {
    --gp-alabaster: rgba(248, 248, 248, 1);
    --gp-alto: rgba(221, 221, 221, 1);
    --gp-aqua-haze: rgba(224, 239, 236, 1);
    --gp-beauty-bush: rgba(243, 207, 209, 1);
    --gp-black: rgba(0, 0, 0, 1);
    --gp-boston-blue: rgba(56, 115, 184, 1);
    --gp-champagne: rgba(250, 229, 209, 1);
    --gp-chicago: rgba(87, 87, 86, 1);
    --gp-edgewater: rgba(186, 220, 213, 1);
    --gp-friar-gray: rgba(123, 123, 122, 1);
    --gp-gallery: rgba(238, 238, 238, 1);
    --gp-geyser: rgba(212, 220, 230, 1);
    --gp-gray: rgba(144, 144, 144, 1);
    --gp-gray-nickel: rgba(178, 178, 177, 1);
    --gp-heavy-metal: rgba(31, 32, 29, 1);
    --gp-korma: rgba(138, 76, 16, 1);
    --gp-manhattan: rgba(244, 198, 154, 1);
    --gp-nile-blue: rgba(25, 49, 77, 1);
    --gp-rock-blue: rgba(161, 178, 200, 1);
    --gp-milano-red: rgb(255, 0, 0);
    --gp-silver: rgba(204, 203, 203, 1);
    --gp-smalt-blue: rgba(78, 142, 127, 1);
    --gp-storm-dust: rgba(111, 111, 110, 1);
    --gp-selective-yellow: rgba(255, 187, 0, 1);
    --gp-tonys-pink: rgba(228, 149, 154, 1);
    --gp-totem-pole: rgba(155, 11, 20, 1);
    --gp-tuatara: rgba(60, 60, 59, 1);
    --gp-white: rgba(255, 255, 255, 1);
    --gp-primary: #04777b;

    --gp-font-xs: 10.875px;
    --gp-font-sm: 12px;
    --gp-font-md: 14px;
    --gp-font-lg: 16px;
    --gp-font-xl: 18px;
    --gp-font-2xl: 20px;
    --gp-font-3xl: 22px;
    --gp-font-4xl: 24px;
    --gp-font-5xl: 26px;
    --gp-font-6xl: 28px;
    --gp-font-7xl: 32px;

    --gp-button-sm: 11px;
    --gp-button-md: 13px;
    --gp-button-lg: 14.5px;
    --gp-heading-1: 22px;
    --gp-heading-2: 18px;
    --gp-heading-3: 14px;
    --gp-link-sm: 12px;
    --gp-link-md: 13px;
    --gp-link-lg: 14px;
  }
`;

export default GlobalStyles;
