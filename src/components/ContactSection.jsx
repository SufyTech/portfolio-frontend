import React from "react";
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 to-background"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
          Let’s Build Something{" "}
          <span className="text-primary">Exceptional Together 🚀</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Whether it’s a high-impact product or an innovative role, I bring
          creativity and precision to every collaboration.
          <span className="block font-medium text-primary mt-2">
            I don’t keep people waiting — expect a quick reply.
          </span>
        </p>

        {/* Grid: Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            {/* Info Items */}
            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />,
                  title: "Email",
                  value: (
                    <a
                      href="mailto:suzkhan135@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      suzkhan135@gmail.com
                    </a>
                  ),
                },
                {
                  icon: (
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  ),
                  title: "Phone",
                  value: (
                    <a
                      href="tel:+919226888986"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91-9226888986
                    </a>
                  ),
                },
                {
                  icon: (
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  ),
                  title: "Location",
                  value: (
                    <span className="text-muted-foreground">
                      Satara, Maharashtra, India
                    </span>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm sm:text-base">
                      {item.title}
                    </h4>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Signal */}
            <div className="pt-6 text-sm sm:text-base italic text-muted-foreground border-l-4 border-primary pl-4">
              ⭐⭐⭐⭐⭐ “Sufiyan combines technical excellence with creative
              thinking — a true asset to any team or project.”
              <br />
              <span className="font-medium">– Client & Collaborator</span>
            </div>

            {/* Socials */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-sm sm:text-base">
                Connect With Me
              </h4>
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-5">
                {/* Social icons */}
                <a
                  href="https://www.linkedin.com/in/sufiyan-khan-a86521301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://github.com/SufyTech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 11c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.5-4-1.5-.6-1.4-1.4-1.7-1.4-1.7-1.2-.9.1-.9.1-.9 1.3.1 2 1.4 2 1.4 1.1 2 3 1.4 3.7 1 .1-.8.4-1.4.7-1.7-2.6-.3-5.4-1.3-5.4-6a4.7 4.7 0 011.3-3.2 4.3 4.3 0 01.1-3.1s1-.3 3.3 1.2a11.4 11.4 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2a4.3 4.3 0 01.1 3.1 4.7 4.7 0 011.3 3.2c0 4.7-2.8 5.6-5.4 5.9.5.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6a11.5 11.5 0 008-11c0-6.35-5.15-11.5-11.5-11.5z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/sk_beater"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </a>
                <a
                  href="https://instagram.com/heart_beater_sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-white/10 w-full">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">
              Let’s Talk — Job or Project
            </h3>
            <form className="space-y-4 sm:space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 sm:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 sm:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 sm:py-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm sm:text-base"
              />
              <button
                type="submit"
                className="cosmic-button w-full flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4"
              >
                🚀 Let’s Start Today <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
