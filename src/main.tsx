import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles } from "./styledComponent/GlobalStyles.tsx";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styledComponent/Theme.styled.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
);
