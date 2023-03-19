import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./desktop/components/sidebar/Sidebar";
import About from "./desktop/pages/about/About";
import Education from "./desktop/pages/education/Education";
import Experience from "./desktop/pages/experience/Experience";
import MainPage from "./desktop/pages/mainpage/MainPage";
import Skills from "./desktop/pages/skills/Skills";
import { ThemeProvider } from "styled-components";
import systemThemes from "./assets/theme/theme";
import GlobalStyle from "./assets/global/global.style";
import { useMediaQuery } from "react-responsive";
import { DesktopView } from "./desktop/DesktopView";
import { MobileView } from "./mobile/MobileView";

function App() {
  const [theme] = useState<string>("dark");
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <ThemeProvider theme={systemThemes[theme]}>
      <GlobalStyle />
      {isDesktopOrLaptop && <DesktopView />}
      {isTabletOrMobile && <MobileView />}
    </ThemeProvider>
  );
}

export default App;
