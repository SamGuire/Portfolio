import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  AzureIcon,
  CSharpIcon,
  CSSIcon,
  ExpressIcon,
  GitHubIcon,
  HTMLIcon,
  JavaScriptIcon,
  MaterialUIIcon,
  MochaIcon,
  MongoDBIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
  UbuntuLinuxIcon,
  VisualStudioCodeIcon,
  VisualStudioIcon,
  WindowsIcon,
} from "../../../assets/dev-icons/dev-icons";
import { InfoPaper } from "../../components/paper/Paper";
import { Title } from "../../components/text/Text";

interface IPaperContentProps {
  t: TFunction;
}

const ToolsContentList = () => (
  <ProgrammingLanguageList>
    <VisualStudioCodeIcon isMobile />
    <VisualStudioIcon isMobile />
    <GitHubIcon isMobile />
    <AzureIcon isMobile />
    <WindowsIcon isMobile />
    <UbuntuLinuxIcon isMobile />
  </ProgrammingLanguageList>
);
const ToolsContent = ({ t }: IPaperContentProps) => <ToolsContentList />;

const DatabaseBackendContentList = () => (
  <ProgrammingLanguageList>
    <NodeIcon isMobile />
    <PostgreSQLIcon isMobile />
    <MongoDBIcon isMobile />
  </ProgrammingLanguageList>
);
const DatabaseBackendContent = ({ t }: IPaperContentProps) => (
  <DatabaseBackendContentList />
);

const ProgrammingContentList = () => (
  <ProgrammingLanguageList>
    <TypeScriptIcon isMobile />
    <JavaScriptIcon isMobile />
    <PythonIcon isMobile />
    <CSharpIcon isMobile />
    <HTMLIcon isMobile />
    <CSSIcon isMobile />
    <ExpressIcon isMobile />
    <MaterialUIIcon isMobile />
    <MochaIcon isMobile />
    <ReactIcon isMobile />
  </ProgrammingLanguageList>
);

const ProgrammingContent = ({ t }: IPaperContentProps) => (
  <ProgrammingContentList />
);

export default function Skills() {
  const { t } = useTranslation();
  return (
    <SkillsContainer>
      <Title>{t("skills.title")}</Title>
      <InfoPaper title={t("skills.programmingLanguages")}>
        <ProgrammingContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("skills.databaseBackend")}>
        <DatabaseBackendContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("skills.devTools")}>
        <ToolsContent t={t} />
      </InfoPaper>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  margin: 5% 0;
`;
const ProgrammingLanguageList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
