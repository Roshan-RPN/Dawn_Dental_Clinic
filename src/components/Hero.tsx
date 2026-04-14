import { motion } from "motion/react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import { CLINIC_NAME, PHONE, GOOGLE_MAPS_URL } from "../constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cleanPhone = PHONE.replace(/\s/g, "").replace(/^0/, "");

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-teal rounded-lg flex items-center justify-center text-white font-display text-2xl font-bold">
              D
            </div>
            <span className="font-display text-xl font-bold text-brand-slate-dark tracking-tight">
              {CLINIC_NAME}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-brand-slate hover:text-brand-teal font-display font-semibold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:+91${cleanPhone}`}
              className="bg-brand-teal text-white px-6 py-2.5 rounded-full font-display font-bold hover:bg-brand-teal-dark transition-all shadow-lg shadow-brand-teal/20 flex items-center gap-2"
            >
              <Phone size={18} />
              Book Appointment
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-slate p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-brand-slate hover:text-brand-teal font-display font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href={`tel:+91${cleanPhone}`}
            className="block w-full bg-brand-teal text-white px-6 py-3 rounded-xl font-display font-bold text-center"
          >
            Call: {PHONE}
          </a>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  const cleanPhone = PHONE.replace(/\s/g, "").replace(/^0/, "");
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-teal-light/30 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-teal-light text-brand-teal-dark rounded-full text-sm font-bold tracking-wide uppercase mb-6">
                Multi-Specialty Dental Clinic
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-brand-slate-dark leading-[1.1] mb-6">
                Expert Dental Care You Can <span className="text-brand-teal">Trust</span> in Kozhikode.
              </h1>
              <p className="text-lg text-brand-slate/80 leading-relaxed mb-10 max-w-xl">
                Specialist-led care combining advanced technology with a gentle touch. 
                From painless root canals to expert implants, we restore your smile with precision.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:+91${cleanPhone}`}
                  className="bg-brand-teal text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-teal-dark transition-all shadow-xl shadow-brand-teal/20 text-center flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  Call for Appointment
                </a>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-brand-slate-dark border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-teal hover:text-brand-teal transition-all text-center flex items-center justify-center gap-3"
                >
                  <MapPin size={20} />
                  Get Directions
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNhhv3NAax4LIuHrGBsWQBPZT7o7KtAlCMiByMh=s680-w680-h510-rw"
                alt="Modern Dental Clinic"
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Trusted by</p>
                    <p className="text-xl font-bold text-brand-slate-dark">1000+ Happy Patients</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SocialProofBar() {
  const stats = [
    { label: "Google Rating", value: "⭐ 4.9/5" },
    { label: "Satisfied Patients", value: "1000+" },
    { label: "Accreditation", value: "IDA Accredited" },
    { label: "Experience", value: "8+ Years" },
  ];

  return (
    <div className="bg-brand-slate-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
