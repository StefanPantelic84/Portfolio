import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="footer">
        <nav className="footer-container">
          <section className="footer-description">
            <h3>Stefan Pantelic</h3>
            <p>
              I'm a Frontend Developer from Belgrade. I'm open to Job
              opportunities where I can contribute, learn and grow.
            </p>
          </section>
          <section className="footer-links">
            <h3>Important Links</h3>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <Link to="/projects">Projects</Link>
            </p>
            <p>
              <Link to="/contact">Contact</Link>
            </p>
          </section>
          <section className="footer-info">
            <h3>Contact Info</h3>
            <a href="tel:0038165282867">
              <p className="number">+381/65 28 28 678</p>
            </a>
            <p>Web Developer</p>
            <p>Beograd</p>
            <p>Novi Beograd</p>
          </section>
          <section className="footer-social">
            <h3>Links</h3>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=100083632196213"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer-icons">
                  <BsFacebook />
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/StefanPantelic84"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer-icons">
                  <BsGithub />
                </div>
              </a>
            </div>
          </section>
        </nav>
      </div>
    </>
  );
}

export default Footer;
