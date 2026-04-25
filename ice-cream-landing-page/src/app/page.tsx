import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlavorShowcase from "@/components/FlavorShowcase";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <FlavorShowcase />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
