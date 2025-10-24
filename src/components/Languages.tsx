import { Languages as LanguagesIcon } from "lucide-react";

interface Language {
  name: string;
  level: string;
  flag: string;
}

interface LanguagesProps {
  languages: Language[];
}

export function Languages({ languages }: LanguagesProps) {
  return (
    <section className="w-full py-12 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <LanguagesIcon className="w-6 h-6 text-primary" />
          <h2>Languages</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{language.flag}</span>
              <div>
                <p className="text-foreground">{language.name}</p>
                <p className="text-muted-foreground">{language.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
