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
    <div>
      <div className="flex items-center gap-3 my-6">
        <LanguagesIcon className="w-6 h-6 text-primary" />
        <h2 className="font-bold">Languages</h2>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-3"
          >
            <span style={{ fontSize: '1.5rem' }}>{language.flag}</span>
            <p className="text-foreground">
              {language.name} <span className="text-muted-foreground">- {language.level}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
