import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* MAIN PROJECT */}
          <div ref={rydeRef} className="first-project-wrapper project-card">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="K72 Creatives Website" />
            </div>

            {/* Hover Overlay */}
            <a
              href="https://k72creatives.com"
              target="_blank"
              rel="noreferrer"
              className="project-overlay"
            >
              <span>View Live Project →</span>
            </a>

            <div className="text-content">
              <h2>K72 Creatives — Interactive Agency Website</h2>
              <p className="text-white-50 md:text-xl">
                Built a modern agency website using React.js, Tailwind CSS, and
                GSAP with smooth animations, reusable components, and optimized
                performance.
              </p>
            </div>
          </div>

          {/* OTHER PROJECTS */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project project-card" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Capsules Website" />
              </div>

              {/* Hover Overlay */}
              <a
                href="https://capsules-demo.com"
                target="_blank"
                rel="noreferrer"
                className="project-overlay"
              >
                <span>View Project →</span>
              </a>

              <h2>Capsules — Scroll-Driven Animated Experience</h2>
            </div>

            <div className="project project-card" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#eadbce]">
                <img src="/images/project3.png" alt="MotionRefokus Website" />
              </div>

              {/* Hover Overlay */}
              <a
                href="https://motionrefokus-demo.com"
                target="_blank"
                rel="noreferrer"
                className="project-overlay"
              >
                <span>View Project →</span>
              </a>

              <h2>MotionRefokus — Creative Website with Micro-Interactions</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
