import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
/* eslint-disable no-restricted-imports */
import { defineConfig } from 'unocss';

export default defineConfig({
  theme: {
    colors: {
      body: '#f3f3f3',
      cnxt_black: '#000300',
      cnxt_navy: '#081d42',
      cnxt_red: '#e80911',
      cnxt_blue: '#053c9c',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      turquoise: '#1DE3EB',
      punch: '#b30205',
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Roboto',
      },
    }),
  ],
});