
import { useLanguage } from "@/context/LanguageContext";
import { User } from "lucide-react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="container-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <User className="text-primary w-6 h-6" />
        <h2 className="section-title">{t.about.title}</h2>
      </div>
      
      <div className="space-y-8">
        <div className="max-w-3xl">
          {t.about.description.map((paragraph, i) => (
            <p key={i} className="mb-4 text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6">{t.about.experience.title}</h3>
          <div className="space-y-8">
            {t.about.experience.items.map((item, i) => (
              <div key={i} className="card">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h4 className="text-xl font-medium">{item.role}</h4>
                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="text-primary font-medium mb-2">{item.company}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
