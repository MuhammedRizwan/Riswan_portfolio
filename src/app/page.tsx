import { Navigation } from "./components/navigation";
import { HeroSection } from "./components/sections/hero";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load sections below the fold for better initial load performance
const AboutSection = dynamic(() => import('./components/sections/about').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="h-screen" />,
});

const ProjectsSection = dynamic(() => import('./components/sections/projects').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="h-screen" />,
});

const ExperienceSection = dynamic(() => import('./components/sections/experience').then(mod => ({ default: mod.ExperienceSection })), {
  loading: () => <div className="h-screen" />,
});

const EducationSection = dynamic(() => import('./components/sections/education').then(mod => ({ default: mod.EducationSection })), {
  loading: () => <div className="h-screen" />,
});

const ContactSection = dynamic(() => import('./components/sections/contact').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-screen" />,
});

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <div id="home">
        <HeroSection />
      </div>
      <Suspense fallback={<div className="h-screen" />}>
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </Suspense>
      
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