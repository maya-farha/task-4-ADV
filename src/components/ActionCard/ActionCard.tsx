import type { ActionCardProps } from "../../interfaces/interfaces";
import "./ActionCard.css";
function ActionCard({ icon, title, description, className }: ActionCardProps) {
  return (
    <div className={`actionCard ${className ? "blue" : ""}`}>
      <img src={icon} alt="iconCard"></img>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ActionCard;
