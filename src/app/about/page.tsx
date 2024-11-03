import Image from "next/image";
import React from "react";
import "./about.css";

const About = () => {
  const gradientBackground = `linear-gradient(135deg, #1e3a8a, #3b82f6)`;

  return (
    <div id="about">
      <section className="about-body-font">
        <div style={{ background: gradientBackground }} className="about-section">
          <div className="about-container">
            <div className="about-image-container">
              <Image
                className="about-image"
                alt="hero"
                src={require("../../../public/pictures/aboutmepic2.jpg")}
                width={500}
                height={500}
              />
            </div>
            <div className="about-text-container">
              <h1 className="about-title">
                About Me
                <br className="about-line-break" />
              </h1>
              <p className="about-paragraph">
              I'm Maria Khan, a passionate front-end developer with a strong
              foundation in web technologies.Currently I am enrolled in Governor House Initiative for Artificial Intelligence and Computing and (PIAIC) where i am learning AI,Web3 and Metaverse Technologies.I specialize in crafting engaging
              and user-friendly interfaces using HTML, CSS, TypeScript, and
              Next.js. With a keen eye for design and a love for coding, I
              strive to create seamless digital experiences that resonate with
              users. I'm dedicated to continuously learning and growing in this
              ever-evolving field to deliver innovative solutions. Let's build
              something amazing together!
              </p>
              <p className="about-paragraph">
              Key Skills : Proficient in HTML, CSS, TypeScript.Experience with
              front-end frameworks such as React and Next.js. Strong eye for
              design and aesthetics Excellent problem-solving and debugging
              skills.Commitment to delivering high-quality user experiences.
              Ability to collaborate effectively with cross-functional teams.
              Developed and implemented responsive web designs that
              optimized user interaction and engagement.
              Ensured cross-browser compatibility and responsive design across
              various devices.On the Basis of my Education I hold
              Master's Degree in Science from Karachi University.
              </p>
              <div className="about-button-container">
                <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="about-button">
                    View CV
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
