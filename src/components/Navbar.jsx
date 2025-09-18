import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      let current = "hero";
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/90 backdrop-blur-xs shadow-lg dark:bg-background-dark/80"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="text-xl font-bold text-primary flex items-center gap-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-glow text-foreground dark:text-foreground-dark">
            Sufiyan
          </span>{" "}
          Portfolio
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => (
            <motion.a
              key={key}
              href={item.href}
              className={cn(
                "relative transition-all duration-300 px-1",
                activeSection === item.href.replace("#", "")
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-primary dark:text-foreground-dark/70 dark:hover:text-primary"
              )}
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
              {activeSection === item.href.replace("#", "") && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primary to-secondary rounded"
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground/65 z-[1000] fixed top-2 right-18"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ y: -100, opacity: 0 }} // start above the screen
              animate={{ y: 0, opacity: 1 }} // slide down into view
              exit={{ y: -100, opacity: 0 }} // slide up when closing
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-background/95 backdrop-blur-md dark:bg-background-dark/95 z-[900] flex flex-col items-center justify-center md:hidden space-y-6 text-xl"
            >
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)} // optional: close menu on click
                >
                  {item.name} {/* use name instead of title */}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
