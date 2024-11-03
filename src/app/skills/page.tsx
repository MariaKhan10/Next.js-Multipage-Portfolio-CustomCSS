import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div id="skills">
      <section className="text-white body-font">
        <div className="skills-section">
          <div className="container">
            <div className="text-center mb-22">
              <h2 className="skills-title">Skills</h2>
              <h1 className="skills-heading">My Skills</h1>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">HTML</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar html-progress"></div>
                  <p className="progress-percentage">100%</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">CSS</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar css-progress"></div>
                  <p className="progress-percentage">95%</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">TypeScript/JavaScript</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar ts-js-progress"></div>
                  <p className="progress-percentage">90%</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">Next.js</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar nextjs-progress"></div>
                  <p className="progress-percentage">70%</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">WordPress</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar wordpress-progress"></div>
                  <p className="progress-percentage">75%</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <h2 className="skill-name">React</h2>
                </div>
                <div className="skill-progress">
                  <div className="progress-bar react-progress"></div>
                  <p className="progress-percentage">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
