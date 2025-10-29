import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaSquareXTwitter, FaTwitch } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { cn } from "../lib/utils.js";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Lets Build Together
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m always excited to collaborate on meaningful projects that combine creativity and functionality. Whether you’re looking to design a new interface, develop a dynamic website, or refine an existing product, I’d love to help bring your ideas to life and make an impact through thoughtful design and clean code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <h4 className="font-semibold text-xl">Connect With Me</h4>
            <div className="flex space-x-6 text-2xl">
              <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaSquareXTwitter /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaTwitch /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-2xl shadow-sm space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl border-none 
                bg-[#C6D0DB]/80 text-[#0E1A2C] font-semibold
                shadow-inner backdrop-blur-md 
                focus:outline-hidden focus:ring-2 focus:ring-[#B8C4D1]
                placeholder:text-[#0E1A2C]/60 placeholder:font-semibold transition"
                placeholder="John Doe..."
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-xl border-none 
                bg-[#C6D0DB]/80 text-[#0E1A2C] font-semibold
                shadow-inner backdrop-blur-md 
                focus:outline-hidden focus:ring-2 focus:ring-[#B8C4D1]
                placeholder:text-[#0E1A2C]/60 placeholder:font-semibold transition"
                placeholder="example@gmail.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-3 rounded-xl border-none 
                bg-[#C6D0DB]/80 text-[#0E1A2C] font-semibold
                shadow-inner backdrop-blur-md 
                focus:outline-hidden focus:ring-2 focus:ring-[#B8C4D1]
                placeholder:text-[#0E1A2C]/60 placeholder:font-semibold resize-none transition"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>

            {/* Cosmic Button (unchanged) */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <IoIosSend size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
