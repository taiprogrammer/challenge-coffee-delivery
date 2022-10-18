import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default.styles";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}
