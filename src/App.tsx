import Nav from "@/components/Nav";
import ProfileHero from "@/components/ProfileHero";
import About from "@/components/About";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import PreviewLab from "@/components/PreviewLab";
import Features from "@/components/Features";
import DeviceCoverage from "@/components/DeviceCoverage";
import Screenshots from "@/components/Screenshots";
import RepoSection from "@/components/RepoSection";
import Footer from "@/components/Footer";
import ViewportBadge from "@/components/ViewportBadge";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6f9ff] text-navy-950 antialiased">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-full focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <ProfileHero />
        <About />
        <ExperienceSection />
        <Hero />
        <Ticker />
        <PreviewLab />
        <Features />
        <DeviceCoverage />
        <Screenshots />
        <RepoSection />
      </main>

      <Footer />
      <ViewportBadge />
    </div>
  );
}
