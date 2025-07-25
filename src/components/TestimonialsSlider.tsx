"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialCard, starRating, staggerContainer } from "@/lib/animations";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  initials: string;
  color: "primary" | "accent" | "secondary";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Davis",
    company: "TechCorp",
    role: "CEO",
    content: "The team delivered beyond our expectations. Their expertise and dedication transformed our digital presence completely. ROI increased by 300% within the first quarter.",
    rating: 5,
    initials: "JD",
    color: "primary"
  },
  {
    id: 2,
    name: "Sarah Martinez",
    company: "InnovateLab",
    role: "CTO",
    content: "Incredible attention to detail and innovative solutions. They understood our vision perfectly and brought it to life with cutting-edge technology.",
    rating: 5,
    initials: "SM",
    color: "accent"
  },
  {
    id: 3,
    name: "Michael Johnson",
    company: "FutureTech",
    role: "Founder",
    content: "Professional, reliable, and results-driven. The project was delivered on time and exceeded all our performance benchmarks. Highly recommended!",
    rating: 5,
    initials: "MJ",
    color: "secondary"
  }
];

export function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Testimonial Cards */}
      <div className="relative h-80 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={testimonialCard}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="bg-card p-8 rounded-2xl border hover:shadow-xl transition-shadow h-full flex flex-col justify-between">
              {/* Star Rating */}
              <motion.div 
                className="flex items-center mb-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <div className="flex text-yellow-400">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      variants={starRating}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>
              
              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground mb-6 italic flex-grow text-lg leading-relaxed">
                &quot;{testimonials[currentSlide].content}&quot;
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center">
                <motion.div 
                  className={`w-12 h-12 bg-${testimonials[currentSlide].color}/20 rounded-full flex items-center justify-center mr-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`text-${testimonials[currentSlide].color} font-bold text-lg`}>
                    {testimonials[currentSlide].initials}
                  </span>
                </motion.div>
                <div>
                  <div className="font-semibold text-lg">{testimonials[currentSlide].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentSlide].role}, {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border hover:bg-background transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center border hover:bg-background transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4">
        <motion.div
          className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`}
          animate={{ scale: isAutoPlaying ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 1, repeat: isAutoPlaying ? Infinity : 0 }}
        />
      </div>
    </div>
  );
}