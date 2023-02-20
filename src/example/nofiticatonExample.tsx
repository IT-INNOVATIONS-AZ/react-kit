import React from "react";
import { Button, notification } from "antd";
import GirlImage from "../assets/img/72.png";

const openNotification = () => {
    const config = {
        message: "Notification Title",
        description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        onClick: () => {
            console.log("Notification Clicked!");
        },
        duration: 3000,
    };
    notification.open(config);
    notification.success(config);
    notification.error(config);
    notification.info(config);
    notification.warning(config);
    notification.warning({
        ...config,
        icon: <img src={GirlImage} alt="" />,
    });
};
const NofiticatonExample = () => {
    return (
        <Button type="primary" onClick={openNotification}>
            Open the notification box
        </Button>
    );
};

export default NofiticatonExample;
