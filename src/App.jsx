import { ThemeProvider } from "styled-components";
import { theme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "./i18n";

import { useTranslation } from "react-i18next";
import CustomNavbar from "./components/ui/navbar/CustomNavbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Press from "./pages/press/Press";
import OurBlog from "./pages/ourBlog/OurBlog";
import Blog from "./components/ourBlogComponents/blog/Blog";
import Detection from "./pages/Detection/DetectionPage";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<OurBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/detection" element={<Detection />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
