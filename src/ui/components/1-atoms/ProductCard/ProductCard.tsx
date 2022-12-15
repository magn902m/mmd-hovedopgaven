import React from "react";
import { Button } from "../Button";
import "./ProductCard.scss";

export interface CardProps {
  productInfo: any;
  onClick?: (e: unknown) => void;
}

export const ProductCard: React.FC<CardProps> = (props) => {
  return (
    <article className="nets_card">
      <img className="nets_card_image" src={props.productInfo.img} onClick={props.onClick} />
      <div className="text_content">
        <h3 className="nets_card_title">{`${props.productInfo.name}: Fra ${props.productInfo.transactionInfo}% pr. transaktion`}</h3>
        <p className="nets_card_text">{props.productInfo.desc2}</p>
      </div>
      <Button
        className="nets_card_button"
        label={`Månedspris fra ${props.productInfo.price} kr.`}
        onClick={props.onClick}
      ></Button>
    </article>
  );
};
