import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => {
      window.removeEventListener("scroll", navbarTransition);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav--black"}`}>
      <div className="nav__container">
        <img
          className="nav__logo"
          src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
          alt="Netflix"
        />
//         <img
//           className="nav__avatar"
//           src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
//           alt=""
//         />
      </div>
    </div>
  );
}

export default Nav;
