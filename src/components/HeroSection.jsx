import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        {/* Main Intro */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          👋 Hi, I’m <span className="text-primary">Sufiyan Khan</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Frontend Developer (React & Tailwind) | Building Modern Web Apps with
          Full-Stack & AI Integrations
        </motion.p>

        {/* Value line */}
        <motion.p
          className="mt-2 text-sm sm:text-base md:text-lg text-gray-500"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          I craft responsive, animated web experiences that deliver real
          business value.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition w-full sm:w-auto text-center"
          >
            🚀 View My Work
          </a>
          <a
            href="mailto:suzkhan135@gmail.com?subject=Hiring%20Inquiry%20from%20Portfolio&body=Hi%20Sufiyan,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
            className="px-6 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition w-full sm:w-auto text-center"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(99, 102, 241, 0.1)",
            }} // subtle grow
            whileTap={{ scale: 0.95 }} // click feedback
          >
            📩 Let’s Talk
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs sm:text-sm text-gray-400 mb-2">
          Scroll Down
        </span>
        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-primary flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
        </motion.div>
        {/* Glow effect */}
        <motion.div
          className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-primary opacity-30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
