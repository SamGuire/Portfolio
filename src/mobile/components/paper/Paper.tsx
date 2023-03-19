import styled from "styled-components";
import { Subtitle } from "../text/Text";

export interface IPaperProps {
  title: string;
  children: React.ReactElement;
}
export function InfoPaper({ title, children }: IPaperProps) {
  return (
    <Paper>
      <Subtitle>{title}</Subtitle>
      {children}
    </Paper>
  );
}

const Paper = styled.div`
  background-color: #373737;
  min-width: 30%;
  min-height: 20%;
  padding: 30px;
  margin: 2% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
