import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiCheckCircle, FiXCircle } from "react-icons/fi";

const ResumeRequestModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending request...");
    setStatusType("");

    try {
      const res = await fetch(`${backendURL}/request-resume`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        setStatus("✅ Request submitted! You’ll get the resume once approved.");
        setStatusType("success");
        setName("");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus(`❌ Error: ${data.message || "Something went wrong"}`);
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Network error! Please try again.");
      setStatusType("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl w-96 shadow-xl flex flex-col gap-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold text-center text-white mb-2">
              <FiMail className="inline mr-2 text-blue-400" />
              Request My Resume
            </h3>
            <p className="text-center text-white/80 text-sm">
              Enter your details and get my resume once approved.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 rounded-xl bg-white/30 text-white placeholder-white/70 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <button
                type="submit"
                className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-lg transition"
              >
                Request Resume
              </button>
            </form>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 text-sm font-medium ${
                  statusType === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {statusType === "success" ? <FiCheckCircle /> : <FiXCircle />}
                {status}
              </motion.div>
            )}

            <button
              className="mt-3 text-sm text-white/70 hover:text-white underline self-center"
              onClick={onClose}
            >
              Cancel
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeRequestModal;
