import { useTranslation } from "react-i18next";
import { useChangeLang, useGetLang } from "./hooks/useChangeLang";
import { Button } from "antd";
import { Typography } from "./components/Typography/typography";
import Tooltip from "./components/Tooltip/Tooltip";
import ButtonGroup from "./components/Button/buttonGroup";
import { ReactComponent as PinIcon } from "./assets/img/pin.svg";
import {ReactComponent as HeartIcon} from "./assets/img/heart.svg";
import {ReactComponent as IconIcon} from "./assets/img/icon.svg";
import {ReactComponent as SettingIcon} from "./assets/img/setting.svg"
import {useState} from "react"

const icons = [
  {id: 0, icon: PinIcon },
  {id:1, icon: HeartIcon},
  {id:2, icon:IconIcon},
  {id:3, icon:SettingIcon},
]
function App() {
    const { t } = useTranslation();
    const { changeToAz, changeToEn } = useChangeLang();
    const { lang } = useGetLang();

    return (
        <div className="App">
            
         <ButtonGroup type="icon" icons={icons}
         />
            
        </div>
    );
}

export default App;
