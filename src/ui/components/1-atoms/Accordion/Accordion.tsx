import React from "react";
import { AccordionItem, AccordionItemProps } from "./AccordionItem/AccordionItem";

export const Accordion = ({ data }: any) => {
  return (
    <section className="accordion">
      {data.map((data: AccordionItemProps) => (
        <>
          <AccordionItem key={data.title} title={data.title} content={data.content} />
          <hr />
        </>
      ))}
    </section>
  );
};
