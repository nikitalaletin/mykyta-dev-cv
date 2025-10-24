import { GraduationCap, CheckCircle2 } from "lucide-react";

interface Course {
  name: string;
  institution: string;
  year: string;
}

interface CoursesProps {
  courses: Course[];
}

export function Courses({ courses }: CoursesProps) {
  return (
    <section className="w-full px-4 bg-white dark:bg-gray-900 print:py-8" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h2>Courses & Certifications</h2>
        </div>

        <div className="space-y-3">
          {courses.map((course, index) => (
            <div key={index} className="flex items-start gap-3 py-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="flex-grow">
                <span className="font-medium">{course.name}</span>
                <span className="text-muted-foreground"> | {course.institution}</span>
                <span className="text-muted-foreground"> | {course.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
