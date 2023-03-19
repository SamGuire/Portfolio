import styled from "styled-components";
interface MainPageProps {
  children: React.ReactElement;
}
export default function MainPage(props: MainPageProps) {
  return <MainContainer>{props.children}</MainContainer>;
}

const MainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
`;
