import { useTranslation } from "react-i18next";
import { useChangeLang, useGetLang } from "./hooks/useChangeLang";
import { Button } from "antd";
import { Typography } from "./components/Typography/typography";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
    const { t } = useTranslation();
    const { changeToAz, changeToEn } = useChangeLang();
    const { lang } = useGetLang();

    return (
        <div className="App">
            <div
                style={{
                    boxSizing: "border-box",
                    padding: "40px",
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Tooltip
                    title="bottom tooltip"
                    placement="bottom"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo."
                >
                    bottom
                </Tooltip>
                <hr />
                <Tooltip
                    title="top tooltip"
                    placement="top"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo."
                >
                    top
                </Tooltip>
                <hr />
                <Tooltip
                    title="right tooltip"
                    placement="right"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo."
                >
                    right
                </Tooltip>
                <hr />
                <Tooltip
                    title="left tooltip"
                    placement="left"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo."
                >
                    left
                </Tooltip>
                <hr />
                <Tooltip
                    title="default tooltip"
                    body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, explicabo."
                >
                    default
                </Tooltip>
            </div>
        </div>
    );
}

export default App;
