import styled from "styled-components";
import theme, { ISystemTheme } from "../../assets/theme/theme";

interface MainPageProps {
  children: React.ReactElement;
}
export default function MainPage(props: MainPageProps) {
  return <MainContainer {...theme}>{props.children}</MainContainer>;
}

const MainContainer = styled.div<ISystemTheme>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.background};
  display: flex;
`;
