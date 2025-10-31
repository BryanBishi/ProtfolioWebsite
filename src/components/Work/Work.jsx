import React, { useState } from "react";
import styles from "./Work.module.css";

export const Work = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      company: "ekaart Digital Systems Inc.",
      role: "Software Engineer",
      duration: "JUL 2025 - PRESENT",
      time: "Present",
      details: [
        "Developing a Gender Auditing Platform designed to promote workplace inclusivity and compliance through intuitive, accessible UI components.",
        "Collaborating closely with the product team to transform user journeys and design prototypes into responsive front-end modules using React.",
        "Integrating Django REST APIs and optimizing MySQL queries to improve data retrieval performance and reduce response times.",
        "Leading frontend architecture improvements for better scalability, modularity, and design consistency across the application.",
        "Enhancing design workflows by creating reusable UI kits and components in Figma for cross-team collaboration.",
        "Refining visual hierarchies, typography, and color balance for a clean, modern look that aligns with brand identity."
      ],
    },
    {
      company: "Tangentia",
      role: "Software Engineer",
      duration: "JUL 2024 - JUL 2025",
      time: "1 year",
      details: [
        "Built and maintained a web-based enterprise portal, focusing on intuitive UI design, responsive front-end development, and smooth interactions across devices.",
        "Designed engaging, responsive UIs and interactive components; integrated RESTful APIs and backend services to deliver consistent, fluid cross-device experiences.",
        "Participated in Agile sprints, collaborating with designers, product owners, and developers to translate Figma wireframes and mockups into production-ready React components; contributed to sprint planning and UI reviews.",
        "Implemented UI/UX improvements based on usability testing and visual design feedback, enhancing readability, reducing interaction friction, and improving accessibility (WCAG-aware)."
      ],
    },
    {
      company: "Teranet",
      role: "Project Management Intern",
      duration: "SEP 2023",
      time: "Internship",
      details: [
        "Assisted in planning and monitoring of ongoing projects under the Delivery Management Office.",
        "Prepared process documentation and helped track milestones, dependencies, and risks using project management tools.",
        "Participated in daily stand-ups, learning how to align cross-functional teams on sprint goals and deliverables.",
        "Supported status reporting and communication between business stakeholders and technical teams.",
        "Gained exposure to Agile, Scrum, and SDLC methodologies used in enterprise environments."
      ],
    },
  ];

  return (
    <section id="work" className={styles.container}>
      <div className={styles.wrap}>
        <h2 className={styles.title}>{"</"}Work Experience{">"}</h2>
        <hr className={styles.line} />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`${styles["years-exp-container"]} ${
              activeIndex === index ? styles.active : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className={styles.topRow}>
              <div className={styles.year1}>{exp.duration}</div>

              <div className={styles["company-domain"]}>
                <div className={styles.company}>
                  {exp.company}
                  <span
                    className={`${styles.arrow} ${
                      activeIndex === index ? styles.arrowOpen : ""
                    }`}
                  >
                    ▾
                  </span>
                </div>
                <div className={styles.domain}>{exp.role}</div>
              </div>
            </div>

            <div className={styles.year2}>{exp.time}</div>

            <div
              className={`${styles.dropdown} ${
                activeIndex === index ? styles.dropdownOpen : ""
              }`}
            >
              <ul className={styles.points}>
                {exp.details.map((point, i) => (
                  <li key={i} className={styles.pointItem}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <hr className={styles.line} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
