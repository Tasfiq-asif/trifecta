"use client";

import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import WhyChoose from "@/components/sections/WhyChoose";
import WhyChooseDetails from "@/components/sections/WhyChooseDetails";
import WhyAhead from "@/components/sections/WhyAhead";
import HowItWorks from "@/components/sections/HowItWorks";

// Explicitly type the component as React.FC
const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#EEEEEE]">
      <Navbar />
      <Hero />
      <Features />
      <WhyChoose />
      <WhyChooseDetails />
      <WhyAhead />
      <HowItWorks />
    </main>
  );
};

// Make sure to use a default export
export default Home;
