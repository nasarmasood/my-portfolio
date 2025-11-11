"use client";
import React, { useState } from "react";
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
    <header className="container-wrapper shadow-sm bg-white sticky top-0 z-50">
      <div className="container">
        {/* Logo */}
        <div className="flex justify-between items-center py-2">

        <div className="flex gap-2 items-center">
          <div className="w-[48px] h-[48px] bg-primary rounded-full flex justify-center items-center text-white font-semibold text-[20px]">
            N
          </div>
          <p className="font-semibold text-[24px] text-gray-900">Nasar</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
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
            </div>
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
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md border-t border-gray-200">
          {menuItems.map((item) => (
            <div
              key={item.name}
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
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default ResponsiveHeader;
