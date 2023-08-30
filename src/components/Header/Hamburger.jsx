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
     <Menu onStateChange={toggleMenu} right >
        <Link className="header_link">Home</Link>
        <Link className="header_link">About</Link>
        <Link className="header_link">Services</Link>
        <Link className="header_link">Contact</Link>
     </Menu>
    </>
  );
};

export default Hamburger;
