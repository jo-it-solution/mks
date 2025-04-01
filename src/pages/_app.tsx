import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

import type { AppProps } from "next/app";
import { Notifications } from "@mantine/notifications";
import {
  createTheme,
  MantineProvider,
  MantineColorsTuple,
} from "@mantine/core";

const base: MantineColorsTuple = [
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffae00",
  "#ffffff",
];

const theme = createTheme({
  colors: {
    primary: base,
  },
  primaryColor: "primary",
  primaryShade: { light: 9, dark: 9 },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}
