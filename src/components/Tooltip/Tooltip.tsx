import React, { FC } from "react";
import { Tooltip as AntTooltip } from "antd";
import cn from "clsx";
import "./tooltip.style.scss";

interface TooltipProps {
    children?: React.ReactNode;
    title: string;
    body?: string;
    placement?: "top" | "bottom" | "left" | "right";
}

const Tooltip: FC<TooltipProps> = ({ children, title, body, placement = "top" }) => {
    return (
        <>
            <AntTooltip
                prefixCls="react-kit-tooltip"
                placement={placement}
                title={
                    <>
                        <p
                            className={cn({
                                [`react-kit-tooltip-title-border-t-rl`]: Boolean(body),
                            })}
                        >
                            {title}
                        </p>

                        {body && <div className="react-kit-tooltip-inner-body">{body}</div>}
                    </>
                }
            >
                {children}
            </AntTooltip>
        </>
    );
};

export default Tooltip;
