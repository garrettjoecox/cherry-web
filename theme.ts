import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        bg: "red.200",
      },
      '#__next': {
        minHeight: '100vh',
      }
    },
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito",
  },
});
