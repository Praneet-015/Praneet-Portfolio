import React, { useState } from 'react';
import './qualifications.css';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }
  return (
    <section className='qualification section' id='Portfolio'>
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className = {
            toggleState === 1
            ? "qualification_button qualification_active button--flex" : 
            "qualification_button button--flex"
          }
          onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div className = {
            toggleState === 2
            ? "qualification_button qualification_active button--flex" : 
            "qualification_button button--flex"
          }
          onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">

          <div className = {
            toggleState === 1 
            ? "qualification_content qualification_content-active" 
            : "qualification_content"
          }
          >

            <div className="qualification_data">
              <div>
                  <h3 className="qualification_title">Secondary School - 10th</h3>
                  <span className="qualification_subtitle">Bannari Amman Vidhya Niketan Matric Hr Sec School</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2017 - 2018
                  </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

              <div>
                  <h3 className="qualification_title">Higher Secondary School - 11th</h3>
                  <span className="qualification_subtitle">Little Flower Matric Hr Sec School</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2018 - 2019
                  </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                  <h3 className="qualification_title">Higher Secondary School - 12th</h3>
                  <span className="qualification_subtitle">Little Flower Matric Hr Sec School</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2019 - 2020
                  </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>


          </div>
          
          <div className = {
            toggleState === 2 
            ? "qualification_content qualification_content-active" 
            : "qualification_content"
          }>

            <div className="qualification_data">
              <div>
                  <h3 className="qualification_title">Web Design</h3>
                  <span className="qualification_subtitle">Spain - Institution</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2021 - present
                  </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>

              <div>
                  <h3 className="qualification_title">Internship at Shrewd Business Solutions</h3>
                  <span className="qualification_subtitle">Full Stack Development</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2021 - 2022
                  </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                  <h3 className="qualification_title">Internship at Byot Technologies</h3>
                  <span className="qualification_subtitle">Full Stack WebDevelopment</span>
                  <div className="qualification_calender">
                    <i className='uil uil-calendar-alt'></i>
                    2021 - 2022
                  </div>
              </div>
              <div>
                <span className='qualification_rounder'></span>
                <span className='qualification_line'></span>
              </div>
            </div>


          </div>

        </div>

      </div>
    </section>
  )
}

export default Qualifications