
import { useLanguage } from "@/context/LanguageContext";
import { Code } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function TechnologiesSection() {
  const { t } = useLanguage();

  // Function to convert skill level to percentage
  const getSkillLevel = (level: string): number => {
    switch (level.toLowerCase()) {
      case "expert":
      case "especialista":
        return 95;
      case "advanced":
      case "avançado":
        return 80;
      case "intermediate":
      case "intermediário":
        return 60;
      case "beginner":
      case "iniciante":
        return 40;
      default:
        return 50;
    }
  };

  return (
    <section id="technologies" className="container-section animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Code className="text-primary w-6 h-6" />
        <h2 className="section-title">{t.technologies.title}</h2>
      </div>
      
      <p className="max-w-2xl mb-10 text-lg">{t.technologies.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {t.technologies.categories.map((category, i) => (
          <div key={i} className="card">
            <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
            <div className="space-y-5">
              {category.items.map((item, j) => (
                <div key={j}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-muted-foreground">{item.level}</span>
                  </div>
                  <Progress value={getSkillLevel(item.level)} className="h-1.5" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
