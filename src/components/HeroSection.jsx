import React from "react";
import Samsonbg from "/images/Samsonbg.png";
export const HeroSection = () => {
  return (
    
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start px-8 md:px-24"
    >
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
          Design with purpose. Build with precision. I turn ideas into interactive
          experiences that not only look great but also perform seamlessly across
          devices.
        </p>

        <div className="pt-6 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button">
            HIRE ME
          </a>
        </div>
      </div>
      {/* RIGHT SIDE — IMAGE */}
    {/* <div
        className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 opacity-0 animate-image-in"
      >
        <img
          src={Samsonbg}
          alt="Hero Illustration"
          className="w-full max-w-md md:max-w-lg object-contain"
        />
      </div> */}
      <section className="flex items-center justify-center min-h-screen bg-transparent">
  {/* <img
    src={Samsonbg}
    alt="Hero Illustration"
    className="w-full max-w-md object-contain bg-transparent"
  /> */}
  <img
  src={Samsonbg}
  alt="Hero Illustration"
  className="w-[300px] sm:w-[600px] md:w-[900px] lg:w-[1152px] h-auto object-contain"
/>

</section>
    </section>
  );
};
