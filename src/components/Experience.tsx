import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase } from "lucide-react";
import { TechIcon } from "./TechIcon";

interface Job {
  company: string;
  position: string;
  period: string;
  website: string;
  project?: string;
  tasks: string[];
  technologies: string[];
  logo?: string;
}

interface ExperienceProps {
  jobs: Job[];
}

const techColors: { [key: string]: string } = {
  JavaScript: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-300",
  TypeScript: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300",
  React: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 border-cyan-300",
  Redux: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300",
  CSS: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 border-pink-300",
  SCSS: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 border-rose-300",
  GraphQL: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200 border-fuchsia-300",
  "Styled Components": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 border-amber-300",
  HTML5: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 border-orange-300",
  Webpack: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200 border-sky-300",
  Git: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 border-red-300",
  REST: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300",
};

export function Experience({ jobs }: ExperienceProps) {
  return (
    <section className="w-full py-12 px-4 bg-gray-50 dark:bg-gray-800 print:bg-white print:py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-primary" />
          <h2>Work Experience</h2>
        </div>

        <div className="space-y-6">
          {jobs.map((job, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow print:shadow-none print:border">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 print:bg-white" style={{ paddingBottom: '1rem' }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-3 flex-grow">
                    {job.logo && (
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-10 h-10 object-contain flex-shrink-0 rounded-lg"
                      />
                    )}
                    <div className="flex-grow">
                      <CardTitle className="flex items-center gap-2 flex-wrap">
                        <span>{job.position}</span>
                        <a
                          href={job.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors print:text-blue-600"
                        >
                          {job.company}
                        </a>
                      </CardTitle>
                      {job.project && (
                        <p className="mt-1 text-muted-foreground">Project: "{job.project}"</p>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                      {job.period}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="mb-4">
                  <h4 className="mb-3 text-sm text-muted-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className={`px-3 py-1 flex items-center gap-2 ${techColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-300"}`}
                      >
                        <TechIcon name={tech} />
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {job.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex gap-2 items-start">
                      <span className="text-blue-600 dark:text-blue-400 flex-shrink-0">•</span>
                      <span className="text-foreground/80">{task}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
