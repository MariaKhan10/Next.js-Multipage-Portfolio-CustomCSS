import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import "./navbar.css"; // Import the custom CSS file

const Navbar = () => {
  const navbarBackground = `rgba(30, 58, 138, 0.85)`; // Semi-transparent dark blue
  return (
    <div className="navbar-container">
      <div style={{ backgroundColor: navbarBackground }} className="navbar-background">
        <header className="navbar-body-font">
          <div className="navbar-header">
            <Link href="/" className="navbar-logo">
              <Image
                alt="logo"
                width={40}
                height={80}
                src={require("../../../public/pictures/logofrontend.jpg")}
              />
              <span className="navbar-title">Maria Khan</span>
            </Link>
            <nav className="navbar-nav">
              <Link href="/" className="navbar-link">Home</Link>
              <Link href="/about" className="navbar-link">About</Link>
              <Link href="/skills" className="navbar-link">Skills</Link>
              <Link href="/projects" className="navbar-link">Projects</Link>
              <Link href="/contact" className="navbar-link">Contact</Link>
            </nav>
            <a href="/cv/cv.pdf" download="CV.pdf">
              <button className="navbar-button">
                Download CV
                <MdOutlineFileDownload className="navbar-icon" />
              </button>
            </a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
