import "./PropertiesSection.css";
import type { Properties } from "../../interfaces/interfaces";
import { useState } from "react";
function PropertiesSection({
  propertiesData,
}: {
  propertiesData: Properties[];
}) {
  const [activeSetbutton, setActiveSetbutton] = useState<string>(
    propertiesData[0].button
  );

  const activeImageSet = propertiesData.find(
    (set) => set.button === activeSetbutton
  );

  return (
    <div>
      <div className="buttons">
        {propertiesData.map((set, index) => (
          <button
            key={index}
            className={activeSetbutton === set.button ? "active" : ""}
            onClick={() => setActiveSetbutton(set.button)}
          >
            {set.button}
          </button>
        ))}
      </div>
      <div className="propertiesContainer">
        {activeImageSet &&
          activeImageSet.images.map((imageUrl, index) => (
            <div className="propertyImg">
              <img
                key={index}
                src={imageUrl}
                alt={`${activeImageSet.button} ${index + 1}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PropertiesSection;
