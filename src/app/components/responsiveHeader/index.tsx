"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // icons

function ResponsiveHeader() {
  const [selectedSection, setSelectedSection] = useState<string>("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close menu after click
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "Experience", id: "experience" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container-wrapper shadow-sm bg-white sticky top-0 z-50"
    >
      <div className="container">
        {/* Logo */}
        <div className="flex justify-between items-center py-2">

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 items-center"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center text-white font-semibold text-[20px]"
          >
            N
          </motion.div>
          <p className="font-semibold text-[24px] text-gray-900">Nasar</p>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              role="button"
              onClick={() => {
                setSelectedSection(item.name);
                scrollToSection(item.id);
              }}
              style={{
                backgroundColor:
                  selectedSection === item.name ? "#A53DFF" : "#FFFFFF",
                color: selectedSection === item.name ? "#FFFFFF" : "#333333",
              }}
              className="cursor-pointer px-[20px] py-[10px] rounded-md font-medium text-[16px] hover:bg-primary hover:text-white transition"
            >
              {item.name}
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 border border-gray-300 rounded-md"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-white shadow-md border-t border-gray-200 overflow-hidden"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => {
                  setSelectedSection(item.name);
                  scrollToSection(item.id);
                }}
                style={{
                  backgroundColor:
                    selectedSection === item.name ? "#A53DFF" : "#FFFFFF",
                  color: selectedSection === item.name ? "#FFFFFF" : "#333333",
                }}
                className="cursor-pointer px-6 py-4 text-[16px] border-b border-gray-100 font-medium hover:bg-primary hover:text-white transition"
              >
                {item.name}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default ResponsiveHeader;
