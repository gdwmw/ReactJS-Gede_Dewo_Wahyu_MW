import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import LanguageChangeButton from "./components/buttons/LanguageChangeButton";

export default function App() {
  const [language, setLanguage] = useState("inggris");
  return (
    <>
      <Header
        languageProps={language}
        languageChangeButtonProps={
          <LanguageChangeButton
            languageProps={language}
            onClickENProps={() => {
              setLanguage("inggris");
            }}
            onClickIDProps={() => {
              setLanguage("indonesia");
            }}
          />
        }
      />
      <Main languageProps={language} />
      <Footer languageProps={language} />
    </>
  );
}
