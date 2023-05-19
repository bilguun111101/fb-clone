import { PropsWithChildren } from "react";
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from "react-native-paper";

const theme = {
  // ...DefaultTheme,
  colors: {
    blue: {
      primary: "#1778F2",
    },
    grey: {
      primary: "#EAEDED",
      button: "#EAEDED",
      text: "#EAEDED",
    },
  },
};

export default theme;

// export default function ThemeProvider({ children }: PropsWithChildren) {
// return <PaperProvider theme={theme}>{children}</PaperProvider>;
// }
