import React from "react";
import { FaUserTie, FaGraduationCap, FaBriefcase, FaCheck } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeadcontent";
import "./styles.scss";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaUserTie size={40} />}
      />

      <div className="resume__wrapper">

        {/* Education Column */}
        <div className="resume__section left">
          <h2><FaGraduationCap /> Education</h2>

          <div className="resume__item">
            <span className="resume__item-icon">
          <FaCheck size={14} color="var(--yellow-theme-main-color)" />

            </span>
            <h3>Bachelor of Technology (B.Tech) in Computer Science</h3>
            <span className="resume__date">2023 – 2026</span>
            <p>G. Pulla Reddy Engineering College, Kurnool</p>
            <p>CGPA: 8.31/10</p>
          </div>

          <div className="resume__item">
            <span className="resume__item-icon">
          <FaCheck size={14} color="var(--yellow-theme-main-color)" />

            </span>
            <h3>Polytechnic (CSE)</h3>
            <span className="resume__date">2020 – 2023</span>
            <p>Government Polytechnic, Proddatur</p>
            <p>Percentage: 80.03%</p>
          </div>
        </div>

        {/* Experience Column */}
        <div className="resume__section right">
          <h2><FaBriefcase /> Experience</h2>

          <div className="resume__item">
            <span className="resume__item-icon">
       <FaCheck size={14} color="var(--yellow-theme-main-color)" />

            </span>
            <h3>Industrial Training</h3>
            <span className="resume__date">July 2022 – January 2023</span>
            <p>AIL DIXON Technologies India Limited (QUESS CORP CONTRACT)</p>
            <p>
              Worked as a Tester, inspecting and evaluating CCTV cameras for 
              performance, including checking focal length, low-light/darkness 
              functionality, and lens quality.
            </p>
          </div>

          <div className="resume__item">
            <span className="resume__item-icon">
           <FaCheck size={14} color="var(--yellow-theme-main-color)" />

            </span>
            <h3>Academic Project – Portfolio Website</h3>
            <span className="resume__date">2024</span>
            <p>Designed and developed a personal portfolio website using React, showcasing skills and projects.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
