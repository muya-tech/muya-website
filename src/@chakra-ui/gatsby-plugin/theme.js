import { extendTheme } from '@chakra-ui/react'
const overrides = {
  fonts: {
    heading: `'Manrope', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    primary: 'purple',
  },
}

const theme = extendTheme(overrides);
export default theme;