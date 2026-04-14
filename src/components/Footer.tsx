import { motion, AnimatePresence } from "motion/react";
import { REVIEWS, CLINIC_NAME, PHONE, ADDRESS, SERVICES, GOOGLE_MAPS_URL } from "../constants";
import { Star, Phone, MessageCircle, MapPin, Clock, Facebook, Instagram, Twitter, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 3000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(REVIEWS[(currentIndex + i) % REVIEWS.length]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-bold text-brand-slate-dark mb-6 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-lg text-brand-slate/70 max-w-2xl mx-auto">
            Real experiences from people who trusted us with their smiles.
          </p>
        </div>

        <div className="relative h-[500px] md:h-[400px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 },
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
              >
                {getVisibleReviews().map((review, idx) => (
                  <div
                    key={`${currentIndex}-${idx}`}
                    className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-lg flex flex-col h-full"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg text-brand-slate-dark italic mb-6 leading-relaxed font-serif flex-grow">
                      "{review.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-teal rounded-2xl flex items-center justify-center text-white font-bold shadow-md shadow-brand-teal/10">
                        {review.author[0]}
                      </div>
                      <div>
                        <p className="font-bold text-brand-slate-dark">{review.author}</p>
                        <p className="text-brand-teal text-xs font-bold uppercase tracking-widest">Verified Patient</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 pointer-events-none z-20">
            <button
              onClick={prevReview}
              className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-brand-slate hover:text-brand-teal transition-all -translate-x-4 md:-translate-x-6"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-brand-slate hover:text-brand-teal transition-all translate-x-4 md:translate-x-6"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-brand-teal" : "w-2 bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const cleanPhone = PHONE.replace(/\s/g, "").replace(/^0/, "");
  const whatsappPhone = `91${cleanPhone}`;

  return (
    <footer id="contact" className="bg-brand-slate-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Conversion Section */}
        <div className="bg-brand-teal rounded-[40px] p-12 mb-24 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 tracking-tight">Ready to Restore Your Smile?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join over 1000+ satisfied patients in Kozhikode. Schedule your consultation with our specialists today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href={`https://wa.me/${whatsappPhone}`}
                className="bg-white text-brand-teal px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-teal-light transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Book via WhatsApp
              </a>
              <a
                href={`tel:+91${cleanPhone}`}
                className="bg-brand-slate-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-black transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Speak with a Specialist
              </a>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-teal rounded flex items-center justify-center text-white font-display text-xl font-bold">
                D
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                {CLINIC_NAME}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Kozhikode's leading multi-specialty dental clinic. Combining expert care with modern technology to give you the perfect smile.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-teal transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-teal">Services</h3>
            <ul className="space-y-4">
              {SERVICES.map((s) => (
                <li key={s.title}>
                  <a href="#services" className="text-slate-400 hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-teal">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400">
                <MapPin size={20} className="flex-shrink-0 text-brand-teal" />
                <a 
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {ADDRESS}
                </a>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Phone size={20} className="flex-shrink-0 text-brand-teal" />
                <span>{PHONE}</span>
              </li>
              <li className="flex gap-3 text-slate-400">
                <Clock size={20} className="flex-shrink-0 text-brand-teal" />
                <div>
                  <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p>Sunday: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-brand-teal">Location</h3>
            <a 
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden h-48 bg-slate-800 group relative"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 text-sm p-4 text-center group-hover:bg-slate-700 transition-colors">
                <MapPin size={32} className="mb-2 block mx-auto text-brand-teal" />
                <p className="font-bold text-white mb-1">Dawn Dental Care</p>
                <p className="text-xs">Click for Directions</p>
              </div>
              <div className="absolute inset-0 bg-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="border-top border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 {CLINIC_NAME}. All rights reserved.</p>
          <p>Website designed for conversion and optimized for lead generation.</p>
        </div>
      </div>
    </footer>
  );
}
