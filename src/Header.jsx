

/*
export function Header() {
   const navLinks = [
    'Home',
    'Services',
    'Contact'
   ]

    return(
        <div className="Header">
        <div className="logo-name">Mikaila Dev</div>
        {navLinks.map((nav) => <ul>
        <li>
        <a href="#">{nav}</a>
        </li>
        </ul>)}
        <button className="join-btn">Join</button>
        <div className="hamburger-icon">
        <span className="bar"></span>
         <span className="bar"></span>
          <span className="bar"></span>
        </div>
        </div>
    )
}*/











import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "Services", "Contact"];

  return (
    <header className="header">
      <div className="logo">Mikaila Dev</div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
     
        {navLinks.map((nav) => (
          <li key={nav}>
            <a href={`#${nav.toLowerCase()}`}>{nav}</a>
          </li>
        ))}
      </ul>

      <button className="join-btn">Join</button>

      {/* Hamburger */}
      <div
        className={isOpen ? "hamburger active" : "hamburger"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}