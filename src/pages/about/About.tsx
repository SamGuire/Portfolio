import { useTranslation } from "react-i18next";
import { Heading1 } from "../../components/Text/Text";

export default function About() {
  const { t, i18n } = useTranslation();
  return <Heading1>{t("a.b")}</Heading1>;
}
