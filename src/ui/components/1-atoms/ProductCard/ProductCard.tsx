import React from "react";
import { Button } from "../Button";
import "./ProductCard.scss";

export interface CardProps {
  productInfo: any;
  onClick?: (e: unknown) => void;
}

export const ProductCard: React.FC<CardProps> = (props) => {
  return (
    <article className="sts_card">
      <img className="sts_card_image" src={props.productInfo.img} onClick={props.onClick} />
      <div className="text_content">
        <h3 className="sts_card_title">{`${props.productInfo.name}: Fra ${props.productInfo.transactionInfo}% pr. transaktion`}</h3>
        <p className="sts_card_text">{props.productInfo.desc2}</p>
      </div>
      <Button
        className="sts_card_button"
        label={`Månedspris fra ${props.productInfo.price} kr.`}
        onClick={props.onClick}
      ></Button>
    </article>
  );
};
