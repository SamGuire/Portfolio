import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {
  JavaScriptIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from "../../assets/dev-icons/dev-icons";
import { InfoPaper } from "../../components/paper/Paper";
import { Text, Title } from "../../components/Text/Text";

interface IPaperContentProps {
  t: TFunction;
}

const PassionContent = ({ t }: IPaperContentProps) => (
  <ul>
    <li>
      <Text>{t("about.passions.tech")}</Text>
    </li>
    <li>
      <Text>{t("about.passions.videogames")}</Text>
    </li>
    <li>
      <Text>{t("about.passions.sports")}</Text>
    </li>
  </ul>
);

const CareerInterestContent = ({ t }: IPaperContentProps) => (
  <ul>
    <li>
      <Text>{t("about.careerInterest.five")}</Text>
    </li>
    <li>
      <Text>{t("about.careerInterest.ten")}</Text>
    </li>
    <li>
      <Text>{t("about.careerInterest.twenty")}</Text>
    </li>
  </ul>
);

const LearningContent = () => (
  <ProgrammingLanguageList>
    <ReactIcon />
    <TypeScriptIcon />
    <JavaScriptIcon />
    <PythonIcon />
    <PostgreSQLIcon />
    <MongoDBIcon />
  </ProgrammingLanguageList>
);

export default function Education() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("about.title")}</Title>
      <InfoPaper title={t("about.passions.subtitle")}>
        <PassionContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("about.careerInterest.subtitle")}>
        <CareerInterestContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("about.currentlyLearning.subtitle")}>
        <LearningContent />
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
