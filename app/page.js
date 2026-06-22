import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problema from "@/components/sections/Problema";
import Case from "@/components/sections/Case";
import HowItWorks from "@/components/sections/HowItWorks";
import Radio from "@/components/sections/Radio";
import Modules from "@/components/sections/Modules";
import AppChannel from "@/components/sections/AppChannel";
import Benefits from "@/components/sections/Benefits";
import Demo from "@/components/sections/Demo";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problema />
        <Case />
        <HowItWorks />
        <Radio />
        <Modules />
        <AppChannel />
        <Benefits />
        <Demo />
      </main>
      <Footer />
    </>
  );
}
