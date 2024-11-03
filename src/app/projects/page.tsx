import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './projects.module.css';


const Project = () => {
  return (
    <div id="project">
      <section className={styles.projectSection}>
        <div className={styles.container}>
          <div className={styles.textCenter}>
            <h1 className={styles.projectTitle}>My Projects</h1>
            <h2 className={styles.subtitle}>Tap/Click Any Project to View Live</h2>
          </div>
          <div className={styles.projectList}>
            {/* { Project 1 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Coffee Shop Website"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/coffeeshop.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Coffee Shop Website</h2>
                  <h1 className={styles.cardTitle}>Coffee Shop</h1>
                  <p className={styles.cardDescription}>
                    Start your day right with a cup of our freshly brewed coffee.
                  </p>
                  <Link target="_blank" href={"https://coffee-shop-website-eight.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 2 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Weather App"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/Weatherapp.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Weather Widget App</h2>
                  <h1 className={styles.cardTitle}>Weather App</h1>
                  <p className={styles.cardDescription}>
                    This is the Mini Project I have made during Learning Next.js
                  </p>
                  <Link target="_blank" href={"https://weather-widget-next-js-lyart.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 3 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Countdown Timer"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/countdowntimer.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>CountDown Timer</h2>
                  <h1 className={styles.cardTitle}>Countdown Timer</h1>
                  <p className={styles.cardDescription}>
                  Set a time duration Start, pause, and reset the timer Display
                  </p>
                  <Link target="_blank" href={"https://countdowntimer-theta.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 4 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Number Guessing Game"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/NumberGuessing.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Number Guessing Game</h2>
                  <h1 className={styles.cardTitle}>Mini Next.js Number Guessing Game App</h1>
                  <p className={styles.cardDescription}>
                  </p>
                  <Link target="_blank" href={"https://number-guessing-game-next-js.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 5 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Dynamic Resume Builder"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/resumebuilder1.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Dynamic Resume Builder</h2>
                  <h1 className={styles.cardTitle}>CV Builder</h1>
                  <p className={styles.cardDescription}>
                    Generates a unique URL for each resume
                  </p>
                  <Link target="_blank" href={"https://hackathon-milestone5-mu.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 6 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Calculator Project"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/calculatorproject.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Calculator Project</h2>
                  <h1 className={styles.cardTitle}>Calculator</h1>
                  <p className={styles.cardDescription}>
                    Mini Project I have made during Learning Typescript
                  </p>
                  <Link target="_blank" href={"https://calculator-app-jet-omega.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 7 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Evening Gowns Webpage"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/EveningDresses.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Royal Attire Fashion Webpage</h2>
                  <h1 className={styles.cardTitle}>Evening Gowns Webpage</h1>
                  <p className={styles.cardDescription}>
                  </p>
                  <Link target="_blank" href={"https://multi-page-website-next-js.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 8 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Food Delivery Website"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/fooddeliverywebpage.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Food Delivery Website</h2>
                  <h1 className={styles.cardTitle}>Simple Food Delivery Landing Page</h1>
                  <p className={styles.cardDescription}>
                  </p>
                  <Link target="_blank" href={"https://food-delivery-webpage-seven.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>

            {/* { Project 9 } */}
            <div className={styles.projectCard}>
              <div className={styles.relative}>
                <Image
                  alt="Static Resume"
                  className={styles.projectImage}
                  src={require("../../../public/pictures/staticresume.png")}
                />
                <div className={styles.cardContent}>
                  <h2 className={styles.cardSubtitle}>Static Resume</h2>
                  <h1 className={styles.cardTitle}>Built with Html,CSS and JavaScript.</h1>
                  <p className={styles.cardDescription}>
                    
                  </p>
                  <Link target="_blank" href={"https://hackathon-milestone-1-plum.vercel.app/"}>
                    <p className={styles.cardLink}>View Live</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
