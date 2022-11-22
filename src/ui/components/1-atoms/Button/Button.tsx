import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";
// import { Icon } from "ui/components"

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  title?: string;
  label?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: unknown) => void;
  icon?: unknown;
  className?: string;
  text?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ title, type, disabled, onClick, text }) => (
  <button
    className={classNames(styles.Button)}
    type={type || "button"}
    title={title}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);
