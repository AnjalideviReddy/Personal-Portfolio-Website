import React, { useEffect, useState } from "react";
import { FaUserCircle, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaServer } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeadcontent";
import './styles.scss';

const PersonalDetails = [
  { label: "Name", value: "Anjali Devi Reddy" },
  { label: "Age", value: "20" },
  { label: "Address", value: "India" },
  { label: "Email", value: "reddyanjalidevidcme042@gmail.com" },
  { label: "Contact No", value: "+91 7396551603" },
];

const jobSummary = `I am a passionate and detail-oriented Front-End Developer with a strong
foundation in HTML, CSS, JavaScript, TypeScript, and frameworks like React.js. 
I enjoy transforming UI/UX designs into user-friendly, responsive web interfaces. 
With a problem-solving mindset and a drive for continuous learning, I focus on 
writing clean, maintainable, and efficient code. I'm seeking opportunities to 
contribute to impactful projects and collaborate in a dynamic team environment.`;

const services = [
  {
    icon: <FaLaptopCode size={40} aria-label="Web Development Icon" />,
    title: "Web Development",
    description: "Building responsive websites using React.js, HTML, CSS, JS",
  },
  {
    icon: <FaMobileAlt size={40} aria-label="Mobile Friendly Icon" />,
    title: "Mobile Friendly",
    description: "Designs optimized for mobile and tablet viewports",
  },
  {
    icon: <FaPaintBrush size={40} aria-label="UI/UX Design Icon" />,
    title: "UI/UX Design",
    description: "Minimal and modern layouts that enhance user experience",
  },
  {
    icon: <FaServer size={40} aria-label="Performance Icon" />,
    title: "Performance",
    description: "Ensuring fast loading and smooth interactions",
  },
];

const About = () => {
  // Control play state for animation to start on mount
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    // Start animation after component mounts (slight delay optional)
    const timer = setTimeout(() => setPlayAnimation(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about" aria-label="About Me Section">
      <PageHeaderContent
        headerText="About Me"
        icon={<FaUserCircle size={40} aria-hidden="true" />}
      />

      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play={playAnimation}
            duration={1.5}
            delay={0}
            start={{ opacity: 0, transform: "translateX(-900px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <h3>Front-End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play={playAnimation}
            duration={1.5}
            delay={0.5}
            start={{ opacity: 0, transform: "translateX(500px)" }}
            end={{ opacity: 1, transform: "translateX(0)" }}
          >
            <h3 className="personalinformationpagetext">Personal Information</h3>
            <ul>
              {PersonalDetails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__serviceswrapper">
          <Animate
            play={playAnimation}
            duration={1.5}
            delay={1}
            start={{ opacity: 0, transform: "translateY(300px)" }}
            end={{ opacity: 1, transform: "translateY(0)" }}
          >
            <div className="services__grid">
              {services.map((service, index) => (
                <div key={index} className="service__card">
                  <div className="icon" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
