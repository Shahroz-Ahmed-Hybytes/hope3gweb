import React, { useState } from 'react';
import MainRoutes from '../Data/routes';
import mobileMainRoutes from '../Data/routes-mobile-nav';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import AuthNav from './AuthNav';

export default function MainNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="mob-logo">
        {mobileMainRoutes
          .filter((l) => l.index)
          .map((mobileRoute, index) => (
            <Link key={index} to={mobileRoute.path}>
              <img
                src={mobileRoute.label}
                alt={mobileRoute.alt}
                id={mobileRoute.id}
              />
            </Link>
          ))}
      </div>
      <ul className={click ? "mobile-items active" : "mobile-items"}>
        {mobileMainRoutes
          .filter((l) => !l.index)
          .map((mobileRoute, index) => (
            <li key={index}className="mobile-item" onClick={closeMobileMenu}>
              {mobileRoute.path.includes("https") ? (
                <a
                  href={mobileRoute.path}
                  target={mobileRoute.target}
                  rel={mobileRoute.rel}
                  className="mob-btn"
                >
                  {mobileRoute.label}
                </a>
              ) : (
                <Link
                  to={mobileRoute.path}
                  target={mobileRoute.target}
                  rel={mobileRoute.rel}
                  className="mob-btn"
                >
                  {mobileRoute.label}
                </Link>
              )}
            </li>
          ))}
      </ul>
      <ul className="nav-menu">
        {MainRoutes.map((route, index) => (
          <li key={index} className="desktop-item">
            {route.label.includes("Images") ? (
              <a
                className="animateNavLink"
                href={route.path}
                target={route.target}
                rel={route.rel}
              >
                <img
                  src={route.label}
                  alt={route.alt}
                  className="nav-images"
                  id={route.id}
                />
              </a>
            ) : (
              <Link
                className="animateNavLink"
                to={route.path}
                target={route.target}
                rel={route.rel}
              >
                {route.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CgClose className="menu-icon" />
        ) : (
          <CgMenu className="menu-icon" />
        )}
      </div>
    </nav>
  );
}