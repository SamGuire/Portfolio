import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import About from "./pages/about/About";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience";
import MainPage from "./pages/mainpage/MainPage";
import Skills from "./pages/skills/Skills";

export function MobileView() {
  return (
    <MainPage>
      <MainContent>
        <NavBar />
        <Experience />
        <Skills />
        <Education />
        <About />
      </MainContent>
    </MainPage>
  );
}

const MainContent = styled.div`
  padding: 45px;
  width: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;
