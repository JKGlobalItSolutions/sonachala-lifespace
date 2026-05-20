import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  category: string;
  index: number;
  onClick?: () => void;
}

const ProjectCard = ({ image, title, category, index, onClick }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-30px" }}
    transition={{ duration: 0.5, delay: index * 0.06 }}
    className="group relative rounded-[1.75rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 aspect-[4/3] w-full cursor-pointer"
    onClick={onClick}
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-750 group-hover:scale-110" 
      loading="lazy" 
    />
    {/* Permanent subtle luxury gradient for high legibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-all duration-300 opacity-70 group-hover:opacity-90" />
    
    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
      <span className="text-[10px] md:text-xs font-body font-semibold uppercase tracking-[0.2em] text-primary-soft">
        {category}
      </span>
      <h3 className="font-heading text-base md:text-xl font-bold text-white mt-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        {title}
      </h3>
    </div>
  </motion.div>
);

export default ProjectCard;
