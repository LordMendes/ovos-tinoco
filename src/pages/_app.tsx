import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import Fonts from "../styles/fonts";
import { NavbarContextProvider } from "../contexts/NavbarDropdownMenuContext";

import "keen-slider/keen-slider.min.css"
import "../styles/styles.css"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NavbarContextProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </NavbarContextProvider>
  );
}

export default MyApp;
