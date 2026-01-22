import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
  useGSAP(() => {
    // Animate headings
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" },
    );

    // Animate paragraph
    gsap.from(".hero-text p", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.5,
      ease: "power2.out",
    });

    // Animate button
    gsap.from(".hero-btn", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.7,
      ease: "power2.out",
    });

    // Animate word icons
    gsap.from(".hero-word", {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.8,
      delay: 0.3,
      ease: "power2.out",
    });
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-6">
            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="hero-word flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Interactive & Scalable Frontend</h1>
              <h1>Web Applications</h1>
            </div>

            <p className="text-white-50 md:text-lg relative z-10 pointer-events-none">
              Crafting responsive, high-quality websites and web apps with
              React, UI/UX focus, and modern frontend best practices.
            </p>

            <Button
              text="Work With Me"
              className="hero-btn md:w-72 md:h-14 w-56 h-12"
              id="counter"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* Animated Counters */}
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
