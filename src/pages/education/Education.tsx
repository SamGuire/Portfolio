import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import transcriptPDF from "../../assets/pdfs/transcript-degree-completed.pdf";
import { InfoPaper } from "../../components/paper/Paper";
import { Text, Title } from "../../components/Text/Text";

interface IPaperContentProps {
  t: TFunction;
}

const SummaryContent = ({ t }: IPaperContentProps) => (
  <ul>
    <li>
      <Text>{t("education.summary.university")}</Text>
    </li>
    <li>
      <Text>{t("education.summary.degree")}</Text>
    </li>
    <li>
      <Text>{t("education.summary.cgpa")}</Text>
    </li>
    <li>
      <Text>{t("education.summary.notice")}</Text>
    </li>
  </ul>
);

const TranscriptContent = ({ t }: IPaperContentProps) => (
  <iframe
    title="My transcript"
    src={transcriptPDF}
    width="100%"
    height="600px"
  ></iframe>
);

export default function Education() {
  const { t } = useTranslation();
  return (
    <>
      <Title>{t("education.title")}</Title>
      <InfoPaper title={t("education.summary.subtitle")}>
        <SummaryContent t={t} />
      </InfoPaper>
      <InfoPaper title={t("education.transcript")}>
        <TranscriptContent t={t} />
      </InfoPaper>
    </>
  );
}
