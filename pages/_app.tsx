import 'pricingRoot/styles/globals.css'
import type { AppProps } from 'next/app'
import '@fontsource/inter/400.css'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bluesClues: {
      100: "#caf0f8",
      200: "#90e0ef",
      300: "#6188b8",
      400: "#2d6dbb",
      500: "#286abd",
    },
    fonts: {
      heading: `Inter', sans-serif`,
      text: `Inter', sans-serif`,
    },
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
