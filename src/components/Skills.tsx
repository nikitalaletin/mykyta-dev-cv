import { Badge } from "./ui/badge";
import { Code2 } from "lucide-react";
import { TechIcon } from "./TechIcon";

interface Skill {
  name: string;
  icon?: string;
  color?: string;
}

interface SkillsProps {
  skills: Skill[];
}

const techColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
  React: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300",
  Redux: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
  CSS: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300",
  SCSS: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 border-rose-300",
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="w-full px-4 bg-white dark:bg-gray-900 print:py-8" style={{ paddingBottom: '2.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Code2 className="w-6 h-6 text-primary" />
          <h2>Technical Skills</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`px-4 py-2 flex items-center gap-2 ${techColors[skill.name] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300"}`}
            >
              <TechIcon name={skill.name} />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
