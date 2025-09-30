import React, { useEffect } from "react";
import Home from "./page/Home";
import About from "./page/AboutMe";
import Navbar from "./components/Navbar";
import Projects from "./page/Projects";
import ProjectDetail from "./page/DetailedProject";
import Footer from "./components/Footer";
import Contact from "./page/Contact";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
function App() {
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location.pathname]);
  return (
    <>
   
   <div className="max-w-7xl mx-auto">
     {/* Navbar */}
      <Navbar />
     <AnimatePresence mode="wait">
   <BrowserRouter>

   <Routes>
    <Route path="/"   element={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }/>
   <Route path="/works"   element={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Projects/>
            </motion.div>
          } />
   <Route path="/contact"  element={
               <motion.div
                 initial={{ opacity: 0, x: -100 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: 100 }}
                 transition={{ duration: 0.5 }}
               >
                 <Contact />
               </motion.div>
             } />
   <Route path="/about"  element={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <About/>
            </motion.div>
          }/>
   <Route path="/work/:id"  element={
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDetail/>
            </motion.div>
          }/>
 </Routes>

   </BrowserRouter>
   </AnimatePresence>
   {/* Footer */}
      <Footer />
</div>
    </>
  );
}

export default App;
