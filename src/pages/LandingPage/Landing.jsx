import React, { useRef } from "react";
import "./landing.scss";
import gsap from "gsap";
import { useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {

    // function cubeAnimation(){
  
    //     gsap.to(".x", { x: 100, duration: 1, ease: "power1.inOut" });

    // }

    // cubeAnimation()

  return (
    <main>
      <section className="every-pixel">
        <Link className="start-your-project">Start your Project</Link>

        <p className="bring-idea">Bringing your ideas to life where</p>

        <div className="headers">
          <h1>
            Every <span>pixels</span>
          </h1>
        </div>

        <p className="tells-your-story">Tells Your Story</p>
      </section>

      <div className="intro">
        <section className="welcome2rp">
          <h2>
            Welcome to
            <span>
              Rarepi
              <div className="x" />
              els
            </span>
          </h2>
        </section>

        <section className="visually-captivating">
          <h2>
            A creative design agency specializing in crafting innovative{" "}
            <div className="wind-mill" />
            and visually captivating <div className="eye" /> solutions
          </h2>
        </section>
      </div>

    </main>
  );
};

export default Landing;
