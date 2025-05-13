import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TechnologiesSection } from "@/components/TechnologiesSection";
import { FunSection } from "@/components/FunSection";
import { ContactSection } from "@/components/ContactSection";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Index = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Davy Woolley | Portfólio"; // 🔁 Altere aqui para seu nome
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/30 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')] bg-cover bg-center opacity-20"></div>
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-secondary/10 filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div 
          className={`text-center max-w-3xl mx-auto relative z-10 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <p className="text-primary mb-3 font-medium transition-all duration-500" 
             style={{ transitionDelay: "200ms" }}>{t.hero.greeting}</p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 transition-all duration-500" 
              style={{ transitionDelay: "400ms" }}>{t.hero.name}</h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500"
              style={{ transitionDelay: "600ms" }}>{t.hero.title}</h2>
          
          <p className="text-xl text-muted-foreground mb-8 transition-all duration-500 max-w-xl mx-auto"
             style={{ transitionDelay: "800ms" }}>{t.hero.subtitle}</p>
          
          <Button 
            asChild
            className="transition-all duration-500 hover:scale-105"
            style={{ transitionDelay: "1000ms" }}
          >
            <a href="#about" className="flex items-center gap-2 group">
              {t.hero.cta} 
              <ArrowDown className="h-4 w-4 transition-transform group-hover:animate-bounce" />
            </a>
          </Button>
        </div>

        <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-primary/30 rotate-45 animate-spin-slow opacity-70 hidden md:block"></div>
        <div className="absolute top-20 right-20 w-12 h-12 border-2 border-primary/30 rounded-full animate-pulse opacity-70 hidden md:block"></div>
      </section>
      
      <AboutSection />
      <ProjectsSection />
      <TechnologiesSection />
      <FunSection />
      <ContactSection />
      
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
