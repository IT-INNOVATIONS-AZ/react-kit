import { useTranslation } from "react-i18next";
import { useChangeLang, useGetLang } from "./hooks/useChangeLang";
import { Button } from "./components/Button/button";
import { Typography } from "./components/Typography/typography";
import Tooltip from "./components/Tooltip/Tooltip";
import './assets/scss/main.scss'
function App() {
    const { t } = useTranslation();
    const { changeToAz, changeToEn } = useChangeLang();
    const { lang } = useGetLang();

    return (
        <div className="App">
            <div>
                 <Button type="primary" text="primary"  ></Button> 
            <Button type="success" text="success" ></Button>
            <Button type="warning" text="warning" ></Button>
            <Button type="danger"text="danger" ></Button>
            <Button type="primary" bordered text="primary"  ></Button> 
            <Button type="success" bordered text="success"  ></Button>
            <Button type="warning" bordered text="warning"  ></Button>
            <Button type="danger" bordered text="danger" ></Button>
            </div>
           


             <Button type="primary" text="primary"  size="small"></Button> 
            <Button type="success" text="success" size="small"></Button>
            <Button type="warning" text="warning" size="small" ></Button>
            <Button type="danger"text="danger" size="small" ></Button>
            <Button type="primary" bordered text="primary"  size="small"></Button> 
            <Button type="success" bordered text="success"  size="small"></Button>
            <Button type="warning" bordered text="warning"  size="small"></Button>
            <Button type="danger" bordered text="danger"  size="small"></Button>
        </div>
    );
}

export default App;
