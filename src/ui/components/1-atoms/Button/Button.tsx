import React, { ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
// import { Icon } from "ui/components"

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  title?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: unknown) => void;
  icon?: unknown;
  className?: string;
  children?: ReactNode;
  btnTypeStyle?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  disabled,
  onClick,
  label,
  btnTypeStyle,
}) => (
  <button
    className={classNames(styles.Button, btnTypeStyle)}
    type={type || "button"}
    title={title}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
