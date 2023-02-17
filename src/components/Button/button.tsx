import React, { FC } from "react";
import cn from "clsx";
import "./button.style.scss";
interface ButtonProps {
  type: "primary" | "success" | "warning" | "danger";
  bordered: boolean;
  text: string;
  size: "small" | "medium";
}

export const Button: FC<ButtonProps> = ({
  type,
  bordered,
  text = "Some btn text",
  size = "medium",
}) => {
  return (
    <span
      className={cn({
        "btn-bordered": bordered,
      })}
    >
      <button
        className={cn("btn", {
          [`btn-${type}`]: type,
          [`btn-${size}`]: size,
        })}
      >
        {text}
      </button>
    </span>
  );
};
