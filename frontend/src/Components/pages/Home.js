import React, { useRef } from 'react'
import "../styles/home.css";

export function Home() {
  const navBarLinks = useRef(null);
  const toggleNavbar = () => {
    // navBarLinks.current.classList.toggle('active')
    if (navBarLinks.current.style.display === "flex") {
      navBarLinks.current.style.display = "none"
    } else {
      navBarLinks.current.style.display = "flex"
    }
  }

  return (
    <nav className="navbar">
      <div className="brand-name">Interact</div>
      <a href="#" className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="nav-links" ref={navBarLinks}>
        <a href="#">How Interact Works</a>
        <a href="#">Register</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}
