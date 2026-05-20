import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import ceilingImg from "@/assets/service-ceiling.jpg";

const Services = () => (
  <div className="overflow-x-hidden w-full">
    <HeroBanner title="Our Services" subtitle="What We Offer" image={ceilingImg} />

    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Services"
          title="Complete Design Solutions"
          description="We offer a comprehensive range of interior and exterior design services to transform your space."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s, i) => (
            <ServiceCard 
              key={s.title} 
              image={s.image} 
              title={s.title} 
              description={s.description} 
              index={i} 
              slug={s.slug} 
              lightBg={true}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
