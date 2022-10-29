import { ThemeProvider } from "styled-components";
import { DeliveryContextProvider } from "./contexts/DeliveryContext";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default.styles";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <DeliveryContextProvider>
        <Router />
      </DeliveryContextProvider>
    </ThemeProvider>
  );
}
