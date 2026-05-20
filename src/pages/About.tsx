import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import aboutImg from "@/assets/about-hero.jpg";
import heroImg from "@/assets/hero-home.jpg";
import directorImg from "@/assets/director.png";
import {
  Eye,
  Target,
  Award,
  Users,
  Home,
  Clock,
  Paintbrush,
  Diamond,
  Lightbulb,
  Heart,
  MessageSquareQuote,
  ClipboardList,
  Layers,
  PackageCheck,
  Hammer,
  ArrowRight,
  ShieldAlert,
  Zap,
} from "lucide-react";

/* ── Counter animation hook ── */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const id = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(id);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(id);
  }, [inView, end, duration]);

  return { count, ref };
}

/* ── Data ── */
const counters = [
  { icon: Home, value: 250, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 180, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Experience" },
  { icon: Clock, value: 25, suffix: "+", label: "Design Experts" },
];

const whyChoose = [
  { icon: Paintbrush, title: "Experienced Design Team", desc: "Our skilled designers bring years of expertise to every project." },
  { icon: Diamond, title: "Premium Materials", desc: "We source only the finest materials for lasting quality." },
  { icon: Lightbulb, title: "Creative Modern Designs", desc: "Innovative design solutions tailored to your vision." },
  { icon: Zap, title: "Turnkey Execution", desc: "Timely project completion with complete quality control." },
  { icon: Clock, title: "Fast Execution", desc: "We deliver on time, every time, without compromising quality." },
  { icon: Heart, title: "Customer Satisfaction Focus", desc: "Your happiness is our ultimate measure of success." },
];

const processSteps = [
  { icon: ClipboardList, title: "Consultation", desc: "We discuss your requirements, ideas, and budget in detail." },
  { icon: Layers, title: "Planning & Design", desc: "Our team creates detailed plans and 3D design concepts." },
  { icon: PackageCheck, title: "Material Selection", desc: "We help you choose premium materials that fit your style." },
  { icon: Hammer, title: "Execution & Completion", desc: "Expert craftsmen bring the design to life with precision." },
];

/* ── Counter Card ── */
const CounterCard = ({ icon: Icon, value, suffix, label }: (typeof counters)[0]) => {
  const { count, ref } = useCounter(value);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Icon className="text-[#0B3D31]/30 mx-auto mb-3" size={36} />
      <span ref={ref} className="font-heading text-4xl md:text-5xl font-extrabold text-[#0B3D31]">
        {count}{suffix}
      </span>
      <p className="font-body text-xs sm:text-sm text-gray-500 font-semibold mt-1">{label}</p>
    </motion.div>
  );
};

