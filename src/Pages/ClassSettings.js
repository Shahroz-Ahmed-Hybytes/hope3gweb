import React from 'react';
import { Link } from 'react-router-dom';
import classSettings from '../Data/class-settings';
import '../Styles/ClassSettings.css';

export default function ClassSettings() {
  const [myClass, setMyClass] = React.useState([
    {
      id: 1,
      className: 'Class 1',
      teacherName: 'Teacher 1',
      pupils: 22,
      years: '4 - 5'
    },
    {
      id: 2,
      className: 'Class 2',
      teacherName: 'Teacher 1',
      pupils: 18,
      years: '3 - 5'
    },
    {
      id: 3,
      className: 'Class 3',
      teacherName: 'Teacher 2',
      pupils: 8,
      years: '5 - 6'
    }
  ]);

  function removeClass(classPicked) {
    let classTotal = [];
    for (let i = 0; i < myClass.length; i++) {
      if (myClass[i].id !== classPicked) {
        classTotal.push(myClass[i]);
      }
    }
    setMyClass(classTotal);
  }

  return (
    <div className='class-settings-outer-container'>
      <div className='class-settings-inner-container'>
        <h1 className='class-settings_title'>Your Classes</h1>
        <div className='class-listing'>
          <div className='class-settings-header'>
            {classSettings
              .filter((img) => img.id === 'classes_astro_ziggy')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </div>
              ))}
          </div>
          {myClass.map((classes) => (
            <div className='class-box' key={classes.className}>
              <div className='class-details'>
                <span>{classes.className}</span>
                <br />
                <span>
                  {classes.teacherName}, {classes.pupils} pupils,{' '}
                  {classes.years} years old
                </span>
              </div>
              <div className='remove-class'>
                {classSettings
                  .filter((img) => img.id === 'remove_button')
                  .map((Img) => (
                    <div key={Img.id} id={Img.id} className={Img.pos}>
                      <img
                        src={Img.image}
                        alt={Img.alt}
                        className='img-size'
                        onClick={() => removeClass(classes.id)}
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
          <div className='add-class'>
            {classSettings
              .filter((img) => img.id === 'add_a_class_button')
              .map((Img) => (
                <div key={Img.id} id={Img.id} className={Img.pos}>
                  <Link to={Img.path}>
                    <img src={Img.image} alt={Img.alt} className='img-size' />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
