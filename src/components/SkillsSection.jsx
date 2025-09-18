import React, { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "Frontend", desc: "Responsive web layouts" },
  { name: "JavaScript", level: 90, category: "Frontend", desc: "Dynamic websites & interactivity" },
  { name: "ReactJS", level: 90, category: "Frontend", desc: "SPA & component-based apps" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", desc: "Rapid UI development" },
  { name: "Flutter", level: 75, category: "Frontend", desc: "Cross-platform mobile apps" },
  { name: "Dart", level: 75, category: "Frontend", desc: "Flutter app language" },
  { name: "Streamlit", level: 65, category: "Frontend", desc: "Python web apps" },

  // Backend
  { name: "Node.js", level: 80, category: "Backend", desc: "Server-side JS" },
  { name: "MongoDB", level: 70, category: "Backend", desc: "NoSQL DB" },
  { name: "SQL", level: 80, category: "Backend", desc: "Relational DB queries" },
  { name: "MySQL", level: 75, category: "Backend", desc: "Relational database" },
  { name: "Dart", level: 75, category: "Backend", desc: "Flutter app language" },
  { name: "Cohere API", level: 60, category: "Backend", desc: "AI integration" },
  { name: "Python", level: 85, category: "Backend", desc: "General purpose & data" },
  { name: "Java", level: 80, category: "Backend", desc: "OOP & backend apps" },

  // Tools
  { name: "VS Code", level: 95, category: "Tools", desc: "Code editor" },
  { name: "GitHub", level: 90, category: "Tools", desc: "Version control" },
  { name: "Spline", level: 70, category: "Tools", desc: "3D assets & design" },

  // Design
  { name: "Figma", level: 85, category: "Design", desc: "UI/UX design" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Design"];

const SkillsSection = ({ setActiveSection }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
        if (entry.isIntersecting) setActiveSection("skills");
      },
      { root: null, threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, [setActiveSection]);

  const categoryColors = {
    Frontend: "bg-gradient-to-r from-blue-500 to-blue-400",
    Backend: "bg-gradient-to-r from-green-500 to-green-400",
    Tools: "bg-gradient-to-r from-purple-500 to-purple-400",
    Design: "bg-gradient-to-r from-pink-500 to-pink-400",
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 sm:px-5 py-2 rounded-full transition-all duration-300 capitalize text-sm sm:text-base",
                activeCategory === category
                  ? "bg-primary text-primary-foreground font-semibold shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 sm:p-5 rounded-lg shadow-xs hover:shadow-lg transition-shadow duration-300 relative group"
            >
              {/* Skill Name */}
              <div className="text-left mb-2">
                <h3 className="font-semibold text-lg sm:text-lg md:text-xl">{skill.name}</h3>
              </div>

              {/* Skill Bar */}
              <div className="w-full bg-secondary/50 h-2 sm:h-3 md:h-4 rounded-full overflow-hidden">
                <div
                  className={`h-2 sm:h-3 md:h-4 rounded-full origin-left transition-all duration-1500 ease-out ${categoryColors[skill.category]}`}
                  style={{ width: visible ? skill.level + "%" : "0%" }}
                />
              </div>

              {/* Percentage */}
              <div className="text-right mt-1 text-xs sm:text-sm md:text-base">
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>

              {/* Tooltip */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-background/90 text-foreground px-3 py-1 rounded shadow-md text-sm transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 sm:text-sm md:text-base">
                {skill.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
