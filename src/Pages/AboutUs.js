import React, { useState, useEffect } from 'react';
import { FlipBook } from '../Components/ComponentIndex';
import { Carousel } from 'react-responsive-carousel';
import aboutUsMobile from '../Data/about-us-mobile';
import '../Styles/AboutUs.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function AboutUs() {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion.winWidth]);

  return (
    <div className="about-outer-container">
      {windowDimenion.winWidth > 1040 ? (
        <div className="about-inner-container">
          <div className="aboutUsContent">
            <div className="book">
              <FlipBook />
            </div>
          </div>
        </div>
      ) : (
        <div className="about-inner-container-vertical">
          <div className="aboutUsContent-vertical">
            <div className="book-vertical">
              <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                showIndicators={true}
                verticalSwipe="natural"
                autoPlay={true}
                infiniteLoop={false}
                interval={15000}
                swipeable={true}
                emulateTouch={true}
                transitionTime={1}
                renderArrowPrev={(clickHandler) => {
                  const style = {
                    backgroundColor: "red",
                    display: "inline-block",
                    border: "3px solid maroon",
                    position: "absolute",
                    top: "50%",
                    zIndex: "3",
                    borderRadius: "30%",
                    color: "white",
                    padding: "5px",
                    cursor: "pointer"
                  };
                  return (
                    <button style={style} onClick={clickHandler} tabIndex={0}>
                      &#9668;
                    </button>
                  );
                }}
                renderArrowNext={(clickHandler) => {
                  const style = {
                    backgroundColor: "red",
                    display: "inline-block",
                    border: "3px solid maroon",
                    position: "absolute",
                    top: "50%",
                    zIndex: "3",
                    borderRadius: "30%",
                    color: "white",
                    padding: "5px",
                    right: "0",
                    cursor: "pointer"
                  };
                  return (
                    <button style={style} onClick={clickHandler} tabIndex={0}>
                      &#9658;
                    </button>
                  );
                }}
              >
                {aboutUsMobile.map((aboutUsMobile, index) => (
                  <div key={index}>
                    <img
                      className="d-block w-100"
                      src={aboutUsMobile.pages}
                      alt="First slide"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
