import React from "react";
import arrow from "../assets/arrow.svg";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="home-page">
      <motion.div
        animate={{
          rotate: [-25, 200, 200, -25],
          x: [0, 100, 100, 0],
          y: [0, 100, 100, 0],
        }}
        transition={{ repeat: 1, duration: 2 }}
        className="kocka1"
      ></motion.div>
      <motion.div
        animate={{
          rotate: [0, 200, 200, 0],
          y: [0, -200, -200, 0],
          scale: [0.1, 1],
        }}
        transition={{ repeat: 4, duration: 1 }}
        className="kocka2"
      ></motion.div>
      <motion.div
        animate={{
          rotate: [-20, 200, 200, -20],
          x: [0, 50, 50, 0],
          y: [0, -50, -50, 0],
        }}
        transition={{ duration: 2 }}
        className="kocka3"
      ></motion.div>
      <motion.div
        animate={{
          rotate: [30, 200, 200, 30],
          x: [0, -100, -100, 0],
          y: [0, 100, 100, 0],
        }}
        transition={{ duration: 2 }}
        className="kocka4"
      ></motion.div>
      <motion.div className="my-name">
        <p>Hello, i am</p>
        <div className="h1-name">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Web Developer")
                .start()
                .pauseFor(1000)
                .deleteAll()
                .typeString("Stefan Pantelic")
                .start();
            }}
          />
        </div>
      </motion.div>

      <section className="about-me">
        <p>
          "You can sharpen your mind, rewire your brain, provide people with
          great software... the options and impact are nearly endless."
        </p>
        <button>
          <Link to="/projects">My Projects</Link>
        </button>
      </section>
      <section className="arrow">
        <p>FOLLOW</p>
        <nav className="arrow-img">
          <img src={arrow} alt="icon" />
        </nav>
        <div className="social">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100083632196213"
                target="_blank"
                rel="noopener noreferrer"
              >
                FB
              </a>
            </li>
            <li>
              <a
                href="https://github.com/StefanPantelic84"
                target="_blank"
                rel="noopener noreferrer"
              >
                GH
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="scroll-down">
        <p>SCROLL</p>
        <div className="scroll-down-img">
          <img src={arrow} alt="icon" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
