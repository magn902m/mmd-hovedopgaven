export interface TerminalsProps {
  name: string;
  desc: string;
  price: string;
  id: string;
  img: string;
}
export const Terminals: TerminalsProps[] = [
  {
    name: "Large: Spar penge på lave gebyrer. Transaktionsgebyr fra 0,69%",
    desc: "Til dig med månedlig kortomsætning under 35.000 kr.*",
    price: "299",
    id: "lg",
    img: "../assets/images/asset_1.png",
  },
  {
    name: "Medium: Få lave gebyr og en udvidet servicepakke. Transaktionsgebyr fra 0,79%",
    desc: "Til dig med månedlig kortomsætning mellem 35.000-90.000 kr.*",
    price: "349",
    id: "md",
    img: "../assets/images/asset_1.png",
  },
  {
    name: "Small: Få fest lav månedlig ydelse. Transaktionsgebyr fra 0,89%",
    desc: "Til dig med månedlig kortomsætning over 90.000 kr.*",
    price: "459",
    id: "sm",
    img: "../assets/images/asset_1.png",
  },
];
