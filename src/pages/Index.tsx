import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import { Award, Users, DollarSign, Shield, Zap, Paintbrush, ArrowRight, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import heroImg from "@/assets/hero-home.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import livingImg from "@/assets/project-living.jpg";
import exteriorImg from "@/assets/project-exterior.jpg";
import officeImg from "@/assets/project-office.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import { services } from "@/data/services";

const homeServices = services.slice(0, 6);

const whyChoose = [
  { icon: Paintbrush, title: "Bespoke Vision", desc: "Bespoke modern designs tailored to your unique lifestyle." },
  { icon: Award, title: "Premium Materials", desc: "Expert craftsmanship utilizing only the finest premium materials." },
  { icon: Shield, title: "Turnkey Execution", desc: "On-time project delivery with absolute quality assurance." },
];

const processSteps = [
  { step: "01", title: "Consultation", desc: "We listen to your vision, understand your requirements, and provide expert guidance." },
  { step: "02", title: "Design Planning", desc: "Detailed 3D visualizations, material selection, and comprehensive project planning." },
  { step: "03", title: "Material Selection", desc: "Hand-picked premium materials sourced from trusted suppliers for quality assurance." },
  { step: "04", title: "Execution", desc: "Expert implementation with regular quality checks and on-time project delivery." },
];

const projects = [
  { image: livingImg, title: "Modern Living Room", category: "Interior" },
  { image: kitchenImg, title: "Luxury Kitchen", category: "Interior" },
  { image: bedroomImg, title: "Master Bedroom", category: "Interior" },
  { image: exteriorImg, title: "Contemporary Villa", category: "Exterior" },
  { image: officeImg, title: "Office Space", category: "Commercial" },
  { image: bathroomImg, title: "Spa Bathroom", category: "Interior" },
];

const testimonials = [
  { name: "Kirubakaran", text: "SONACHALA transformed our home beyond our imagination. Every detail was crafted to perfection. The team was professional and delivered on time!", role: "Homeowner" },
  { name: "Priya", text: "Professional team, timely delivery, and stunning results. Our villa looks like a magazine cover now. Highly recommend their services!", role: "Villa Owner" },
  { name: "Mahalakshmi", text: "The best investment we made for our business. Our office space looks world-class and employee satisfaction has significantly improved.", role: "Business Owner" },
  { name: "Kumar", text: "From false ceiling to modular kitchen, SONACHALA handled everything seamlessly. Their attention to detail is truly remarkable.", role: "Apartment Owner" },
];

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => setCurrentTestimonial((p) => (p + 1) % testimonials.length), []);
  const prevTestimonial = useCallback(() => setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <div className="overflow-x-hidden w-full">
      {/* 1. Navbar is sticky (rendered globally in App.tsx) */}

      {/* 2. Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden w-full">
        <motion.img
          src={heroImg}
          alt="SONACHALA Interior Design"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ scale: heroScale }}
        />
        <motion.div className="absolute inset-0 bg-[#06231c]/75" style={{ opacity: heroOpacity }} />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-white font-semibold"
            >
              SONACHALA LIFESPACES | Interiors & Exteriors
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 leading-[1.1] tracking-tight"
            >
              Transforming Spaces Into Beautiful Living Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-body text-base sm:text-lg text-green-50/80 mt-6 max-w-xl leading-relaxed"
            >
              We create elegant, functional, and inspiring spaces that reflect your unique personality and elevate your everyday lifestyle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 mt-8 sm:mt-10"
            >
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link to="/projects" className="btn-secondary">
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. About Section [NEW] (Pure White Background, Dark Text) */}
      <section className="section-padding bg-white text-[#0B3D31] w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Premium overlapping image compositions */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-lg border border-[#0B3D31]/10">
                <img 
                  src={livingImg} 
                  alt="Elegant Living Room" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-1/2 aspect-square overflow-hidden rounded-[2rem] shadow-xl border-4 border-white z-10 hidden sm:block">
                <img 
                  src={kitchenImg} 
                  alt="Modern Luxury Kitchen" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Right: Sleek typography details */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary font-bold">
                ABOUT SONACHALA
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 leading-tight">
                Crafting Spaces of Bespoke Distinction & Integrity
              </h2>
              <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed mb-8">
                At SONACHALA Interior & Exterior, we are dedicated to redefining residential and commercial spaces. By uniting high-end aesthetics, innovative ergonomics, and premium materials, we craft environments that enrich your life and increase the lasting value of your property.
              </p>
              
              {/* Feature pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {whyChoose.map((item) => (
                  <div key={item.title} className="flex flex-col items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-[#0B3D31] mb-1">{item.title}</h4>
                    <p className="font-body text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div>
                <Link to="/about" className="btn-primary">
                  Learn Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Section (Elegant Green Background, White Text) */}
      <section className="section-padding bg-[#0B3D31] text-white w-full">
        <div className="container mx-auto">
          <SectionHeading 
            subtitle="What We Do" 
            title="Our Design Services" 
            description="From spatial conception to final completion, we offer comprehensive interior and exterior design services." 
            light={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {homeServices.map((s, i) => (
              <ServiceCard 
                key={s.title} 
                image={s.image} 
                title={s.title} 
                description={s.description} 
                index={i} 
                slug={s.slug}
                lightBg={false} 
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-soft font-body font-semibold text-sm hover:gap-3 transition-all">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Process Timeline Section (Pure White Background, Dark Text) */}
      <section className="section-padding bg-white text-[#0B3D31] w-full">
        <div className="container mx-auto">
          <SectionHeading 
            subtitle="How We Work" 
            title="Our Working Process" 
            description="Our structured turnkey framework keeps your architectural journey transparent, seamless, and efficient."
          />
          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#0B3D31]/10 -translate-x-1/2" />
            <div className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-[#0B3D31]/10" />

            <div className="space-y-12 md:space-y-0">
              {processSteps.map((p, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <motion.div
                    key={p.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:min-h-[180px] ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="bg-white border border-[#0B3D31]/10 rounded-[1.75rem] p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="font-heading text-3xl font-extrabold text-primary/25 leading-none">{p.step}</span>
                        <h3 className="font-heading font-bold text-[#0B3D31] text-lg mt-1">{p.title}</h3>
                        <p className="font-body text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">{p.desc}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white z-10" />
                    <div className="hidden md:block md:w-1/2" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Project Gallery Section (Elegant Green Background, White Text) */}
      <section className="section-padding bg-[#0B3D31] text-white w-full">
        <div className="container mx-auto">
          <SectionHeading 
            subtitle="Portfolio" 
            title="Our Latest Projects" 
            description="Explore our stunning showcase of luxury interiors and architectural transformations."
            light={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary-soft font-body font-semibold text-sm hover:gap-3 transition-all">
              View All Showcase Works <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section (Pure White Background, Dark Text) */}
      <section className="section-padding bg-white text-[#0B3D31] w-full">
        <div className="container mx-auto">
          <SectionHeading 
            subtitle="Testimonials" 
            title="What Our Clients Say" 
          />
          <div className="relative max-w-2xl mx-auto mt-12">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-[#0B3D31]/10 shadow-soft rounded-[2.5rem] p-8 md:p-12 text-center relative"
              >
                <MessageSquareQuote className="text-primary/10 mx-auto mb-6 shrink-0" size={48} />
                <p className="font-body text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic mb-8">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="font-heading font-bold text-[#0B3D31] text-base md:text-lg">{testimonials[currentTestimonial].name}</h4>
                <p className="font-body text-xs text-primary font-medium mt-1">{testimonials[currentTestimonial].role}</p>
              </motion.div>
            </div>
            
            {/* Nav Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial} 
                className="w-11 h-11 rounded-full bg-[#0B3D31]/5 text-[#0B3D31] flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-primary w-6" : "bg-[#0B3D31]/15 w-2"}`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="w-11 h-11 rounded-full bg-[#0B3D31]/5 text-[#0B3D31] flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact CTA Section (Elegant Green Background, White Text) */}
      <section className="section-padding bg-[#0B3D31] text-center w-full">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
            className="rounded-[3rem] bg-gradient-to-br from-[#06231c] to-[#0A3429] border border-white/10 p-8 md:p-14 shadow-soft"
          >
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary-soft font-bold">
              GET IN TOUCH
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-tight">
              Ready to Transform Your Space?
            </h2>
            <p className="font-body text-sm sm:text-base text-green-50/80 mt-4 max-w-xl mx-auto leading-relaxed">
              Book a bespoke free architectural consultation with our team and let's craft your dream space together.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact" className="btn-secondary">
                Get Started Today <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Footer Section is globally rendered in App.tsx */}
    </div>
  );
};

export default Index;
