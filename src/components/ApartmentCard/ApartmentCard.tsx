import type { ApartmentCardProps } from "../../interfaces/interfaces";
import "./ApartmentCard.css";
function ApartmentCard({ image, price, title, location }: ApartmentCardProps) {
  return (
    <div className="apartmentCard">
      <img src={image} alt="apartmentImage" className="apartmentImage"></img>
      <p className="price">{price}</p>
      <h2>{title}</h2>
      <div className="location">
        <img src="/assets/icons/location.svg" alt="locationIcon"></img>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default ApartmentCard;
