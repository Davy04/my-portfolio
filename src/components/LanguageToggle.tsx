
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-full"
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="text-sm font-medium">{language.toUpperCase()}</span>
    </Button>
  );
}
