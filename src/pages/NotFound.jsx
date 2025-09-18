import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { GiRobotGolem } from "react-icons/gi";
import Confetti from "react-confetti";

const NotFound = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  const handleGoHome = () => {
    setShowConfetti(true);
    setTimeout(() => {
      navigate("/"); // Redirect to homepage
    }, 2000); // Confetti shows for 2 seconds
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 relative">
      
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      {/* Animated 404 */}
      <motion.h1
        className="text-9xl font-extrabold text-white drop-shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        404
      </motion.h1>
      
      {/* Bouncing Robot */}
      <motion.div
        className="text-white text-8xl mt-4"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
      >
        <GiRobotGolem />
      </motion.div>
      
      {/* Messages */}
      <motion.p
        className="mt-6 text-xl text-white/90 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! Page not found.
      </motion.p>
      <motion.p
        className="mt-2 text-white/70 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        The page you are looking for doesn’t exist or has been moved.
      </motion.p>
      
      {/* Go Back Home button */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={handleGoHome}
          className="px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg shadow-lg hover:scale-105 transition"
        >
          Go Back Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
