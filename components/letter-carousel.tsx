"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  letters: string[];
  title: string;
  description: string;
  backgroundImage: string;
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      letters: ["S", "K", "I", "L", "L"],
      title: "Skill Assessment",
      description: "Evaluate your knowledge with our comprehensive skill tests",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
    },
    {
      letters: ["Q", "U", "I", "Z"],
      title: "Quiz Excellence",
      description: "Interactive quizzes designed by industry experts",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      letters: ["L", "E", "A", "R", "N"],
      title: "Learning Journey",
      description: "Continuous improvement through personalized feedback",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      letters: ["H", "I", "R", "E"],
      title: "Hiring Simplified",
      description: "Connect verified skills with the right opportunities",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="w-screen overflow-hidden mb-12 md:mb-10 lg:mb-24">

      <div className="relative w-full h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 translate-x-full z-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.backgroundImage}
              alt={`${slide.title} background`}
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
            />

            {/* Text Overlay */}
            {slide.title === "Hiring Simplified" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white/80 p-6 rounded-md max-w-xl mx-auto">
                <h3 className="text-4xl md:text-5xl font-bold text-[#00418d] mb-4">
                  {slide.title}
                </h3>
                <p className="text-xl md:text-2xl text-[#00418d]">
                  {slide.description}
                </p>
              </div>
            ) : (
              <div className="absolute top-10 left-10 bg-white/80 p-6 rounded-md max-w-md">
                <h3 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-3">
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl text-[#00418d]">
                  {slide.description}
                </p>
              </div>
            )}

            {/* Letters Row */}
            <div className="absolute bottom-12 left-10 flex gap-4">
              {slide.letters.map((letter, i) => (
                <div
                  key={i}
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-gradient-to-br from-[#00418d] to-[#0066cc] text-white text-3xl md:text-4xl font-bold rounded-lg shadow-md transform hover:scale-110 transition-transform"
                >
                  {letter}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#00418d]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#00418d]" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#f73e5d] w-8" : "bg-white/60 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
