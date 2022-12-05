import React, { ReactNode } from "react";
import { Button } from "../Button";
import "./ProductCard.scss";

export interface CardProps {
  title?: string;
  text?: React.ReactNode;
  img: string;
  btnLabel: any;
  onClick?: (e: unknown) => void;
  id: number;
}

export const ProductCard: React.FC<CardProps> = (props) => {
  return (
    <div className="nets_card">
      <img className="nets_card_image" src={props.img} />
      <h3 className="nets_card_title">{props.title}</h3>
      <p className="nets_card_text">{props.text}</p>
      <Button
        className="nets_card_button"
        label={props.btnLabel}
        onClick={props.onClick}
      ></Button>
    </div>
  );
};
