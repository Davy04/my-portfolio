
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles } from "lucide-react";

export function FunSection() {
  const { t } = useLanguage();

  return (
    <section id="fun" className="container-section bg-secondary/30 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-primary w-6 h-6" />
        <h2 className="section-title">{t.fun.title}</h2>
      </div>
      
      <p className="max-w-2xl mb-10 text-lg">{t.fun.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.fun.items.map((item, i) => (
          <div key={i} className="card text-center">
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
