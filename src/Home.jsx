import React from "react";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { Navbar } from "./components/Navbar.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle for Light and Dark modes */}
      <ThemeToggle />

      {/* Background Effects */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content which contains Hero, Projects, Contact sections */}
      <main>
        <HeroSection />
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
