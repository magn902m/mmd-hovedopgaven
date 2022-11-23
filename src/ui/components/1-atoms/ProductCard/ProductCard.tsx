import React from "react";
import { Button } from "../Button";
import styles from "./ProductCard.module.scss";
// import { Icon } from "ui/components"

export interface CardProps {
  title?: string;
  text?: React.ReactNode;
  img: string;
}

export const ProductCard: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card_body">
        <img src={props.img} alt="" />
        <h2 className="card_title">{props.title}</h2>
        <p className="card_text">{props.text}</p>
      </div>
      <Button></Button>
    </div>
  );
};
