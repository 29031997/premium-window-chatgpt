import { StickyHeader } from "@/components/site/sticky-header";
import { HeroStory } from "@/components/site/hero-story";
import { ProjectsSection } from "@/components/site/projects-section";
import { WindowConfigurator } from "@/components/configurator/window-configurator";
import { ContactSection } from "@/components/site/contact-section";

export default function Home() {
  return (
    <main>
      <StickyHeader />
      <HeroStory />
      <ProjectsSection />
      <WindowConfigurator />
      <ContactSection />
    </main>
  );
}
