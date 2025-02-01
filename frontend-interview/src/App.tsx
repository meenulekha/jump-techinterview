import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const NavBar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#7cc7c7]/90 backdrop-blur-sm shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-8">
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {location.pathname === "/" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">Home</span>
              </Link>
              <Link
                to="/contact"
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/contact"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {location.pathname === "/contact" && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative">Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#e5f7f7]">
        <NavBar />
        <div className="pt-16 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
