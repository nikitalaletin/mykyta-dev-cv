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
        <div>
            <div className="flex items-center gap-3 my-6">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h2 className="font-bold">Education</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {education.map((edu, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-6">
                            {/* First row: logo + degree + period */}
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    {edu.logo && (
                                        <img
                                            src={edu.logo}
                                            alt={edu.institution}
                                            className="w-10 h-10 object-contain flex-shrink-0"
                                        />
                                    )}
                                    <CardTitle className="mb-0">{edu.degree}</CardTitle>
                                </div>
                                <div style={{ flexShrink: 0 }}>
                                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>

                            {/* Second row: institution and field - full width */}
                            <div>
                                <CardDescription className="text-base">
                                    {edu.institution}
                                </CardDescription>
                                <CardDescription className="mt-1">
                                    {edu.field}
                                </CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}

