import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./i18n";

import { useTranslation } from "react-i18next";
import CustomNavbar from "./components/ui/navbar/CustomNavbar";
import Home from "./pages/home/Home";

function App() {
  // const lang = useSelector((state) => state.lang.language)
  const { i18n } = useTranslation();
  // const theme = useSelector((state) => state.theme);
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div dir={direction}>
      <ThemeProvider theme={{ ...theme, lang: i18n.language }}>
        <CustomNavbar />
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
