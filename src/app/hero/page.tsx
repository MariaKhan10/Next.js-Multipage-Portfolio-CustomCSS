"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Maria Khan",
                  "Front-End Developer",
                  "Botanist",
                  "Web Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="hero-line"></div>
          <p className="hero-paragraph">
            Passionate and detail-oriented Frontend Developer with a strong
            background in HTML, CSS, TypeScript/JavaScript, and Next.js.
            Skilled at transforming design concepts into engaging and
            user-friendly interfaces that enhance the overall user experience.
            Continuously staying up-to-date with industry trends and emerging
            technologies to deliver cutting-edge solutions. Committed to
            creating visually appealing and functional websites that exceed
            client expectations.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" legacyBehavior>
              <a className="hero-button">Contact</a>
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <Image
            className="hero-image"
            alt="hero"
            width={250}
            height={250}
            src={require("../../../public/pictures/aboutmepic.jpg")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
