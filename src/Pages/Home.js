import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import home from '../Data/home';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className='home-container'>
      <section className='welcome-section'>
        <div id='site_titles'>
          {home
            .filter((img) => img.section === 'titles')
            .map((Img) => (
              <div key={Img.id} id={Img.id}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='welcome-wrapper'>
          <div className='welcome-text'>
            <p>
              Hi there! My name is Ziggy and I'm an animated raccoon living in
              augmented reality. I'm joining nursery classes across the world to
              help young children throughout their learning journey.
            </p>
            <p>
              I am part of HOPE - a charitable organisation run entirely by me.
              No volunteers or staff or anything…all me. Using my tiny yet
              powerful paws, I have developed an educational augmented reality
              platform that offers immersive experiences to improve the way
              children learn. With me in your nursery, lessons will be
              unforgettable!
            </p>
            <p>
              "But Ziggy, what's augmented reality, I hear you ask?" Allow me to
              explain! Imagine animation, combined with the real world. You will
              be able to look through our tablet screen and see me right in
              front of you, interacting with your surroundings. Sound exciting?
              That's because it is!
            </p>
            <p>But don't take my word for it!</p>
          </div>
          <div className='welcome-image'>
            {home
              .filter((img) => img.id === 'art_presenting_video_picture')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
        </div>
        <div className='welcome-video'>
          {home
            .filter((img) => img.section === 'welcome')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
          <div className='screen'>
            <div id='home_video'>
              <ReactPlayer
                className='react-player'
                controls={true}
                url='https://hohopevideoorg.s3.eu-west-2.amazonaws.com/Kids+Video/Kids+at+hope-2.mov'
                width='47.2%'
                height='50%'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='learning-section'>
        <div className='learning-wrapper'>
          <div className='ziggy-with-adult'>
            {home
              .filter((img) => img.id === 'ziggy_with_adult')
              .map((img) => (
                <img
                  key={img.id}
                  src={img.image}
                  id={img.id}
                  className='img-size'
                  alt={img.alt}
                />
              ))}
          </div>
          <div className='ziggy_on_planet'>
            {home
              .filter((img) => img.id === 'ziggy_on_planet')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          <div className='watch-episodes'>
            {/* {home
              .filter((img) => img.id === 'watch_our_episodes')
              .map((img) => (
                <img
                  key={img.id}
                  src={img.image}
                  id={img.id}
                  className='img-size'
                  alt={img.alt}
                />
              ))} */}
            <h1 className='watch-episodes-heading'>WATCH OUR EPISODES OUT!</h1>
            <p>
              I want children to enjoy learning and exploring life safely by
              taking their journey with me through nursery. We are going to
              learn together about life and the skills we need to make our early
              years count by playing games and doing activities including dance
              and cooking. Can you imagine cooking with me, a cartoon character
              in the classroom infront of you as part of your world... well...
              welcome to learning with Ziggy.
            </p>
          </div>
        </div>
      </section>
      <section className='popular-courses-section'>
        <div className='courses-container'>
          <div className='course-buttons'>
            {home
              .filter((img) => img.section === 'course_button')
              .map((Img) => (
                <Link key={Img.id} id={Img.id} to={Img.path}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
