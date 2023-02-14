import { useTranslation } from "react-i18next";
import { useChangeLang, useGetLang } from "./hooks/useChangeLang";
import { Button } from "antd";
function App() {
  const { t } = useTranslation();
  const { changeToAz, changeToEn } = useChangeLang();
  const { lang } = useGetLang();

  return (
    <div className="App">
      <h1>{t("hello")}</h1>
      <Button onClick={changeToAz}>Az</Button>
      <Button onClick={changeToEn}>En</Button>
    </div>
  );
}

export default App;
