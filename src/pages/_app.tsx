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
  "#faefef",
  "#efdcdc",
  "#e1b5b4",
  "#d58b8a",
  "#ca6866",
  "#c55250",
  "#c24644",
  "#ac3836",
  "#9a302f",
  "#872727",
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
