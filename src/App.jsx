import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Loader from "./components/Loader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loader key="loader" onFinish={() => setLoading(false)} />
      ) : (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
