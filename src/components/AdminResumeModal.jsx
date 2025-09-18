import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const AdminResumeModal = ({ isOpen, onClose }) => {
  const [requests, setRequests] = useState([]);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const fetchPending = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/pending-requests`);
      const data = await res.json();
      setRequests(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (isOpen) fetchPending();
  }, [isOpen]);

  const acceptRequest = async (id) => {
    setStatus("Sending resume...");
    setStatusType("");
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/accept/${id}`);
      if (res.ok) {
        setStatus("✅ Resume sent successfully!");
        setStatusType("success");
        fetchPending();
      } else {
        setStatus("❌ Something went wrong!");
        setStatusType("error");
      }
    } catch (err) {
      setStatus("❌ Network error!");
      setStatusType("error");
    }
  };

  const rejectRequest = async (id) => {
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/reject/${id}`);
      setStatus("❌ Request rejected");
      setStatusType("error");
      fetchPending();
    } catch (err) {
      console.error(err);
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
              Pending Resume Requests
            </h3>

            {requests.length === 0 ? (
              <p className="text-center text-white/70 mt-4">No pending requests</p>
            ) : (
              <ul className="flex flex-col gap-2 mt-3">
                {requests.map((req) => (
                  <li
                    key={req.id}
                    className="flex justify-between items-center bg-white/10 p-2 rounded"
                  >
                    <span className="text-white">
                      {req.name} ({req.email})
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => acceptRequest(req.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:scale-105 transition"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => rejectRequest(req.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:scale-105 transition"
                      >
                        Reject
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center justify-center gap-2 text-sm font-medium mt-3 ${
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
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AdminResumeModal;
