import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classSettings from '../Data/class-settings';
import '../Styles/ClassSettings.css';

export default function ClassSetup() {
  const greyed_btn = './Images/nurseryHub/save_button_greyed.png';
  const colored_btn = './Images/nurseryHub/save_button.png';
  const form_button = { greyed_btn, colored_btn };
  const [formBtn, setFormBtn] = useState(form_button.greyed_btn);

  const [classData, setClassData] = useState({
    className: '',
    teachersName: [],
    TAName: [],
    childName: []
  });

  const [teachers, setTeachers] = useState([{ id: 1, name: '', DOB: '' }]);
  const [TAs, setTAs] = useState([{ id: 1, name: '', DOB: '' }]);
  const [pupils, setPupils] = useState([{ id: 1, name: '', DOB: '' }]);

  function handleFormChange(item) {
    setFormBtn(form_button.colored_btn);
  }

  function addToList(list, setList) {
    setList([...list, { id: list.length + 1, name: '', DOB: '' }]);
  }

  function removeFromList(list, setList, listId) {
    let newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== listId) {
        newList.push(list[i]);
      }
    }
    setList(newList);
  }

  function saveSettings() {
    setFormBtn(form_button.greyed_btn);
  }

  return (
    <div className='class-settings-outer-container'>
      <div className='class-settings-inner-container'>
        <div className='header'>
          {classSettings
            .filter((img) => img.id === 'blue_go_back')
            .map((Img) => (
              <div
                key={Img.id}
                id={Img.id}
                className='back-to-class-setting-link'
              >
                <Link to={Img.path}>
                  <img src={Img.image} alt={Img.alt} className='img-size' />
                </Link>
              </div>
            ))}
          <div>
            <h1 className='class-settings_title'>Class Settings</h1>
          </div>
        </div>
        <div className='class-setup-form'>
          <div className='class-name'>
            <label>Class Name</label>
            <div className='class-name-input'>
              <input
                type='text'
                name='className'
                className='input-field'
                value={classData.className}
                onChange={handleFormChange}
              />
            </div>
          </div>
          <div className='teacher-details'>
            <div className='name-labels'>
              <label>Teacher's Name</label>
              <label>Date of birth</label>
            </div>
            {teachers.map((teacher) => (
              <div className='name-input' key={teacher.id}>
                <input
                  type='text'
                  name='teachersName'
                  // value={teacher.name}
                  className='input-field'
                  onChange={handleFormChange}
                />
                <input
                  type='text'
                  className='date-field'
                  // value={teacher.DOB}
                  placeholder='DD / MM'
                  onChange={handleFormChange}
                />
                <div className='remove-class-setup'>
                  {classSettings
                    .filter((img) => img.id === 'remove_button')
                    .map((Img) => (
                      <div key={Img.id} id={Img.id}>
                        <img
                          src={Img.image}
                          alt={Img.alt}
                          className='img-size'
                          onClick={() =>
                            removeFromList(teachers, setTeachers, teacher.id)
                          }
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className='new-btn'>
              {classSettings
                .filter((img) => img.id === 'new_teacher_button')
                .map((Img) => (
                  <div key={Img.id} id={Img.id}>
                    <img
                      src={Img.image}
                      alt={Img.alt}
                      className='img-size'
                      onClick={() => addToList(teachers, setTeachers)}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className='ta-details'>
            <div className='name-labels'>
              <label>Teaching Assistant's (TA) Name</label>
              <label>Date of birth</label>
            </div>
            {TAs.map((TA) => (
              <div className='name-input' key={TA.id}>
                <input
                  type='text'
                  className='input-field'
                  onChange={handleFormChange}
                  // value={TA.name}
                />
                <input
                  type='text'
                  className='date-field'
                  placeholder='DD / MM'
                  onChange={handleFormChange}
                  // value={TA.DOB}
                />
                <div className='remove-class-setup'>
                  {classSettings
                    .filter((img) => img.id === 'remove_button')
                    .map((Img) => (
                      <div key={Img.id} id={Img.id}>
                        <img
                          src={Img.image}
                          alt={Img.alt}
                          className='img-size'
                          onClick={() => removeFromList(TAs, setTAs, TA.id)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div className='new-btn'>
              {classSettings
                .filter((img) => img.id === 'new_ta_button')
                .map((Img) => (
                  <div key={Img.id} id={Img.id}>
                    <img
                      src={Img.image}
                      alt={Img.alt}
                      className='img-size'
                      onClick={() => addToList(TAs, setTAs)}
                    />
                  </div>
                ))}
            </div>
          </div>
          {classSettings
            .filter((img) => img.id === 'satellite')
            .map((Img) => (
              <div key={Img.id} id={Img.id} className={Img.pos}>
                <img src={Img.image} alt={Img.alt} className='img-size' />
              </div>
            ))}
        </div>
        <div className='class-certificate-names'>
          <div className='certificate-labels'>
            <label>Names to appear on certificates</label>
            <label>Date of birth</label>
          </div>
          {pupils.map((pupil) => (
            <div className='name-input' key={pupil.id}>
              <input
                type='text'
                className='input-field'
                onChange={handleFormChange}
              />
              <input
                type='text'
                className='date-field'
                placeholder='DD/MM/YYYY'
                onChange={handleFormChange}
              />
              <div className='remove-class-setup'>
                {classSettings
                  .filter((img) => img.id === 'remove_button')
                  .map((Img) => (
                    <div key={Img.id} id={Img.id}>
                      <img
                        src={Img.image}
                        alt={Img.alt}
                        className='img-size'
                        onClick={() =>
                          removeFromList(pupils, setPupils, pupil.id)
                        }
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}

          <div className='new-btn'>
            {classSettings
              .filter((img) => img.id === 'new_pupil_button')
              .map((Img) => (
                <div key={Img.id} id={Img.id}>
                  <img
                    src={Img.image}
                    alt={Img.alt}
                    className='img-size'
                    onClick={() => addToList(pupils, setPupils)}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className='save-btn'>
          <div onClick={saveSettings} className='save-button'>
            <img src={formBtn} alt='Save' width='100%' />
          </div>
        </div>
        {classSettings
          .filter((img) => img.id === 'astro_ziggy')
          .map((Img) => (
            <div key={Img.id} id={Img.id} className={Img.pos}>
              <img src={Img.image} alt={Img.alt} className='img-size' />
            </div>
          ))}
      </div>
    </div>
  );
}
