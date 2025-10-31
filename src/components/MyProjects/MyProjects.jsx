import React, { useState, useEffect } from "react";
import styles from "./MyProjects.module.css";
import { FaAward, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Import your slideshow images
import proj1 from "../../assets/proj1.jpeg";
import proj2 from "../../assets/proj2.jpeg";
import proj3 from "../../assets/proj3.jpg";

export const MyProjects = () => {
  const images = [proj1, proj2, proj3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next / Prev slide logic
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="achievements" className={styles.background}>
      {/* HEADER SECTION */}
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>{"</"}Achievements{">"}</h2>
        <p className={styles.headerText}>
          This section highlights some of my proudest achievements — showcasing innovation,
          technical expertise, and a commitment to solving real-world challenges through technology.
          Each recognition represents the continuous pursuit of creativity, collaboration, and
          excellence.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.wrap}>
        {/* LEFT COLUMN */}
        <div className={styles.left}>
          <h3 className={styles.heading}>Smart Waste Bin — IoT-Based System</h3>

          <p className={styles.lead}>
            Designed and developed an <b>IoT-enabled smart waste management system</b> capable of
            automatically segregating <b>biodegradable</b> and <b>non-biodegradable</b> waste using
            sensors. The system includes a real-time monitoring interface for waste levels,
            enabling potential integration with <b>municipal waste collection systems</b>.
          </p>

          <div className={styles.stack}>
            <span>React</span>
            <span>Django</span>
            <span>MySQL</span>
            <span>Arduino</span>
            <span>Raspberry Pi</span>
          </div>

          <div className={styles.hr} />

          <div className={styles.recognitions}>
            <div className={styles.recTitle}>
              <FaAward /> Recognitions
            </div>
            <ul className={styles.recList}>
              <li>MBCETAA Best Project Award</li>
              <li>CSI INAPP Awards – First Place</li>
              <li>
                Selected for review by Smart City Trivandrum; currently under patent evaluation
              </li>
            </ul>
          </div>

          <a
            className={styles.cta}
            href="https://www.linkedin.com/posts/bryanbishi_inapp-csiinappawards-innovation-activity-7266826779594485761-vWe-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAET2pgQBxrPcajIEAu_sl0v8xXVGODtB3zU"
            target="_blank"
            rel="noreferrer"
          >
            <FaAward /> View Recognition
          </a>
        </div>

        {/* RIGHT COLUMN — Slideshow */}
        <div className={styles.right}>
          <div className={styles.portraitFrame}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Project ${index + 1}`}
                className={`${styles.portrait} ${
                  index === currentIndex ? styles.active : ""
                }`}
              />
            ))}

            {/* Arrows */}
            <button
              className={`${styles.navButton} ${styles.leftArrow}`}
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>
            <button
              className={`${styles.navButton} ${styles.rightArrow}`}
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>

            {/* Indicator Dots */}
            <div className={styles.dots}>
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <div className={styles.portraitGlow} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
