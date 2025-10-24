import React, { useEffect, useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { cn } from "../lib/utils.js";
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button onClick={toggleTheme} className={cn("fixed top-6 right-5 z-50 cursor-pointer")}>
      {isDarkMode ? (
        <FaRegSun className="h-6 w-6 text-background-300" />
      ) : (
        <FaRegMoon className="h-6 w-6 text-background-300" />
      )}
    </button>
  );
};
