import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Helvetica Neue",
    heading: "Helvetica Neue",
  },
  colors: {
    gray: {
      "700": "#333333",
      "600": "#3B3B3B",
    },
    blue: {
      "500": "#0638AE",
      "300": "#86A3E8",
    },
    yellow: {
      "500": "#FEC400",
    },
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.700",
      },
    },
  },
});
