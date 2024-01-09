import React from 'react';
import '../Styles/Heros.css';
import Hero from '../Data/heros';

export default function Heros() {
  const [className, setClassName] = React.useState([
    'class 1',
    'class 2',
    'class 3'
  ]);
  const [season, setSeason] = React.useState(['season1', 'season2']);
  const [episode, setEpisode] = React.useState(['episode1', 'episode2']);
  const [counterNumber, setCounterNumber] = React.useState(1);

  function changeNumber(add) {
    setCounterNumber(counterNumber + add);
  }

  return (
    <div className='heros-outer-container'>
      <div className='heros-inner-container'>
        <h1 className='hub_title'>HEROS</h1>
        <p className='heros-div-title'>Theatre Scenes</p>
        <div className='heros-div'>
          <div className='hero-top-container'>
            <fieldset>
              <label>Class Name</label>
              <select className='input-field top-dropdowns'>
                {className &&
                  className.map((classN) => (
                    <option key={classN} value=''>
                      {classN}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset>
              <label>Season</label>
              <select className='input-field top-dropdowns'>
                {season &&
                  season.map((season) => (
                    <option key={season} value=''>
                      {season}
                    </option>
                  ))}
              </select>
            </fieldset>
            <div className='top-dropdown-search'>
              <p>SEARCH</p>
            </div>
          </div>
          <div className='hero-bottom-container'>
            <div className='hero-bottom-section'>
              <div className='hero-counter'>
                <div className='counter-number'>{counterNumber}</div>
                <div className='counter-adjust'>
                  <div className='hero-plus' onClick={() => changeNumber(1)}>
                    +
                  </div>
                  <div
                    className='hero-minus'
                    onClick={() => counterNumber > 0 && changeNumber(-1)}
                  >
                    -
                  </div>
                </div>
              </div>
              <p> Theater Scene</p>
            </div>
            <div className='hero-bottom-section'>
              {Hero.filter((hero) => hero.section === 'buttons').map((hero) => (
                <img src={hero.image} alt={hero.alt} className='hero-button' />
              ))}
            </div>
          </div>
        </div>
        <div className='hero-image-container'>
          {' '}
          {Hero.filter(
            (hero) => hero.id === 'exemplary_learning_astro_ziggy'
          ).map((hero) => (
            <img
              key={hero.id}
              className={hero.id}
              src={hero.image}
              alt={hero.alt}
            />
          ))}
        </div>

        <p className='heros-div-title'>Episode Heros</p>

        <div className='heros-div episodes-div'>
          <div className='hero-top-container'>
            <fieldset>
              <label>Class Name</label>
              <select className='input-field top-dropdowns'>
                {className &&
                  className.map((classN) => (
                    <option key={classN} value=''>
                      {classN}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset>
              <label>Episode</label>
              <select className='input-field top-dropdowns'>
                {episode &&
                  episode.map((episode) => (
                    <option key={episode} value=''>
                      {episode}
                    </option>
                  ))}
              </select>
            </fieldset>
            <div className='top-dropdown-search'>
              <p>SEARCH</p>
            </div>
          </div>
          <div className='hero-bottom-container'>
            <div className='hero-bottom-section'>
              <p>25 x Episode Heros</p>
            </div>
            <div className='hero-bottom-section'>
              {Hero.filter((hero) => hero.id === 'print_button').map((hero) => (
                <img src={hero.image} alt={hero.alt} className='hero-button' />
              ))}
            </div>
          </div>
        </div>
        <p className='heros-div-title student-lost-hero'>
          My student lost their Hero!
        </p>

        <div className='heros-div episodes-div'>
          <div className='hero-top-container'>
            <fieldset>
              <label>Pupil Name</label>
              <select className='input-field top-dropdowns'>
                {className &&
                  className.map((classN) => (
                    <option key={classN} value=''>
                      {classN}
                    </option>
                  ))}
              </select>
            </fieldset>
            <fieldset>
              <label>Episode</label>
              <select className='input-field top-dropdowns'>
                {episode &&
                  episode.map((episode) => (
                    <option key={episode} value=''>
                      {episode}
                    </option>
                  ))}
              </select>
            </fieldset>
            <div className='top-dropdown-search'>
              <p>SEARCH</p>
            </div>
          </div>
          <div className='hero-bottom-container'>
            <div className='hero-bottom-section'>
              <p>Pupil name + episode</p>
            </div>
            <div className='hero-bottom-section'>
              {Hero.filter((hero) => hero.id === 'print_button').map((hero) => (
                <img src={hero.image} alt={hero.alt} className='hero-button' />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
