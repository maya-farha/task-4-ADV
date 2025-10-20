import CardHero from "../CardHero/CardHero";
import "./CardHeroContainer.css";
import type { CardHeroContainerProps } from "../../interfaces/interfaces";

function CardHeroContainer({ cards }: CardHeroContainerProps) {
  return (
    <div className="CardHeroContainer">
      {cards.map((item, index) => (
        <CardHero key={index} {...item}></CardHero>
      ))}
    </div>
  );
}

export default CardHeroContainer;
