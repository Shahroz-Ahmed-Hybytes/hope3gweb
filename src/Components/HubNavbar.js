import React, { useState } from 'react';
import HubRoutes from '../Data/routes-hub';
// import mobileHubNavRoutes from '../Data/routes-mobile-hub-nav';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import AuthNav from './AuthNav';

export default function HubNavbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  var Balance = 100;

  return (
    <nav className="navbar">
      <div className="mob-logo">
        {HubRoutes
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
      <ul className={click ? "hub-mobile-items active" : "hub-mobile-items"}>
        {HubRoutes
          .filter((l) => !l.index)
          .map((route, index) => (
          <li key={index} className="mobile-item" onClick={closeMobileMenu}>
            <Link
              to={route.path}
              target={route.target}
              rel={route.rel}
              className="mob-btn"
            >
              {route.label}
            </Link>
          </li>
          ))}
          <li className="mobile-item">
            {Balance < 100 ? (
            <span onClick={closeMobileMenu}>
              <Link to="/balance-top-up" className="red-mobile-balance">
                Click here to top up balance: £{Balance}
              </Link>
            </span>
            ) : (
            <span onClick={closeMobileMenu}>
              <Link to="/balance-top-up" className="blue-mobile-balance">
                Balance: £{Balance}
              </Link>
            </span>
            )}
        </li>
      </ul>
      <ul className="nav-menu">
        {HubRoutes.map((route, index) => (
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
          <li className="desktop-item">
            {Balance < 100 ? (
            <div className="red-desktop-balance">
              <Link to="/balance-top-up" className="red-desktop-balance-link">
                Click here to top up balance<br />£{Balance}
              </Link>
            </div>
            ) : (
            <div className="blue-desktop-balance">
              <Link to="/balance-top-up" className="blue-desktop-balance-link">
                Balance<br />£{Balance}
              </Link>
            </div>
            )}
          </li>
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