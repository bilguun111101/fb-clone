import { HeaderProvider } from "./src/context";
// import ThemeProvider from "./src/context/theme";
import Stack from "./src/navigators/Stack";

export default function App() {
  return (
    <HeaderProvider>
      {/* <ThemeProvider> */}
      <Stack />
      {/* </ThemeProvider> */}
    </HeaderProvider>
  );
}
