import { motion } from "framer-motion";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-2xl mx-auto mb-12"
  >
    {subtitle && (
      <span className={`font-body text-xs uppercase tracking-[0.35em] ${light ? "text-primary-foreground/75" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3 ${light ? "text-primary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-5 font-body leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
