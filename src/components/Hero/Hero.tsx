import "./Hero.css";
import type { HeroProps } from "../../interfaces/interfaces";
function Hero({ title, description, children }: HeroProps) {
  return (
    <div className="hero">
      <h1>{title}</h1>
      <p className="description">{description}</p>
      {children}
    </div>
  );
}

export default Hero;
