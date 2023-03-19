import i18n from "i18next";
import BackEnd from "i18next-http-backend";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18n
  .use(BackEnd)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/Portfolio/locales/{{lng}}/translation.json",
    },
    fallbackLng: "en",
    keySeparator: ".",
    interpolation: { escapeValue: false },
  });
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
