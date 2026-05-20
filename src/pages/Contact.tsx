import { useState } from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import aboutImg from "@/assets/about-hero.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="overflow-x-hidden w-full">
      <HeroBanner title="Contact Us" subtitle="Get In Touch" image={aboutImg} />

      <section className="section-padding bg-white text-[#0B3D31]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white border border-[#0B3D31]/10 rounded-[2.5rem] p-8 md:p-12 shadow-soft"
            >
              <h2 className="font-heading text-2xl font-bold mb-2">Send Us a Message</h2>
              <p className="font-body text-gray-500 text-xs sm:text-sm mb-8 leading-relaxed">
                Fill out the form and our design consultants will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-[#0B3D31]/10 bg-gray-50/50 px-4 py-3 font-body text-sm text-[#0B3D31] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-2xl border border-[#0B3D31]/10 bg-gray-50/50 px-4 py-3 font-body text-sm text-[#0B3D31] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-[#0B3D31]/10 bg-gray-50/50 px-4 py-3 font-body text-sm text-[#0B3D31] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                />
                <textarea
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-2xl border border-[#0B3D31]/10 bg-gray-50/50 px-4 py-3 font-body text-sm text-[#0B3D31] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                />
                <button
                  type="submit"
                  className="btn-primary w-full justify-center mt-3"
                >
                  <Send size={16} className="mr-2" /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-white border border-[#0B3D31]/10 rounded-[2.5rem] p-8 shadow-soft space-y-6">
                <h3 className="font-heading text-xl font-bold mb-4 border-b border-gray-100 pb-3">Contact Information</h3>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm">Address</p>
                    <p className="font-body text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      Annai Parvathi, Opp. Collector Office, Vengikkal, Tiruvannamalai - 606604
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm">Phone</p>
                    <p className="font-body text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      +91 8608601049, <br />+91 8608600772
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm">Email</p>
                    <p className="font-body text-xs sm:text-sm text-gray-600 mt-1 hover:underline">
                      <a href="mailto:hrifyinteriorexterior@gmail.com">hrifyinteriorexterior@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
