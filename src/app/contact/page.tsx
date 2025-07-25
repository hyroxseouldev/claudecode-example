"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeInView } from "@/components/animations/FadeInView";
import { 
  fadeInUp, 
  staggerContainer, 
  formField, 
  formError, 
  submitButton 
} from "@/lib/animations";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  name: string;
  phone: string;
  address: string;
  email?: string;
  message?: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  address?: string;
  email?: string;
  consent?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    address: "",
    email: "",
    message: "",
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const validateEmail = (email: string): boolean => {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success/failure (80% success rate)
      if (Math.random() > 0.2) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          address: "",
          email: "",
          message: "",
          consent: false
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={120}
                height={40}
                className="text-primary"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex space-x-8">
              <Link 
                href="/" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="text-foreground font-medium"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <FadeInView className="text-center mb-12">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground"
              variants={fadeInUp}
            >
              Ready to transform your digital presence? Let&apos;s discuss your project and create something amazing together.
            </motion.p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <motion.div
              className="bg-card p-8 rounded-2xl border shadow-lg"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div variants={formField}>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`peer w-full px-4 py-3 border rounded-lg bg-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.name ? "border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-card peer-focus:px-2 peer-focus:-translate-y-1/2 top-0 text-sm bg-card px-2 -translate-y-1/2"
                    >
                      Name *
                    </label>
                  </div>
                  {errors.name && (
                    <motion.p
                      variants={formError}
                      initial="hidden"
                      animate="visible"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </motion.div>

                {/* Phone Field */}
                <motion.div variants={formField}>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`peer w-full px-4 py-3 border rounded-lg bg-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.phone ? "border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-card peer-focus:px-2 peer-focus:-translate-y-1/2 top-0 text-sm bg-card px-2 -translate-y-1/2"
                    >
                      Phone Number *
                    </label>
                  </div>
                  {errors.phone && (
                    <motion.p
                      variants={formError}
                      initial="hidden"
                      animate="visible"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                {/* Address Field */}
                <motion.div variants={formField}>
                  <div className="relative">
                    <textarea
                      id="address"
                      rows={3}
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className={`peer w-full px-4 py-3 border rounded-lg bg-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none ${
                        errors.address ? "border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-card peer-focus:px-2 peer-focus:-translate-y-1/2 top-0 text-sm bg-card px-2 -translate-y-1/2"
                    >
                      Address *
                    </label>
                  </div>
                  {errors.address && (
                    <motion.p
                      variants={formError}
                      initial="hidden"
                      animate="visible"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.address}
                    </motion.p>
                  )}
                </motion.div>

                {/* Email Field (Optional) */}
                <motion.div variants={formField}>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`peer w-full px-4 py-3 border rounded-lg bg-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        errors.email ? "border-red-500" : "border-border focus:border-primary"
                      }`}
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-card peer-focus:px-2 peer-focus:-translate-y-1/2 top-0 text-sm bg-card px-2 -translate-y-1/2"
                    >
                      Email (Optional)
                    </label>
                  </div>
                  {errors.email && (
                    <motion.p
                      variants={formError}
                      initial="hidden"
                      animate="visible"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </motion.div>

                {/* Message Field (Optional) */}
                <motion.div variants={formField}>
                  <div className="relative">
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="peer w-full px-4 py-3 border border-border rounded-lg bg-background transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      placeholder=" "
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary peer-focus:bg-card peer-focus:px-2 peer-focus:-translate-y-1/2 top-0 text-sm bg-card px-2 -translate-y-1/2"
                    >
                      Message (Optional)
                    </label>
                  </div>
                </motion.div>

                {/* Consent Checkbox */}
                <motion.div variants={formField}>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="consent"
                      checked={formData.consent}
                      onChange={(e) => handleInputChange("consent", e.target.checked)}
                      className="mt-1 w-4 h-4 text-primary border-border rounded focus:ring-primary/50"
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I agree to the processing of my personal data in accordance with the privacy policy *
                    </label>
                  </div>
                  {errors.consent && (
                    <motion.p
                      variants={formError}
                      initial="hidden"
                      animate="visible"
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.consent}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div variants={formField}>
                  <motion.div
                    variants={submitButton}
                    animate={isSubmitting ? "loading" : submitStatus === "success" ? "success" : "idle"}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full text-lg py-6 relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                          Sending...
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-200 text-center">
                      🎉 Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-800 dark:text-red-200 text-center">
                      ❌ Sorry, there was an error sending your message. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </FadeInView>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}