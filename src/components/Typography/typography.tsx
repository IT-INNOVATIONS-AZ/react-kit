import React from "react";
import { Typography as AntTypography } from "antd";
import type { TypographyProps } from "antd";
import cn from "clsx";
import "./typography.stye.scss";

interface TypographyProp {
  children?: React.ReactNode;
  className?: string;
  type: "span" | "p" | "h" | "a";
  color?: "default" | "subheading" | "important";
  size?: "12" | "14" | "16" | "18" | "20" | "22" | "24";
}

const { Text, Paragraph, Title, Link } = AntTypography;

export const Typography: React.FC<TypographyProps & TypographyProp> = (
  { children, className, type, color = "default", size = "16" },
  ...props
) => {
  const Component =
    type === "h"
      ? Title
      : type === "p"
      ? Paragraph
      : type === "a"
      ? Link
      : Text;
  return (
    <Component
      className={cn(
        "react-kit-typography",
        {
          [`react-kit-typography--${color}`]: color,
          [`react-kit-typography--${size}`]: size,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
