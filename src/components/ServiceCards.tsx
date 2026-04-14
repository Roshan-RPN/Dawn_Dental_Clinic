import { motion } from "motion/react";
import { SERVICES } from "../constants";

export function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-slate-dark mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-brand-slate/70 max-w-2xl mx-auto">
            Comprehensive dental solutions delivered by specialists using the latest technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div key={index}>
              <FlipCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ service }: { service: typeof SERVICES[0] }) {
  return (
    <div className="group h-[400px] [perspective:1000px]">
      <div className="relative h-full w-full rounded-3xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full rounded-3xl [backface-visibility:hidden]">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full rounded-3xl object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-3xl flex flex-col justify-end p-8">
            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-white/80 font-medium">{service.frontText}</p>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 h-full w-full rounded-3xl bg-brand-teal p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-lg leading-relaxed mb-6">{service.backText}</p>
          <button className="bg-white text-brand-teal px-6 py-2 rounded-full font-bold hover:bg-brand-teal-light transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
