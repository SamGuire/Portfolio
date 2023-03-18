import { createGlobalStyle } from "styled-components";
import { ITheme } from "../theme/theme";

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
  body {
    color: ${({ theme }) => theme.textColor};
    font-family: "apercu",sans-serif;
  }
`;

export default GlobalStyle;
