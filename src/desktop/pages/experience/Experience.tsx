import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  AzureIcon,
  CSharpIcon,
  ExpressIcon,
  GitHubIcon,
  JavaScriptIcon,
  MaterialUIIcon,
  MochaIcon,
  NodeIcon,
  PostgreSQLIcon,
  ReactIcon,
  TypeScriptIcon,
  VisualStudioCodeIcon,
  VisualStudioIcon,
} from "../../../assets/dev-icons/dev-icons";
import { InfoPaper } from "../../components/paper/Paper";
import { Text, Title } from "../../components/text/Text";

interface IPaperContentProps {
  t: TFunction;
}

const MacacadiamProgrammingList = () => (
  <ProgrammingLanguageList>
    <TypeScriptIcon />
    <JavaScriptIcon />
    <ReactIcon />
    <MaterialUIIcon />
    <GitHubIcon />
    <VisualStudioCodeIcon />
  </ProgrammingLanguageList>
);
const MacadamianContent = ({ t }: IPaperContentProps) => (
  <>
    <MacacadiamProgrammingList />
    <ul>
      <li>
        <Text>{t("experience.macadamian.details.d1")}</Text>
      </li>
      <li>
        <Text>{t("experience.macadamian.details.d2")}</Text>
      </li>
      <li>
        <Text>{t("experience.macadamian.details.d3")}</Text>
      </li>
    </ul>
  </>
);

const CartoVistaProgrammingList = () => (
  <ProgrammingLanguageList>
    <TypeScriptIcon />
    <CSharpIcon />
    <ReactIcon />
    <PostgreSQLIcon />
    <GitHubIcon />
    <VisualStudioCodeIcon />
    <VisualStudioIcon />
  </ProgrammingLanguageList>
);
const CartoVistaContent = ({ t }: IPaperContentProps) => (
  <>
    <CartoVistaProgrammingList />
    <ul>
      <li>
        <Text>{t("experience.cartovista.details.d1")}</Text>
      </li>
      <li>
        <Text>{t("experience.cartovista.details.d2")}</Text>
      </li>
      <li>
        <Text>{t("experience.cartovista.details.d3")}</Text>
      </li>
      <li>
        <Text>{t("experience.cartovista.details.d4")}</Text>
      </li>
    </ul>
  </>
);

const ESDCProgrammingList = () => (
  <ProgrammingLanguageList>
    <TypeScriptIcon />
    <NodeIcon />
    <ExpressIcon />
    <VisualStudioCodeIcon />
    <AzureIcon />
    <GitHubIcon />
    <MochaIcon />
  </ProgrammingLanguageList>
);

const ESDCContent = ({ t }: IPaperContentProps) => (
  <>
    <ESDCProgrammingList />
    <ul>
      <li>
        <Text>{t("experience.esdc.details.d1")}</Text>
      </li>
      <li>
        <Text>{t("experience.esdc.details.d2")}</Text>
      </li>
      <li>
        <Text>{t("experience.esdc.details.d3")}</Text>
      </li>
    </ul>
  </>
);

export default function Experience() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("experience.title")}</Title>
      <InfoPaper title={t("experience.esdc.subtitle")}>
        <ESDCContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("experience.cartovista.subtitle")}>
        <CartoVistaContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("experience.macadamian.subtitle")}>
        <MacadamianContent t={t} />
      </InfoPaper>
    </>
  );
}

const ProgrammingLanguageList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
  justify-content: space-evenly;
`;
