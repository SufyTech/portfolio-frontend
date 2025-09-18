import { motion, AnimatePresence } from "framer-motion";

const Toast = ({ message, type, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 right-6 z-50 px-6 py-3 rounded-lg shadow-lg text-white cursor-pointer ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
          onClick={onClose} // ✅ closes when clicked
        >
          {type === "success" ? "✅ " : "❌ "} {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
