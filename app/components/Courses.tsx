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
    <div>
      <div className="flex items-center gap-3 my-6">
        <GraduationCap className="w-6 h-6 text-primary" />
        <h2 className="font-bold">Courses & Certifications</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {courses.map((course, index) => (
          <div key={index} className="flex items-center gap-3 py-2">
            <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="flex-grow">
              <span>{course.name}</span>
              <span className="text-muted-foreground"> | {course.institution}</span>
              <span className="text-muted-foreground"> | {course.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
