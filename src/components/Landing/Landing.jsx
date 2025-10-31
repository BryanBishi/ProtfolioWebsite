import React from 'react'
import styles from './Landing.module.css';
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Landing = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
        <p className={styles.body}> Hi, I'm <b>Bryan Bishi</b> <br></br></p>
        <br></br>
            <h1 className={styles.title}>A Software</h1>
            <h1 className={styles.title2}>Developer</h1>
            <p className={styles.body2}>            Welcome to my website! Feel free to scroll down to know more about me.</p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <ul className={styles.socials}>
                <li><a href='https://github.com/bryanbishi' className={styles.git} target="_blank" > <FaGithub /> Github</a></li> 
                <li><a href='https://www.linkedin.com/in/bryanbishi' className={styles.linkedIn} target="_blank"><FaLinkedinIn /> LinkedIn</a></li>
                <li><a href='mailto:bryanbishi@gmail.com'className={styles.insta} target="_blank"><MdEmail /> Email</a></li>
                {/* <li><a href='https://www.youtube.com/'className={styles.yt} target="_blank"><FaYoutube /> Youtube</a></li> */}
            </ul>
            <br></br>
            <br></br>
            <br></br>

        </div>
    </section>
    )
  }
