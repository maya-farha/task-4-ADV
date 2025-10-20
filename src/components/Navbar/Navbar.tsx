import { useState } from "react";
import "./Navbar.css";
import type { NavbarProps } from "../../interfaces/interfaces";
function Navbar({ links, logo, bttn }: NavbarProps) {
  const [show, setShow] = useState(false);
  function handle() {
    setShow(!show);
  }
  return (
    <div className={`navbar ${show ? "white" : ""}`}>
      <img src={logo} alt="logo" className="logo"></img>
      <ul className="links">
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.to} key={index}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="bttn">{bttn}</button>
      <button onClick={handle} className="burger">
        {show ? (
          <img src="assets/icons/close 1.png" alt="close-icon"></img>
        ) : (
          <img src="assets/icons/burger.svg" alt="burger-icon"></img>
        )}
      </button>
      <ul className={`navMenu ${show ? "show" : ""}`}>
        {links.map((item, index) => (
          <li key={index}>
            <a href={item.to} key={index}>
              {item.name}
            </a>
          </li>
        ))}
        <button className="bttn">{bttn}</button>
      </ul>
    </div>
  );
}

export default Navbar;
