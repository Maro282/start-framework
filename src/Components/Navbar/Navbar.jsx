import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let handleScroll = () => {
      const isScrolled = window.scrollY > 1;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      //cleanup
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav class="navbar navbar-expand-lg">
      <div className={`container-fluid ${scrolled ? "py-1" : "py-2"} px-5 `}>
        <Link to={"/"} className="navbar-brand">
          <h1>Start Framework</h1>
        </Link>
        <button
          class="navbar-toggler  "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars-staggered fa-lg menu-icon"></i>
        </button>
        <div class="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to={"/about"} className="nav-link">
                About
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink to={"/portfolio"} className="nav-link ">
                Portfolio
              </NavLink>
            </li>

            <li class="nav-item">
              <NavLink to={"contact"} className="nav-link ">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
