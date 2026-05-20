import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  image: string;
  title: string;
  description: string;
  index: number;
  slug?: string;
  lightBg?: boolean;
}

const ServiceCard = ({ image, title, description, index, slug, lightBg = false }: Props) => {
  const cardClasses = lightBg
    ? "bg-white border border-[#0B3D31]/10 text-[#0B3D31] hover:border-primary/30"
    : "glass-card-green text-white";

  const titleClasses = lightBg
    ? "text-[#0B3D31]"
    : "text-white";

  const descClasses = lightBg
    ? "text-gray-600"
    : "text-green-50/80";

  const linkClasses = lightBg
    ? "text-primary hover:text-secondary"
    : "text-primary-soft hover:text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`group rounded-[1.8rem] overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${cardClasses}`}
    >
      <div className="overflow-hidden rounded-[1.4rem] relative aspect-[4/3] w-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy" 
        />
      </div>
      <div className="mt-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className={`font-heading text-lg md:text-xl font-bold mb-3 ${titleClasses}`}>{title}</h3>
          <p className={`font-body text-xs md:text-sm leading-relaxed mb-5 ${descClasses}`}>{description}</p>
        </div>
        {slug && (
          <div>
            <Link
              to={`/services/${slug}`}
              className={`inline-flex items-center gap-2 font-body font-semibold text-xs md:text-sm hover:gap-3 transition-all ${linkClasses}`}
            >
              View Details <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
