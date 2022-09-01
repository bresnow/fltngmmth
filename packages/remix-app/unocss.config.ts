import { defineConfig, presetWind, presetIcons } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'
import { presetDue } from 'duecss'

export default defineConfig({
  shortcuts: {
    link: 'text-primary-500 hover:underline',
  },
  theme: {
    colors: {
      primary: {
        DEFAULT: '#E57166',
        50: '#FFFFFF',
        100: '#FDF2F1',
        200: '#F7D2CF',
        300: '#F1B2AC',
        400: '#EB9189',
        500: '#E57166',
        600: '#DD4436',
        700: '#BB2D20',
        800: '#8B2218',
        900: '#5B160F',
      },
      accent: {
        DEFAULT: '#27282A',
        50: '#808389',
        100: '#76797F',
        200: '#626469',
        300: '#4E5054',
        400: '#3B3C3F',
        500: '#27282A',
        600: '#0C0C0D',
        700: '#000000',
        800: '#000000',
        900: '#000000',
      },
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
    breakpoints: {
      sm: '500px',
      md: '614px',
      mdl: '1002px',
      lg: '1024px',
      lgx: '1092px',
      xl: '1280px',
    },
  },
  transformers: [transformerDirective()],
  presets: [presetWind(), presetDue(), presetIcons()],
})
