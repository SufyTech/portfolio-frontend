import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const testimonials = [
  {
    id: 1,
    name: "Anjali Prushty",
    role: "CEO, Techoctanet",
    avatar: "/testimonials/avatar1.png",
    quote:
      "Sufiyan consistently delivers top-quality work with creativity and professionalism. Highly reliable and talented.",
  },
  {
    id: 2,
    name: "Rohit Sharma",
    role: "Founder, K72 Creatives",
    avatar: "/testimonials/avatar2.png",
    quote:
      "Working with Sufiyan was seamless — his designs and solutions truly elevated our brand’s digital presence.",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Senior Frontend Engineer, TechWorks",
    avatar: "/testimonials/avatar3.png",
    quote:
      "Sufiyan builds clean, maintainable React applications and communicates effectively. A great addition to any team.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    role: "Marketing Head, Go3D",
    avatar: "/testimonials/avatar4.png",
    quote:
      "Our engagement metrics improved significantly after collaborating with Sufiyan. His work exceeded expectations.",
  },
  {
    id: 5,
    name: "Priya Singh",
    role: "CEO, AI Toolkit",
    avatar: "/testimonials/avatar5.png",
    quote:
      "Sufiyan is fast, reliable, and highly skilled. He delivers results that make a real business impact.",
  },
];

const MagneticButton = ({ children, href }) => {
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${
      y * 0.25
    }px) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px) scale(1)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-primary text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 hover:bg-primary/80 transition shadow-lg hover:shadow-2xl mt-4 text-sm sm:text-base"
    >
      {children}
    </a>
  );
};

const TestimonialCard = ({ testimonial, delay }) => (
  <Tilt
    tiltMaxAngleX={6}
    tiltMaxAngleY={6}
    glareEnable={true}
    glareMaxOpacity={0.2}
  >
    <motion.div
      className="bg-gradient-to-tr from-white/10 to-white/20 dark:from-gray-800/20 dark:to-gray-800/40 
                 backdrop-blur-md border border-white/20 dark:border-white/10 
                 p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col items-center text-center 
                 hover:scale-105 transition-transform duration-300 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="relative">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-primary shadow-lg object-cover mb-4"
        />
        <span className="absolute -top-2 -right-2 text-3xl sm:text-4xl text-primary opacity-20 dark:text-primary/50">
          “
        </span>
      </div>
      <p className="text-gray-900 dark:text-white text-sm sm:text-base md:text-lg italic mb-4 leading-relaxed">
        {testimonial.quote}
      </p>
      <h4 className="text-gray-900 dark:text-white font-semibold text-base sm:text-lg md:text-xl">
        {testimonial.name}
      </h4>
      <span className="text-primary text-xs sm:text-sm md:text-base">
        {testimonial.role}
      </span>
      <MagneticButton href="#contact">Hire Me</MagneticButton>
    </motion.div>
  </Tilt>
);

const TestimonialsSection = () => {
  return (
    <section
      id="testimonial"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What People <span className="text-primary">Say About Me</span>
        </motion.h2>

        {/* Row 1 → 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-10 md:mb-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.2} />
          ))}
        </div>

        {/* Row 2 → 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
          {testimonials.slice(3, 5).map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={(i + 3) * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
