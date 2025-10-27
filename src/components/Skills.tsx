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
  JavaScript: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-amber-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
  React: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300",
  Redux: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
  CSS: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300",
  SCSS: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 border-rose-300",
  GraphQL: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 border-fuchsia-300",
  "Styled Components": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300",
  HTML5: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300",
  Webpack: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 border-sky-300",
  Git: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300",
  REST: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300",
  "react-testing-library": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300",
  "TanStack React Query": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 border-sky-300",
  "Material-UI": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
  "Immutable.js": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 border-fuchsia-300",
  Docker: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300",
  Flux: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300",
  "Adaptive Streaming": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300",
  "GitLab CI/CD": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300",
  "react-bootstrap": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
  Gulp: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300",
};

export function Skills({ skills }: SkillsProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <Code2 className="w-6 h-6 text-primary" />
        <h2 className="font-bold">Technical Skills</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className={`px-3 py-1 flex items-center gap-2 ${techColors[skill.name] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300"}`}
          >
            <TechIcon name={skill.name} />
            {skill.name}
          </Badge>
        ))}
      </div>
    </div>
  );
}
