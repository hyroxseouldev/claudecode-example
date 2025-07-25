import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 dark:from-primary/30 dark:via-accent/20 dark:to-secondary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-background/30" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-500" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="text-foreground">Digital Future</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
            Experience innovation at its finest with our cutting-edge solutions that 
            empower businesses to reach new heights in the digital landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Learn More
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              From inception to innovation, discover the milestones that shaped our path to excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-16">
              {/* Milestone 1 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-right">
                  <div className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="text-sm font-semibold text-primary mb-2">2020</div>
                    <h3 className="text-xl font-bold mb-3">Foundation</h3>
                    <p className="text-muted-foreground">
                      Started with a vision to revolutionize digital experiences. 
                      Our founders brought together decades of expertise to create something extraordinary.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="w-4 h-4 bg-primary-foreground rounded-full animate-pulse" />
                </div>
                
                <div className="lg:w-1/2 lg:pl-12" />
              </div>

              {/* Milestone 2 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
                  <div className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="text-sm font-semibold text-accent mb-2">2021</div>
                    <h3 className="text-xl font-bold mb-3">First Major Launch</h3>
                    <p className="text-muted-foreground">
                      Launched our flagship product that transformed how businesses 
                      approach digital transformation, gaining 10,000+ users in the first quarter.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="w-4 h-4 bg-accent-foreground rounded-full animate-pulse animation-delay-200" />
                </div>
                
                <div className="lg:w-1/2 lg:pr-12" />
              </div>

              {/* Milestone 3 */}
              <div className="relative flex flex-col lg:flex-row items-center lg:items-start">
                <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-right">
                  <div className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="text-sm font-semibold text-secondary mb-2">2022</div>
                    <h3 className="text-xl font-bold mb-3">Global Expansion</h3>
                    <p className="text-muted-foreground">
                      Expanded operations across 15 countries, establishing partnerships 
                      with industry leaders and scaling our team to 500+ professionals.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-secondary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="w-4 h-4 bg-secondary-foreground rounded-full animate-pulse animation-delay-400" />
                </div>
                
                <div className="lg:w-1/2 lg:pl-12" />
              </div>

              {/* Milestone 4 */}
              <div className="relative flex flex-col lg:flex-row-reverse items-center lg:items-start">
                <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
                  <div className="bg-card p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                    <div className="text-sm font-semibold text-primary mb-2">2024</div>
                    <h3 className="text-xl font-bold mb-3">Innovation Leadership</h3>
                    <p className="text-muted-foreground">
                      Leading the industry with AI-powered solutions, serving over 1 million users 
                      and recognized as the fastest-growing tech company in our sector.
                    </p>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                  <div className="w-4 h-4 bg-primary-foreground rounded-full animate-pulse animation-delay-600" />
                </div>
                
                <div className="lg:w-1/2 lg:pr-12" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3-Step Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience our streamlined process designed to deliver exceptional results in just three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="group relative">
              <div className="bg-card p-8 rounded-2xl border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  1
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Discover & Plan
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We begin by understanding your unique needs and challenges. Our experts conduct thorough analysis to create a customized strategy that aligns with your goals.
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-sm text-primary font-medium">
                    → Free consultation included
                  </div>
                </div>
              </div>
              
              {/* Connection Arrow (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-10">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-accent border-t-2 border-b-2 border-t-transparent border-b-transparent" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="bg-card p-8 rounded-2xl border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  2
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                  Develop & Build
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our skilled team brings your vision to life using cutting-edge technologies and industry best practices. We maintain constant communication throughout the development process.
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-sm text-accent font-medium">
                    → Regular progress updates
                  </div>
                </div>
              </div>
              
              {/* Connection Arrow (hidden on mobile) */}
              <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-accent to-secondary transform -translate-y-1/2 z-10">
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-secondary border-t-2 border-b-2 border-t-transparent border-b-transparent" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="bg-card p-8 rounded-2xl border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                  3
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors">
                  Launch & Support
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We ensure a smooth launch and provide ongoing support to guarantee your success. Our commitment extends beyond delivery with continuous optimization and maintenance.
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-sm text-secondary font-medium">
                    → 24/7 support included
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section with Infinite Scroll */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Trusted By Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of companies worldwide who trust us to deliver exceptional results
            </p>
          </div>

          {/* Infinite Scroll Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left">
              <div className="flex items-center justify-center min-w-0 shrink-0">
                {/* Logo 1 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary">TechCorp</div>
                </div>
                
                {/* Logo 2 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-accent">InnovateLab</div>
                </div>
                
                {/* Logo 3 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-secondary">FutureTech</div>
                </div>
                
                {/* Logo 4 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary">GlobalSoft</div>
                </div>
                
                {/* Logo 5 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-accent">NextGen</div>
                </div>
                
                {/* Logo 6 */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-secondary">DigiCore</div>
                </div>
                
                {/* Duplicate for seamless loop */}
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary">TechCorp</div>
                </div>
                
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-accent">InnovateLab</div>
                </div>
                
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-secondary">FutureTech</div>
                </div>
                
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-primary">GlobalSoft</div>
                </div>
                
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-accent">NextGen</div>
                </div>
                
                <div className="mx-8 h-16 w-32 bg-card rounded-lg border flex items-center justify-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl font-bold text-secondary">DigiCore</div>
                </div>
              </div>
            </div>
            
            {/* Fade edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section with Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear from the companies who&apos;ve transformed their business with us
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-card p-8 rounded-2xl border hover:shadow-xl transition-shadow group">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  &quot;The team delivered beyond our expectations. Their expertise and dedication transformed our digital presence completely. ROI increased by 300% within the first quarter.&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold text-lg">JD</span>
                  </div>
                  <div>
                    <div className="font-semibold">John Davis</div>
                    <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-card p-8 rounded-2xl border hover:shadow-xl transition-shadow group">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  &quot;Incredible attention to detail and innovative solutions. They understood our vision perfectly and brought it to life with cutting-edge technology.&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Martinez</div>
                    <div className="text-sm text-muted-foreground">CTO, InnovateLab</div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-card p-8 rounded-2xl border hover:shadow-xl transition-shadow group">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground mb-6 italic">
                  &quot;Professional, reliable, and results-driven. The project was delivered on time and exceeded all our performance benchmarks. Highly recommended!&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-secondary font-bold text-lg">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Michael Johnson</div>
                    <div className="text-sm text-muted-foreground">Founder, FutureTech</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-muted-foreground mb-6">Ready to join our success stories?</p>
              <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
