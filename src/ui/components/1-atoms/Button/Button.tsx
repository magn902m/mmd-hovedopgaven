import React from "react";
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
}

export const Button: React.FC<ButtonProps> = ({
  title,
  type,
  disabled,
  onClick,
  label,
}) => (
  <button
    className={classNames(styles.Button)}
    type={type || "button"}
    title={title}
    disabled={disabled}
    onClick={onClick}
  >
    {label}
  </button>
);
