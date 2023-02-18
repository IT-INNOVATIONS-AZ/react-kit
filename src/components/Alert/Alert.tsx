import React, { FC } from "react";
import { Alert as AntAlert } from "antd";
import cn from "clsx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiMessageError, BiErrorCircle } from "react-icons/bi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import "./alert.style.scss";

interface AlertProps {
    message: string;
    type: "warning" | "success" | "info" | "error";
    closeable?: void;
    inline?: boolean;
    showIcon?: boolean;
    icon?: boolean;
    noColor?: boolean;
}

const Alert: FC<AlertProps> = ({ type, message, inline = false, icon = false, noColor = false }) => {
    const icons = {
        warning: <BiMessageError />,
        success: <BsFillHandThumbsUpFill />,
        info: <AiOutlineInfoCircle />,
        error: <BiErrorCircle />,
    };
    return (
        <AntAlert
            prefixCls="react-kit-alert"
            message={message}
            type={type}
            showIcon={icon}
            icon={icons[type]}
            closable
            className={cn({
                [`react-kit-alert--inline`]: inline,
                [`react-kit-alert--no-color`]: noColor,
            })}
        />
    );
};

export default Alert;
