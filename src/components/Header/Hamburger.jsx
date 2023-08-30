import { useState } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

import '../UI/hamburger.css'

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
     <Menu onStateChange={toggleMenu} right>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Contacts</Link>
     </Menu>
    </>
  );
};

export default Hamburger;
