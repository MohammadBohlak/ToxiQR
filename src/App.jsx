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
import Footer from "./components/ui/footer/Footer";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Instructions from "./pages/instructions/Instructions";
import JoinUs from "./pages/joinUs/JoinUs";

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
          <Route path="/" index element={<Home />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<OurBlog />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
