import React from 'react';
import Frontend from '../Skills/Frontend';
import Backend from '../Skills/Backend';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="Skills">
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>

        <div className="skills_container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills