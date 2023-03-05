import styled from "styled-components";
import theme, { ISystemTheme } from "../../assets/theme/theme";
export default function MainPage() {
  return <MainContainer {...theme}></MainContainer>;
}

const MainContainer = styled.div<ISystemTheme>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.background};
`;
