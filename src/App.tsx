import { useState } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/Experience/Experience";
import MainPage from "./pages/MainPage/MainPage";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import { ThemeProvider } from "styled-components";
import systemThemes from "./assets/theme/theme";
import GlobalStyle from "./assets/global/global.style";

function App() {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <ThemeProvider theme={systemThemes[theme]}>
      <GlobalStyle />
      <MainPage>
        <HashRouter>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/passions" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </MainContent>
        </HashRouter>
      </MainPage>
    </ThemeProvider>
  );
}

const MainContent = styled.div`
  padding: 45px;
  width: 100%;
`;

export default App;
