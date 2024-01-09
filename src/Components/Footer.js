import React, { useState, useEffect } from 'react';
import FooterRoutes from '../Data/routes-footer';
import SocialLinks from '../Data/routes-socials';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';

export default function Footer({className = ""}) {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)

    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimension.winWidth])

  return (
    <div className={className}>
      {windowDimension.winWidth > 890 ?
      <div className="footer-wrapper">    
        <div className="footer-content">
          <div className="footer-segment">
            <h2 className="link-heading">Learn</h2>
            <ul>
              {FooterRoutes.filter((link) => link.class === "learn").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul><br />
            <h2 className="link-heading">Support</h2>
            <ul>
              {FooterRoutes.filter(link => link.class === "support").map((routes, index) => (
                <li key={index} className={routes.class}>
                  {routes.path.includes("https") ? (
                    <a className="access-link" href={routes.path} target={routes.target} rel={routes.rel}>{routes.label}</a>
                  ) : (
                    <Link className="access-link" to={routes.path}>
                      {routes.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-segment">
          <h2 className="link-heading">About</h2>
            <ul>
              {FooterRoutes.filter((link) => link.class === "about").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="charity-socials">
              {SocialLinks.map((routes, index) => (
                <div key={index} className="social-icon">
                  <a className="access-link" href={routes.path} target={routes.target} rel={routes.rel}>
                    <img className="socials-img" src={routes.icon} alt={routes.alt} />
                  </a>
                </div>
              ))} 
            </div>
          </div>
          <div className="footer-segment">
            <h2 className="link-heading">Legal</h2>
            <ul>
              {FooterRoutes.filter(link => link.class === "legal").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="charity-details">
          <div className="charity-status">
            Humanitarian Operations is a Registered Charity in England &amp; Wales (No. 1183873)
          </div>
        </div>  
      </div> :
      <div className="footer-wrapper">    
        <div className="footer-content">
          <div className="footer-segment">
            <h2 className="link-heading">Learn</h2>
            <ul>
              {FooterRoutes.filter((link) => link.class === "learn").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul><br />
            <h2 className="link-heading">Support</h2>
            <ul>
              {FooterRoutes.filter(link => link.class === "support").map((routes, index) => (
                <li key={index} className={routes.class}>
                  {routes.path.includes("https") ? (
                    <a className="access-link" href={routes.path} target={routes.target} rel={routes.rel}>{routes.label}</a>
                  ) : (
                    <Link className="access-link" to={routes.path}>
                      {routes.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-segment">
          <h2 className="link-heading">About</h2>
            <ul>
              {FooterRoutes.filter((link) => link.class === "about").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-segment">
            <h2 className="link-heading">Legal</h2>
            <ul>
              {FooterRoutes.filter(link => link.class === "legal").map((routes, index) => (
                <li key={index} className={routes.class}>
                  <Link className="access-link" to={routes.path}>
                    {routes.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="charity-details">
          <div className="charity-socials">
            {SocialLinks.map((routes, index) => (
              <div key={index} className="social-icon">
                <a className="access-link" href={routes.path} target={routes.target} rel={routes.rel}>
                  <img className="socials-img" src={routes.icon} alt={routes.alt} />
                </a>
              </div>
            ))} 
          </div>
          <div className="charity-status">
            Humanitarian Operations is a Registered Charity in England &amp; Wales (No. 1183873)
          </div>
        </div>  
      </div>}
    </div>
  );
};