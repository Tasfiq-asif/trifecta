"use client";

import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

// Explicitly type the component as React.FC
const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#EEEEEE]">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
};

// Make sure to use a default export
export default Home;
