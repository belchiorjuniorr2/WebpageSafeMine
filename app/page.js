import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Modules from "@/components/sections/Modules";
import HowItWorks from "@/components/sections/HowItWorks";
import Benefits from "@/components/sections/Benefits";
import Demo from "@/components/sections/Demo";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Modules />
        <HowItWorks />
        <Benefits />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
