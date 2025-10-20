import type { HeroCard } from "../../interfaces/interfaces";
import "./CardHero.css";
function CardHero({ image, title, info }: HeroCard) {
  return (
    <div className="cardHero">
      <div className="imgBack">
        <img src={image}></img>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{info}</p>
      </div>
    </div>
  );
}

export default CardHero;
