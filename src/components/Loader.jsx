// src/components/Loader.jsx
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const Counter = ({ from, to, onFinish }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [display, setDisplay] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    const unsubscribe = rounded.on("change", (v) => setDisplay(v));

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, to, rounded, onFinish]);

  return (
    <motion.span
      className="text-7xl md:text-9xl font-extrabold text-white"
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: [1, 1.2, 1, 5], opacity: [1, 1, 1, 0] }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 2 }}
    >
      {display}%
    </motion.span>
  );
};

export default function Loader({ onFinish }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black" // 👈 fixed over Home
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Counter from={0} to={100} onFinish={onFinish} />
    </motion.div>
  );
}
