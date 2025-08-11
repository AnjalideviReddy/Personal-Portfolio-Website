import React from "react";
import { GiSkills } from "react-icons/gi";

// Icons
import { FaJava, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiMysql, SiAngular, SiLeetcode } from "react-icons/si";

import PageHeaderContent from "../../components/pageHeadcontent";
import './styles.scss';

const Skills = () => {
  const icons = [
    <FaHtml5 color="#E44D26" />,
    <FaCss3Alt color="#1572B6" />,
    <FaJs color="#F7DF1E" />,
    <FaReact color="#61DAFB" />,
    <SiAngular color="#DD0031" />,
    <FaJava color="#007396" />,
    <FaPython color="#3776AB" />,
    <FaDatabase color="#4DB33D" />,
    <SiMysql color="#00758F" />,
    <SiLeetcode color="#FFA116" />
  ];

  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="My Skills"
        icon={<GiSkills size={40} />}
      />

      {/* Floating icons */}
      <div className="floating-icons">
        {icons.map((icon, index) => (
          <span
            key={index}
            className="float-icon"
            style={{ animationDelay: `${index * 0.8}s` }}
          >
            {icon}
          </span>
        ))}
      </div>

      {/* New 3-column wrapper */}
      <div className="skills__wrapper">
        
        {/* FRONTEND */}
        <div className="skills__list">
          <h1>FRONT END</h1>
          <div className="skill">
            <span>HTML</span>
            <div className="progress">
              <div className="bar" style={{ width: "95%" }}>95%</div>
            </div>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="progress">
              <div className="bar" style={{ width: "90%" }}>90%</div>
            </div>
          </div>
          <div className="skill">
            <span>JAVASCRIPT</span>
            <div className="progress">
              <div className="bar" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="skill">
            <span>REACT</span>
            <div className="progress">
              <div className="bar" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="skill">
            <span>ANGULAR</span>
            <div className="progress">
              <div className="bar" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
        </div>

        {/* PROGRAMMING */}
        <div className="skills__list">
          <h1>PROGRAMMING</h1>
          <div className="skill">
            <span>JAVA</span>
            <div className="progress">
              <div className="bar" style={{ width: "90%" }}>90%</div>
            </div>
          </div>
          <div className="skill">
            <span>PYTHON</span>
            <div className="progress">
              <div className="bar" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
          <div className="skill">
            <span>DSA</span>
            <div className="progress">
              <div className="bar" style={{ width: "75%" }}>75%</div>
            </div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="skills__list">
          <h1>DATABASE</h1>
          <div className="skill">
            <span>SQL</span>
            <div className="progress">
              <div className="bar" style={{ width: "85%" }}>85%</div>
            </div>
          </div>
          <div className="skill">
            <span>MYSQL</span>
            <div className="progress">
              <div className="bar" style={{ width: "80%" }}>80%</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
