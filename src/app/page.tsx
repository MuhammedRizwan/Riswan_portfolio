import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about";
import { ProjectsSection } from "./components/sections/projects";
import { ExperienceSection } from "./components/sections/experience";
import { EducationSection } from "./components/sections/education";
import { ContactSection } from "./components/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-neutral-400 text-sm">
              © {new Date().getFullYear()} Muhammed Riswan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}