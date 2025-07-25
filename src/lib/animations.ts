import { Variants } from "framer-motion";

// Common animation variants
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

// Stagger container for child animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Hero section specific animations
export const heroLogo: Variants = {
  hidden: { 
    opacity: 0, 
    y: -30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const heroTitle: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 1.0
    }
  }
};

export const heroTitleChar: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const heroSubtitle: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: 2.0,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const heroCTA: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      delay: 2.5,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

// Timeline animations
export const timelineItem: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const timelineItemRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const timelineLine: Variants = {
  hidden: { 
    pathLength: 0 
  },
  visible: { 
    pathLength: 1,
    transition: { 
      duration: 2.0, 
      ease: "easeInOut" 
    }
  }
};

// Process section animations
export const processCard: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: { 
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const processNumber: Variants = {
  hidden: { 
    scale: 0 
  },
  visible: { 
    scale: 1,
    transition: { 
      duration: 0.5, 
      type: "spring", 
      stiffness: 200 
    }
  },
  hover: {
    scale: 1.1,
    transition: { 
      duration: 0.2 
    }
  }
};

// Partners section animations
export const partnerLogo: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
  hover: {
    scale: 1.05,
    transition: { 
      duration: 0.2 
    }
  }
};

// Testimonials section animations
export const testimonialCard: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  },
  exit: { 
    opacity: 0, 
    x: -100,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const starRating: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.3, 
      type: "spring", 
      stiffness: 200 
    }
  }
};

// Form animations
export const formField: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

export const formError: Variants = {
  hidden: { 
    opacity: 0, 
    x: 0 
  },
  visible: { 
    opacity: 1, 
    x: [0, -10, 10, -10, 10, 0],
    transition: { 
      duration: 0.5 
    }
  }
};

export const submitButton: Variants = {
  idle: { 
    scale: 1 
  },
  loading: { 
    scale: 0.95,
    transition: { 
      duration: 0.2 
    }
  },
  success: { 
    scale: 1.05,
    transition: { 
      duration: 0.2,
      type: "spring" 
    }
  }
};

// Common easing functions
export const easing = {
  easeOutCubic: [0.25, 0.46, 0.45, 0.94],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutExpo: [0.19, 1, 0.22, 1]
} as const;

// Animation durations
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8
} as const;