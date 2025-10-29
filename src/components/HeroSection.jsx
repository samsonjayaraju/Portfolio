import React from "react";
import { FaGithub, FaLinkedin, FaArrowAltCircleDown } from "react-icons/fa";
import Samsonbg from "/images/Samsonbg.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start px-8 md:px-24 overflow-hidden"
    >
      {/* LEFT SIDE — TEXT */}
      <div className="max-w-lg text-left z-10">
        <p className="text-sm font-semibold opacity-0 animate-fade-in">
          Hi there! 👋 I am
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight opacity-0 animate-fade-in-delay-1">
          Samson
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-2">
          I'm a passionate Designer and Web Developer
        </h2>

        <p className="mt-4 text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3">
          Design with purpose. Build with precision. I turn ideas into
          interactive experiences that not only look great but also perform
          seamlessly across devices.
        </p>

        <div className="pt-6 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            HIRE ME
          </a>
          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://github.com/samsonjayaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-white hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={34} />
            </a>

            <a
              href="https://linkedin.com/in/samsonjayaraju"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 dark:text-white hover:text-primary transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={34} />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE — IMAGE */}
      <img
        src={Samsonbg}
        alt="Hero Illustration"
        className="absolute bottom-0 right-0 w-[300px] sm:w-[600px] md:w-[900px] lg:w-[900px] h-auto object-contain opacity-100 pointer-events-none select-none"
      />

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <FaArrowAltCircleDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
