import React from "react";
import { ThemeToggle } from "./components/ThemeToggle.jsx";
import { HeroSection } from "./components/HeroSection.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { SkillsSection } from "./components/SkillsSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { ContactSection } from "./components/ContactSection.jsx";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle for Light and Dark modes */}
      {/* <ThemeToggle /> */}

      {/* Background Effects */}

      {/* Navbar */}
      <Navbar />
      {/* Main Content which contains Hero, Projects, Contact sections */}
      <main>
        <HeroSection />
        {/* <AboutSection /> */}
        {/* <SkillsSection /> */}
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
    </div>
  );
};

export default Home;
