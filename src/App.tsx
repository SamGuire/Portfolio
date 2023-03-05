import React from "react";
import { Router, Routes, Route, HashRouter } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/Experience/Experience";
import MainPage from "./pages/MainPage/MainPage";
import Passions from "./pages/passions/Passions";
import Skills from "./pages/skills/Skills";

function App() {
  return (
    <MainPage>
      <HashRouter>
        <Sidebar />
        <MainContent>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/passions" element={<Passions />} />
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
`;

export default App;
