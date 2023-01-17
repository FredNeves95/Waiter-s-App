import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { router } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyles";
import { useHandleTheme } from "./utils/hooks/useHandleTheme";

import { darkTheme } from "./styles/themes/darkTheme";
import { lightTheme } from "./styles/themes/lightTheme";
import { Header } from "./components/Header/Header";

export const App = () => {
  const { theme, handleTheme } = useHandleTheme();
  const chosenTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={chosenTheme}>
      <Header theme={theme} handleTheme={handleTheme} />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};
