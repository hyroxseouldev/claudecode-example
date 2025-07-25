"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TypingAnimation } from "@/components/animations/TypingAnimation";
import { FadeInView } from "@/components/animations/FadeInView";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import {
  heroLogo,
  heroSubtitle,
  heroCTA,
  fadeInUp,
  staggerContainer,
  timelineItem,
  timelineItemRight,
  processCard,
  processNumber,
  partnerLogo,
} from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div variants={heroLogo} initial="hidden" animate="visible">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Company Logo"
                  width={120}
                  height={40}
                  className="text-primary"
                />
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.nav
              className="flex space-x-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link
                href="/"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/contact"
                className="text-white/90 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </motion.nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-30 hidden md:block"
            poster="/hero-bg.mp4"
          >
            {/* For demo purposes, we'll use gradient background since video file is placeholder */}
          </video>
          {/* Fallback gradient background for mobile and when video fails */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 dark:from-primary/30 dark:via-accent/20 dark:to-secondary/30" />
        </div>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <TypingAnimation
            text="Transform Your Digital Future"
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          />

          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8"
            variants={heroSubtitle}
            initial="hidden"
            animate="visible"
          >
            Experience innovation at its finest with our cutting-edge solutions
            that empower businesses to reach new heights in the digital
            landscape.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={heroCTA}
            initial="hidden"
            animate="visible"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From inception to innovation, discover the milestones that shaped
              our path to excellence
            </motion.p>
          </FadeInView>

          <div className="relative">
            {/* Timeline Line with drawing animation */}
            <FadeInView threshold={0.3}>
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ originY: 0 }}
                viewport={{ once: true }}
              />
            </FadeInView>

            {/* Timeline Items */}
            <motion.div
              className="space-y-12 lg:space-y-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Milestone 1 */}
              <motion.div
                className="relative flex flex-col lg:flex-row items-center lg:items-start"
                variants={timelineItem}
              >
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-right">
                  <motion.div
                    className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-sm font-semibold text-primary mb-2">
                      2020
                    </div>
                    <h3 className="text-xl font-bold mb-3">Foundation</h3>
                    <p className="text-muted-foreground">
                      Started with a vision to revolutionize digital
                      experiences. Our founders brought together decades of
                      expertise to create something extraordinary.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-4 h-4 bg-primary-foreground rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <div className="lg:w-1/2 lg:pl-12" />
              </motion.div>

              {/* Milestone 2 */}
              <motion.div
                className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start"
                variants={timelineItemRight}
              >
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
                  <motion.div
                    className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-sm font-semibold text-accent mb-2">
                      2021
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      First Major Launch
                    </h3>
                    <p className="text-muted-foreground">
                      Launched our flagship product that transformed how
                      businesses approach digital transformation, gaining
                      10,000+ users in the first quarter.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-4 h-4 bg-accent-foreground rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                  />
                </motion.div>

                <div className="lg:w-1/2 lg:pr-12" />
              </motion.div>

              {/* Milestone 3 */}
              <motion.div
                className="relative flex flex-col lg:flex-row items-center lg:items-start"
                variants={timelineItem}
              >
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-right">
                  <motion.div
                    className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-sm font-semibold text-secondary mb-2">
                      2022
                    </div>
                    <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
                    <p className="text-muted-foreground">
                      Expanded operations across 15 countries, establishing
                      partnerships with industry leaders and scaling our team to
                      500+ professionals.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-4 h-4 bg-secondary-foreground rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                  />
                </motion.div>

                <div className="lg:w-1/2 lg:pl-12" />
              </motion.div>

              {/* Milestone 4 */}
              <motion.div
                className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start"
                variants={timelineItemRight}
              >
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
                  <motion.div
                    className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="text-sm font-semibold text-primary mb-2">
                      2024
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      Innovation Leadership
                    </h3>
                    <p className="text-muted-foreground">
                      Leading the industry with AI-powered solutions, serving
                      over 1 million users and recognized as the fastest-growing
                      tech company in our sector.
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <motion.div
                  className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-4 h-4 bg-primary-foreground rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />
                </motion.div>

                <div className="lg:w-1/2 lg:pr-12" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive 3-Step Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              How It Works
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Experience our streamlined process designed to deliver exceptional
              results in just three simple steps
            </motion.p>
          </FadeInView>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Step 1 */}
            <motion.div className="group relative" variants={processCard}>
              <motion.div
                className="bg-card p-8 rounded-2xl border hover:border-primary/50 transition-all duration-300"
                whileHover="hover"
                variants={processCard}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg"
                  variants={processNumber}
                  whileHover="hover"
                >
                  1
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  whileHover={{
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-4 transition-colors"
                  whileHover={{ color: "hsl(var(--primary))" }}
                >
                  Discover & Plan
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  We begin by understanding your unique needs and challenges.
                  Our experts conduct thorough analysis to create a customized
                  strategy that aligns with your goals.
                </p>

                {/* Interactive Element */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-primary font-medium">
                    → Free consultation included
                  </div>
                </motion.div>
              </motion.div>

              {/* Connection Arrow (hidden on mobile) */}
              <motion.div
                className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent border-t-2 border-b-2 border-t-transparent border-b-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div className="group relative" variants={processCard}>
              <motion.div
                className="bg-card p-8 rounded-2xl border hover:border-accent/50 transition-all duration-300"
                whileHover="hover"
                variants={processCard}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg"
                  variants={processNumber}
                  whileHover="hover"
                >
                  2
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  whileHover={{
                    backgroundColor: "hsl(var(--accent) / 0.2)",
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-4 transition-colors"
                  whileHover={{ color: "hsl(var(--accent))" }}
                >
                  Develop & Build
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled team brings your vision to life using cutting-edge
                  technologies and industry best practices. We maintain constant
                  communication throughout the development process.
                </p>

                {/* Interactive Element */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-accent font-medium">
                    → Regular progress updates
                  </div>
                </motion.div>
              </motion.div>

              {/* Connection Arrow (hidden on mobile) */}
              <motion.div
                className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-accent to-secondary transform -translate-y-1/2 z-10"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                style={{ originX: 0 }}
              >
                <motion.div
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary border-t-2 border-b-2 border-t-transparent border-b-transparent"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>

            {/* Step 3 */}
            <motion.div className="group relative" variants={processCard}>
              <motion.div
                className="bg-card p-8 rounded-2xl border hover:border-secondary/50 transition-all duration-300"
                whileHover="hover"
                variants={processCard}
              >
                {/* Step Number */}
                <motion.div
                  className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg"
                  variants={processNumber}
                  whileHover="hover"
                >
                  3
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 transition-colors"
                  whileHover={{
                    backgroundColor: "hsl(var(--secondary) / 0.2)",
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <svg
                    className="w-8 h-8 text-secondary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold mb-4 transition-colors"
                  whileHover={{ color: "hsl(var(--secondary))" }}
                >
                  Launch & Support
                </motion.h3>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure a smooth launch and provide ongoing support to
                  guarantee your success. Our commitment extends beyond delivery
                  with continuous optimization and maintenance.
                </p>

                {/* Interactive Element */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm text-secondary font-medium">
                    → 24/7 support included
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <FadeInView className="text-center mt-12" delay={0.5}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="text-lg px-8 py-6">
                Start Your Journey
              </Button>
            </motion.div>
          </FadeInView>
        </div>
      </section>

      {/* Partners Section with Infinite Scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <FadeInView className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              Trusted By Industry Leaders
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Join thousands of companies worldwide who trust us to deliver
              exceptional results
            </motion.p>
          </FadeInView>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden group">
            <motion.div
              className="flex animate-scroll-left group-hover:pause-animation"
              style={{
                width: "200%",
                animationPlayState: "running",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              <div className="flex items-center justify-center min-w-0 shrink-0">
                {/* Logo 1 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <div className="text-2xl font-bold text-primary">
                    TechCorp
                  </div>
                </motion.div>

                {/* Logo 2 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="text-2xl font-bold text-accent">
                    InnovateLab
                  </div>
                </motion.div>

                {/* Logo 3 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-2xl font-bold text-secondary">
                    FutureTech
                  </div>
                </motion.div>

                {/* Logo 4 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-2xl font-bold text-primary">
                    GlobalSoft
                  </div>
                </motion.div>

                {/* Logo 5 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-2xl font-bold text-accent">NextGen</div>
                </motion.div>

                {/* Logo 6 */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-2xl font-bold text-secondary">
                    DigiCore
                  </div>
                </motion.div>

                {/* Duplicate for seamless loop */}
                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-primary">
                    TechCorp
                  </div>
                </motion.div>

                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-accent">
                    InnovateLab
                  </div>
                </motion.div>

                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-secondary">
                    FutureTech
                  </div>
                </motion.div>

                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-primary">
                    GlobalSoft
                  </div>
                </motion.div>

                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-accent">NextGen</div>
                </motion.div>

                <motion.div
                  className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center transition-all duration-300"
                  variants={partnerLogo}
                  whileHover="hover"
                >
                  <div className="text-2xl font-bold text-secondary">
                    DigiCore
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section with Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FadeInView className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              variants={fadeInUp}
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Don&apos;t just take our word for it - hear from the companies
              who&apos;ve transformed their business with us
            </motion.p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <TestimonialsSlider />
          </FadeInView>

          {/* Bottom CTA */}
          <FadeInView className="text-center mt-16" delay={0.5}>
            <p className="text-muted-foreground mb-6">
              Ready to join our success stories?
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get Started Today
                </Button>
              </Link>
            </motion.div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
