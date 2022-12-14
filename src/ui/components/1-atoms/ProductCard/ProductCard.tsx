import React from "react";
import { Button } from "../Button";
import "./ProductCard.scss";

export interface CardProps {
  title?: string;
  text?: string;
  img: string;
  btnLabel: any;
  onClick?: (e: unknown) => void;
  id: number;
}

export const ProductCard: React.FC<CardProps> = (props) => {
  return (
    <article className="nets_card">
      <img className="nets_card_image" src={props.img} />
      <h3 className="nets_card_title">{props.title}</h3>
      <p className="nets_card_text">{props.text}</p>
      <Button className="nets_card_button" label={props.btnLabel} onClick={props.onClick}></Button>
    </article>
  );
};
