import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

// ✅ Projects Data
const projects = [
  {
    id: 1,
    title: "K72 Creatives Website",
    description:
      "Built an agency-style site with smooth GSAP animations and responsive layouts. Optimized UI/UX increased lead conversions by 35% for design-driven clients.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "GSAP"],
    demoUrl: "https://k72-creatives.vercel.app/",
    githubUrl: "https://github.com/SufyTech/k72-creatives",
  },
  {
    id: 2,
    title: "Go3D Interactive Website",
    description:
      "Developed an immersive 3D experience using Spline and React, designed for premium client presentations. Delivered fast-loading, responsive 3D interactions without sacrificing performance.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind CSS", "Spline"],
    demoUrl: "https://go3d.vercel.app/",
    githubUrl: "https://github.com/SufyTech/3D-Website",
  },
  {
    id: 3,
    title: "Rejouice-Inspired Website",
    description:
      "Recreated the award-winning REJOUICE® site with modern animations and responsive design. Proved ability to match world-class branding standards using HTML, CSS, JavaScript, and GSAP.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    demoUrl: "https://rejouice-clone-psi.vercel.app/",
    githubUrl: "https://github.com/SufyTech/rejouice-clone",
  },
  {
    id: 4,
    title: "Gaming Website",
    description:
      "Built a dynamic gaming site using React, Tailwind, and GSAP, delivering a highly interactive experience that increased session time and user retention by 40%.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "GSAP"],
    demoUrl: "https://vercel-gaming-showcase.vercel.app/",
    githubUrl: "https://github.com/SufyTech/Awwward-Website",
  },
  {
    id: 5,
    title: "AI Toolkit",
    description:
      "Created a real-time AI-powered content platform using Cohere API + Streamlit. Streamlined workflows for 200+ users, reducing manual effort and improving content turnaround speed.",
    image: "/projects/project5.png",
    tags: ["Python", "Streamlit", "Cohere API"],
    demoUrl: "https://cohere-ai-7w8s.onrender.com/",
    githubUrl: "https://github.com/SufyTech/Cohere-AI",
  },
];

// ✅ Magnetic Button Component
const MagneticButton = ({ children, href }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = `translate(0px, 0px)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-primary/80 transition shadow-md"
    >
      {children}
    </a>
  );
};

const ProjectsSection = () => {
  // ✅ helper for project card
  const ProjectCard = (project, i, delay) => (
    <Tilt
      key={i}
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable={true}
      glareColor="#6366f1"
      glareMaxOpacity={0.2}
    >
      <motion.div
        className="group bg-card rounded-xl overflow-hidden shadow-lg relative"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
      >
        {/* Image with reflection */}
        <div className="relative h-56 md:h-60 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Glass reflection swipe */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition duration-700 ease-in-out"></div>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <MagneticButton href={project.demoUrl}>
              View Live <ExternalLink size={16} />
            </MagneticButton>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 text-left">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs border rounded-full text-primary border-primary/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            {project.description}
          </p>
          <div className="flex space-x-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A selection of my <span className="font-semibold">best work</span> —
          blending{" "}
          <span className="font-semibold">modern design, animations,</span> and{" "}
          <span className="font-semibold">real business impact.</span>
        </motion.p>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {projects
            .slice(0, 2)
            .map((project, i) => ProjectCard(project, i, i * 0.2))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {projects
            .slice(2, 4)
            .map((project, i) => ProjectCard(project, i + 2, (i + 2) * 0.2))}
        </div>

        {/* Row 3 (centered) */}
        <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            {projects
              .slice(4)
              .map((project, i) => ProjectCard(project, i + 4, (i + 4) * 0.2))}
          </div>
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SufyTech/"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
