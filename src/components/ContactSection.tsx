
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    { 
      icon: <Github className="h-5 w-5" />, 
      url: "https://github.com", 
      label: "GitHub"
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      url: "https://linkedin.com", 
      label: "LinkedIn"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      url: "https://instagram.com", 
      label: "Instagram"
    },
    { 
      icon: <Mail className="h-5 w-5" />, 
      url: "mailto:contact@example.com", 
      label: "Email"
    },
  ];

  return (
    <section id="contact" className="container-section animate-fade-in">
      <h2 className="section-title text-center mb-10">{t.contact.title}</h2>
      
      <div className="max-w-md mx-auto text-center mb-10">
        <p className="text-lg mb-8">{t.contact.description}</p>
        
        <div className="flex justify-center gap-4">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
