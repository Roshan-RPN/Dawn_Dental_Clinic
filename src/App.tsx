import { Navbar, Hero, SocialProofBar } from "./components/Hero";
import { ServiceCards } from "./components/ServiceCards";
import { TeamSection, WhyChooseUs } from "./components/TeamAndFeatures";
import { Testimonials, Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-teal selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProofBar />
        <ServiceCards />
        <WhyChooseUs />
        <TeamSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