/* ── Slide variants ── */
const slideLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const slideRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const About = () => (
  <div className="overflow-x-hidden w-full">
    {/* ── SECTION 1: Hero ── */}
    <div className="relative h-[45vh] md:h-[55vh] flex items-center justify-center overflow-hidden">
      <img src={aboutImg} alt="About SONACHALA" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#06231c]/75" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center z-10 px-4 max-w-3xl"
      >
        <p className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-soft font-semibold mb-4">Who We Are</p>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          About SONACHALA
        </h1>
        <p className="font-body text-green-50/80 mt-4 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Creating elegant, highly functional, and inspiring interior and exterior architectural spaces.
        </p>
      </motion.div>
    </div>

    {/* ── SECTION 2: Company Introduction (Pure White, Dark Text) ── */}
    <section className="section-padding bg-white text-[#0B3D31]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 rounded-[2rem] overflow-hidden shadow-md border border-[#0B3D31]/10 aspect-[4/3] w-full"
          >
            <img src={heroImg} alt="SONACHALA Interior Work" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <span className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">Our Story</span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B3D31] mt-3 leading-snug">
              Professional Interior & Exterior Design Specialists
            </h2>
            <p className="font-body text-sm sm:text-base text-gray-700 mt-5 leading-relaxed">
              SONACHALA Interior & Exterior is a professional design and construction company dedicated to delivering high-quality interior and exterior solutions. We specialize in transforming residential and commercial spaces into stylish, functional environments using innovative design, premium materials, and expert craftsmanship.
            </p>
            <p className="font-body text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
              Our team focuses on creativity, durability, and modern design trends to create beautiful spaces that enhance comfort, productivity, and lifestyle.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 3: Managing Director (Elegant Green, White Text) ── */}
    <section className="section-padding bg-[#0B3D31] text-white">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-soft font-bold">Leadership</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">Our Founder & CEO</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="bg-white rounded-[2rem] shadow-lg border border-[#0B3D31]/10 p-8 text-center max-w-[280px] text-[#0B3D31]">
              <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-5 transition-transform duration-500 hover:scale-105">
                <img src={directorImg} alt="J. Jayakrishnan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-lg font-bold leading-tight">J. Jayakrishnan M.E., MBA</h3>
              <p className="font-body text-primary font-semibold text-xs mt-1">Founder and CEO</p>
              <p className="font-body text-gray-500 text-[10px] uppercase tracking-wider mt-1">SONACHALA Lifespaces</p>
            </div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <MessageSquareQuote className="text-white/20 mb-4 shrink-0" size={48} />
            <blockquote className="font-body text-base sm:text-lg md:text-xl text-green-50/90 leading-relaxed italic">
              "At SONACHALA Lifespaces, our vision is to redefine spaces with creativity, innovation, and high-quality craftsmanship. We believe that every project should reflect elegance, functionality, and long-lasting value for our clients."
            </blockquote>
            <div className="w-16 h-1 bg-primary rounded-full mt-6" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 4: Vision & Mission (Pure White, Dark Text) ── */}
    <section className="section-padding bg-white text-[#0B3D31]">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-[#0B3D31]/10 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <Eye className="text-primary group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0B3D31]">Our Vision</h3>
            <div className="w-12 h-0.5 bg-primary/30 rounded-full my-4" />
            <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
              "To become a leading interior and exterior design company recognized for quality, innovation, and reliability, delivering sustainable and future-ready spaces that enhance lifestyle and architectural beauty."
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-white border border-[#0B3D31]/10 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <Target className="text-primary group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-[#0B3D31]">Our Mission</h3>
            <div className="w-12 h-0.5 bg-primary/30 rounded-full my-4" />
            <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed">
              "Our mission is to deliver high-quality interior and exterior design solutions using modern technology, premium materials, and expert craftsmanship while ensuring complete client satisfaction and long-lasting design excellence."
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── SECTION 5: Why Choose SONACHALA (Elegant Green, White Text) ── */}
    <section className="section-padding bg-[#0B3D31] text-white">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-soft font-bold">Our Strengths</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">Why Choose SONACHALA</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {whyChoose.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-green rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 text-primary-soft">
                  <item.icon size={22} />
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-white">{item.title}</h4>
                <p className="font-body text-green-50/75 text-xs sm:text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 6: Achievements / Counters (Pure White, Dark Text) ── */}
    <section className="section-padding bg-white text-[#0B3D31]">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">Our Impact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0B3D31] mt-3">Company Achievements</h2>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {counters.map((c) => (
            <CounterCard key={c.label} {...c} />
          ))}
        </div>
      </div>
    </section>

    {/* ── SECTION 7: Working Process (Elegant Green, White Text) ── */}
    <section className="section-padding bg-[#0B3D31] text-white">
      <div className="container mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="font-body text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-soft font-bold">How We Work</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">Our Working Process</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10 md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.title}
                  variants={isLeft ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 md:min-h-[160px] ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Number circle */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-extrabold text-sm border-4 border-[#0B3D31] z-20">
                    {i + 1}
                  </div>
                  
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass-card-green rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <step.icon className="text-primary-soft mb-2 shrink-0 md:mx-0" size={20} />
                      <h4 className="font-heading text-base sm:text-lg font-bold text-white">{step.title}</h4>
                      <p className="font-body text-green-50/75 text-xs sm:text-sm mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* ── SECTION 8: CTA (Pure White Background, Dark Text) ── */}
    <section className="relative py-24 md:py-32 overflow-hidden w-full text-center">
      <img src={heroImg} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#06231c]/80" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        <span className="font-body text-xs sm:text-sm uppercase tracking-[0.3em] text-primary-soft font-bold">CONTACT US</span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 leading-snug">
          Start Your Dream Interior Project Today
        </h2>
        <p className="font-body text-green-50/75 mt-4 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Let's transform your space into something extraordinary.
        </p>
        <Link
          to="/contact"
          className="btn-secondary mt-8"
        >
          Contact SONACHALA <ArrowRight size={16} className="ml-2" />
        </Link>
      </motion.div>
    </section>
  </div>
);

export default About;
