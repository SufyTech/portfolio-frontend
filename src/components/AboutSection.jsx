import React, { useState } from "react"; // added useState
import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";
import ResumeRequestModal from "./ResumeRequestModal"; // import modal

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false); // modal state

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-12 text-center relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About{" "}
          <span className="text-primary relative">
            Me
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-primary/60 rounded-full animate-pulse-subtle"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - intro */}
          <motion.div
            className="space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold">
              Frontend Developer | Full-Stack Explorer | AI-Ready
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              I specialize in building{" "}
              <span className="font-semibold">
                modern, responsive, and animated web apps
              </span>{" "}
              using React, Tailwind, and full-stack tools. With a strong eye for
              UI/UX, I help businesses create digital experiences that are fast,
              accessible, and user-friendly.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              Beyond coding, I focus on{" "}
              <span className="font-semibold">
                delivering real business value
              </span>{" "}
              — from clean frontend code for recruiters to high-performing
              websites that convert for clients.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="cosmic-button w-full sm:w-auto text-center"
              >
                Get In Touch
              </a>

              <a
                href="#"
                onClick={() => setShowModal(true)} // open modal
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition duration-300 w-full sm:w-auto text-center"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right side - skill cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {/* Card 1 */}
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Responsive, fast, and scalable apps built with React,
                    Tailwind, and modern stacks.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Focused</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Clean designs & smooth interactions that make users stay
                    longer and convert better.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="gradient-border p-6 card-hover"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business-Oriented</h4>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    I don’t just code — I build solutions that support business
                    growth and client success.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Resume Request Modal --- */}
      <ResumeRequestModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
};

export default AboutMe;
