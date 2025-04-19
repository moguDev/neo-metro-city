import ComponentsSection from "@/components/ComponentsSection";
import ContributorsSection from "@/components/ContributorsSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowToInstallSection from "@/components/HowToInstallSection";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto">
        <Hero />
        <div className="space-y-8 px-2">
          <HowToInstallSection />
          <ComponentsSection />
          <ContributorsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
