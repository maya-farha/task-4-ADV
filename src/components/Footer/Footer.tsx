import "./Footer.css";
import type { FooterProps } from "../../interfaces/interfaces";
function Footer({
  logo,
  description,
  columns,
  bottomLeft,
  bottomRight,
}: FooterProps) {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="leftSide">
          <img src={logo} alt="logo"></img>
          <p>{description}</p>
        </div>

        <div className="rightSide">
          {columns.map((item, index) => (
            <ul key={index}>
              <h3>{item.title}</h3>
              {item.items.map((link, indexlink) => (
                <li key={indexlink}>
                  {Array.isArray(link) ? (
                    <div className="socialIcons">
                      {link.map((image, imageIndex) => (
                        <div className="socialIconsContainer">
                          <a href="#" key={imageIndex}>
                            <img src={image} alt={image} />
                          </a>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <a href="#">{link}</a>
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="footerBottom">
        <strong>{bottomLeft}</strong>
        <div className="rightSide">
          {bottomRight.map((item, index) => (
            <strong key={index}>{item}</strong>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
