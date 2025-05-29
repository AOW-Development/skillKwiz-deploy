"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import LetterCarousel from "@/components/letter-carousel";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);

  const yellowTagControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) {
        setScrollStage(0);
      } else {
        setScrollStage(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollStage === 0) {
      yellowTagControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    } else {
      yellowTagControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 },
      });
    }
  }, [scrollStage, yellowTagControls]);

  return (
    <div className="bg-white">
      {/* Letter Carousel */}
      <div className="pt-[95px]
      bg-white z-10 relative">
        <LetterCarousel />
      </div>

      {/* Yellow Tag Only */}
      <motion.div
        className="relative mt-12 flex justify-center"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0, y: 20 }}
        animate={yellowTagControls}
      >
        <div className="bg-[#f6c648] text-[#00418d] py-4 px-6 inline-block transform skew-x-12 -ml-4 shadow-md mb-10px">
          <div className="transform -skew-x-12">
            <h2 className="text-2xl font-bold text-center">
              SkillKwiz – Verified Skills, Simplified Hiring
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Main Sections */}
      <div className="bg-white relative z-3">
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
