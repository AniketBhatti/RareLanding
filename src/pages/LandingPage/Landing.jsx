import React, { useRef } from "react";
import "./landing.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useScroll } from "framer-motion";
import { Link } from "react-router-dom";

const Landing = () => {

  const pathRef = useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(pathRef.current, {
      scrollTrigger: {
        trigger: pathRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
      attr: {
        d: "M0 4.5C1902.08 3.82732 5151.34 2.67819 7273 1.92785"
      },
      ease: "none"
    });
  }, []);



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

      <section className="transform-ideas">
        <h2>
          We transform ideas <div className="bulbs" /> into memorable
          experiences <div className="squares" /> through branding{" "}
          <div className="shapes" /> web design, and digital strategy.
        </h2>
      </section>


      <section className="Line" style={{height:'100vh'}}>
        <svg viewBox="0 0 1615 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={pathRef} id="animatedPath" d="M0.5 162.5C301.5 339 1385 -211.5 1614 97" stroke="#ED0180" stroke-width="2"/>
        </svg>
      </section>

    </main>
  );
};

export default Landing;
