import { HashRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import MainPage from "./pages/mainpage/MainPage";
import Skills from "./pages/skills/Skills";

export function DesktopView() {
  return (
    <MainPage>
      <HashRouter>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </MainContent>
      </HashRouter>
    </MainPage>
  );
}

const MainContent = styled.div`
  padding: 45px;
  width: 100%;
  overflow-y: scroll;
`;
