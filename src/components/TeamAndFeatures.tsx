import { motion } from "motion/react";
import { TEAM, FEATURES } from "../constants";
import { Heart, Cpu, Sparkles, BookOpen, MapPin, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Cpu,
  Sparkles,
  BookOpen,
  MapPin,
};

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-brand-slate-dark mb-6 tracking-tight">
            Meet Our Specialist Team
          </h2>
          <p className="text-lg text-brand-slate/70 max-w-2xl mx-auto">
            Highly qualified doctors dedicated to providing the best dental care in Kozhikode.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TEAM.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all group"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-slate-dark mb-1">{doctor.name}</h3>
                <p className="text-brand-teal font-bold text-sm uppercase tracking-wider mb-4">
                  {doctor.role}
                </p>
                <p className="text-brand-slate/70 leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-teal-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-5xl lg:text-7xl font-bold text-brand-slate-dark mb-10 tracking-tight">
              Why Choose Dawn Dental Care?
            </h2>
            <div className="space-y-8">
              {FEATURES.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap] || Heart;
                return (
                  <div key={index} className="flex gap-6 items-center">
                    <div className="flex-shrink-0 w-14 h-14 bg-brand-teal rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-teal/20">
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-slate-dark mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-brand-slate/70 leading-relaxed text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipM_bNk2MHorIhnIUqb31i8M4JRUiP6pYGeWVN_B=s680-w680-h510-rw"
                alt="Dental Treatment"
                className="rounded-3xl w-full h-64 object-cover mt-8 shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAG_CzdtIGHHpM3KoOSSxRoYWd2yEt4COWRaMOGOOPW85KyyrWp4Tt1C2QU5KB-XheSxB_cAfCYDxUyeLdCm1lNEuSMUdIyrsiWzoYzdbROVbg4hhvqEy8uTgkHWPpzwZ7HAPMJD=s680-w680-h510-rw"
                alt="Clinic Facility"
                className="rounded-3xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEyuUm-pBfea8cIxfYt1lUdEJZ1pOJ6BgTJaXjFvMO3_dZDeLoAbvfkT4o-_aSWi7K-_x9fd3DMR5qz3U4__ctA0dGmi4PCP_5gwQmbDYaoRUuU0rwIUYaPksBxXnZ5JKM-D5p_=s680-w680-h510-rw"
                alt="Modern Equipment"
                className="rounded-3xl w-full h-64 object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop"
                alt="Professional Care"
                className="rounded-3xl w-full h-64 object-cover -mt-8 shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
