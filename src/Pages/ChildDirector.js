import { useState, useEffect } from 'react';
import childDirector from '../Data/child-director';
import '../Styles/ChildDirector.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function ChildDirector() {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);

    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDimension.winWidth]);

  return (
    <div className='child-director-container'>
      <div className='content'>
        {childDirector
          .filter((img) => img.id === 'piggy_ziggy')
          .map((img) => (
            <div key={img.id} id={img.id}>
              <img src={img.image} alt={img.alt} className='img-size' />
            </div>
          ))}

        {childDirector
          .filter((img) => img.id === 'ziggy_hanging')
          .map((img) => (
            <div key={img.id} id={img.id}>
              <img src={img.image} alt={img.alt} className='img-size' />
            </div>
          ))}

        {childDirector
          .filter((img) => img.id === 'ziggy_pointing_at_video_pose')
          .map((img) => (
            <div key={img.id} id={img.id}>
              <img src={img.image} alt={img.alt} className='img-size' />
            </div>
          ))}

        {childDirector
          .filter((img) => img.id === 'theatre')
          .map((img) => (
            <div key={img.id} id={img.id}>
              <img src={img.image} alt={img.alt} className='img-size' />
              <div className='rain'>
                {childDirector
                  .filter((img) => img.id === 'how_we_started')
                  .map((img) => (
                    <div key={img.id} id={img.id}>
                      <img id={img.id} src={img.image} alt={img.alt} />
                    </div>
                  ))}
              </div>
              <div id='theatre_video' className='absolute'>
                <ReactPlayer
                  controls={true}
                  url='https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Kids+Video/Kids+at+hope-2.mov'
                  width='100%'
                  height='100%'
                />
              </div>
            </div>
          ))}

        {windowDimension.winWidth > 650 ? (
          <>
            {/* picture-board start */}
            <div className='picture-board'>
              <div className='grid-t'>
                <div id='pig'></div>
                {childDirector
                  .filter((img) => img.section === 'one')
                  .map((img) => (
                    <div key={img.id} id={img.id} className='images'>
                      <Link to='/contact'>
                        <img
                          src={img.image}
                          alt={img.alt}
                          className={`img-size ${img.class}`}
                        />
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
            {/* pic board end */}
          </>
        ) : (
          /* Carousel */
          <>
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              showIndicators={false}
              verticalSwipe='natural'
              autoPlay={true}
              infiniteLoop={false}
              interval={15000}
              swipeable={true}
              emulateTouch={true}
              transitionTime={1}
              renderArrowPrev={(clickHandler) => {
                const style = {
                  display: 'inline-block',
                  position: 'absolute',
                  top: '30%',
                  left: '5%',
                  zIndex: '3',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '80px'
                };
                return (
                  <div style={style} onClick={clickHandler} tabIndex={0}>
                    &lsaquo;
                  </div>
                );
              }}
              renderArrowNext={(clickHandler) => {
                const style = {
                  display: 'inline-block',
                  position: 'absolute',
                  top: '30%',
                  right: '5%',
                  zIndex: '3',
                  borderRadius: '30%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '80px'
                };
                return (
                  <div style={style} onClick={clickHandler} tabIndex={0}>
                    &rsaquo;
                  </div>
                );
              }}
            >
              {childDirector
                .filter((img) => img.carousel_section === 'carousel')
                .map((img) => (
                  <div
                    key={img.id}
                    id={img.id}
                    className='images'
                    onClick={() => window.open('/contact-form', '_self')}
                  >
                    <img
                      src={img.image}
                      alt={img.alt}
                      className={`img-size ${img.class}`}
                    />
                  </div>
                ))}
            </Carousel>
          </>
        )}

        {childDirector
          .filter((img) => img.section === 'ziggy-p')
          .map((img) => (
            <div key={img.id} id={img.id} className='images'>
              <img
                src={img.image}
                alt={img.alt}
                className={`img-size ${img.class}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
