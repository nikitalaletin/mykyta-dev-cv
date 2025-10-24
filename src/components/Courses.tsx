import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap, Award } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span>{course.name}</span>
                </CardTitle>
                <CardDescription>{course.institution} • {course.year}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
