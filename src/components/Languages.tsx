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

      <div className="grid grid-cols-1 gap-4">
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
  );
}
