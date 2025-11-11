import { Languages as LanguagesIcon } from "lucide-react";

interface Language {
  name: string;
  level: string;
  flag: string;
}

interface LanguagesProps {
  languages: Language[];
}

const FlagUA = () => (
  <svg width="32" height="24" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg" className="rounded">
    <rect width="32" height="12" fill="#0057B7" />
    <rect y="12" width="32" height="12" fill="#FFD700" />
  </svg>
);

const FlagGB = () => (
  <svg width="32" height="24" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg" className="rounded">
    <clipPath id="t">
      <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
    </clipPath>
    <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
  </svg>
);

const flags: { [key: string]: () => JSX.Element } = {
  'UA': FlagUA,
  'GB': FlagGB,
};

export function Languages({ languages }: LanguagesProps) {
  return (
    <div>
      <div className="flex items-center gap-3 my-6">
        <LanguagesIcon className="w-6 h-6 text-primary" />
        <h2 className="font-bold">Languages</h2>
      </div>

      <div className="p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow space-y-2">
        {languages.map((language, index) => {
          const FlagComponent = flags[language.flag];
          return (
            <div
              key={index}
              className="flex items-center gap-3"
            >
              {FlagComponent ? <FlagComponent /> : <span>{language.flag}</span>}
              <p className="text-foreground">
                {language.name} <span className="text-muted-foreground">- {language.level}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
