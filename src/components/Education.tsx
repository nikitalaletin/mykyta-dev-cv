import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
    degree: string;
    institution: string;
    field: string;
    period: string;
    logo?: string;
}

interface EducationProps {
    education: Education[];
}

export function Education({ education }: EducationProps) {
    return (
        <section className="w-full px-4 bg-gray-50 dark:bg-gray-800 print:bg-white print:py-8" style={{ paddingBottom: '2.5rem' }}>
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <h2>Education</h2>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {education.map((edu, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4 flex-grow">
                                        {edu.logo && (
                                            <img
                                                src={edu.logo}
                                                alt={edu.institution}
                                                className="w-10 h-10 object-contain flex-shrink-0"
                                            />
                                        )}
                                        <div className="flex-grow">
                                            <CardTitle className="mb-2">{edu.degree}</CardTitle>
                                            <CardDescription className="text-base">
                                                {edu.institution}
                                            </CardDescription>
                                            <CardDescription className="mt-1">
                                                {edu.field}
                                            </CardDescription>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                            {edu.period}
                                        </span>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

