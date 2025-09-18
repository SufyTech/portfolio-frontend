import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Send } from "lucide-react";

// ✅ Magnetic Button
const MagneticButton = ({ children, href }) => {
  const ref = React.useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px) scale(1.05)`;
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
      className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.7)] hover:scale-105 active:scale-95 inline-flex items-center gap-2 mt-4"
    >
      {children}
    </a>
  );
};

// ✅ FAQ data
const faqs = [
  {
    question: "How do you create websites that make people stop scrolling?",
    answer:
      "I blend stunning visuals, smooth animations, and intuitive layouts that not only look amazing but also keep users engaged and coming back for more.",
  },
  {
    question: "Can you turn a creative idea into a fully functional site?",
    answer:
      "Yes! I take concepts from vision to reality, crafting sites that are both visually captivating and technically flawless — the perfect balance of design and code.",
  },
  {
    question: "Will my project stand out in a crowded market?",
    answer:
      "Absolutely! Every project I build is designed to leave a lasting impression, communicate your brand’s uniqueness, and impress anyone who sees it.",
  },
  {
    question: "Do you deliver results that really matter?",
    answer:
      "I focus on outcomes that drive engagement, growth, and conversions. You’ll see a measurable impact, whether it’s attracting users, leads, or clients.",
  },
  {
    question: "How quickly can we start seeing the magic?",
    answer:
      "Almost immediately! I work efficiently without cutting corners, ensuring your project shines from day one and keeps people excited to work with you.",
  },
];

// ✅ FAQ Item Component
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 sm:p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 shadow-xl"
    >
      <div className="flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
        <h4 className=" font-semibold text-base sm:text-lg">{faq.question}</h4>
        {isOpen ? (
          <ChevronUp className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <ChevronDown className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3  text-sm sm:text-base leading-relaxed"
          >
            {faq.answer}
            {faq.question.includes("reach") && (
              <MagneticButton href="#contact">
                🚀 Hire Me Now <Send size={18} />
              </MagneticButton>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ✅ FAQ Section Component
const FAQSection = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center  mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
