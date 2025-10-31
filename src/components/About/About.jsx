import React from 'react';
import bryanImage from '../../assets/bryan.JPEG';
import styles from './About.module.css';

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.contents}>
        <h2 className={styles.title}>../About Me</h2>
        <div className={styles.flexContainer}>
          <div className={styles.textContent}>
            <p className={styles.intro}>
              I am a <b>Software Engineer</b> with a strong focus on creating clean, intuitive, and visually engaging web experiences. My background spans <b>React</b>, <b>MySQL</b>, and <b>Django</b>, allowing me to build full-featured applications from concept to deployment.<br></br>
              My experience covers UI/UX design, frontend development, and backend integration — enabling me to craft seamless, high-performance digital products that balance usability and functionality.<br></br>
              I’m passionate about designing user-centered interfaces, writing maintainable code, and constantly evolving my skill set to stay ahead in the ever-changing world of technology.
            </p>

            <p className={styles.introSmall}>
              I’m a Software Engineer specializing in React, Django, and MySQL — focused on building intuitive, responsive, and user-friendly web applications.
            </p>

          </div>
          <img className={styles.image} src={bryanImage} alt="Bryan Bishi" />
        </div>
        <ul className={styles.skills}>
          <li className={styles.skill1}>
              <b>Front-end</b>
              <p>HTML / CSS / ReactJs / Angular</p>
          </li>
          <li className={styles.skill2}>
              <b>Back-end</b>
              <p>Django / MySQL </p>
          </li>
          <li className={styles.skill3}>
              <b>Design & UI/UX</b>
              <p>Figma / Adobe Photoshop / Adobe Illustrator </p>
          </li>
          <li className={styles.skill4}>
              <b>Other Skills</b>
              <p>Cinematography / Photography / Editing </p>
          </li>
        </ul>
      </div>
    </section>
  );
};