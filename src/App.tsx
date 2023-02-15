import { useTranslation } from "react-i18next";
import { useChangeLang, useGetLang } from "./hooks/useChangeLang";
import { Button } from "antd";
import { Typography } from "./components/Typography/typography";

function App() {
  const { t } = useTranslation();
  const { changeToAz, changeToEn } = useChangeLang();
  const { lang } = useGetLang();

  return (
    <div className="App">
      <h1>{t("hello")}</h1>
      <Typography color="subheading" type="h" size="20" level={1}>
        Test
      </Typography>
      <Button onClick={changeToAz}>Az</Button>
      <Button onClick={changeToEn}>En</Button>
    </div>
  );
}

export default App;
