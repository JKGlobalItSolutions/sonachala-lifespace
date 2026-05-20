import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
  image: string;
}

const HeroBanner = ({ title, subtitle, image }: Props) => (
  <section className="relative h-[42vh] md:h-[52vh] lg:h-[58vh] flex items-center overflow-hidden w-full">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-[#06231c]/75" />
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="relative z-10 container mx-auto px-4 text-center"
    >
      {subtitle && (
        <p className="font-body text-xs sm:text-sm uppercase tracking-[0.35em] text-primary-soft font-semibold mb-4">{subtitle}</p>
      )}
      <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">{title}</h1>
      <div className="mt-5 max-w-2xl mx-auto">
        <p className="font-body text-xs sm:text-sm md:text-base text-green-50/80 leading-relaxed">
          Delivering premium bespoke interior and exterior solutions crafted with uncompromising luxury and precision.
        </p>
      </div>
    </motion.div>
  </section>
);

export default HeroBanner;
