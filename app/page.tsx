'use client';

import { CheckCircle2 } from "lucide-react";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Languages } from "./components/Languages";
import { Education } from "./components/Education";
import { Courses } from "./components/Courses";
import { ThemeToggle } from "./components/ThemeToggle";
import { PrintButton } from "./components/PrintButton";

export default function HomePage() {
  const personalInfo = {
    name: "Mykyta Lalietin",
    photo: "/images/923eeb0f8d466567cf7a18a2df2bec14ff01c5cf.png",
    description: "Senior Frontend Developer | React, TypeScript, JavaScript | 9+ years experience in building scalable web apps.",
    contacts: {
      email: "nikitalaletin@gmail.com",
      phone: "+380939751300",
      telegram: "https://t.me/nik_orange",
      location: "Kyiv, Ukraine",
      linkedin: "https://www.linkedin.com/in/mykyta-lalietin/",
      github: "https://github.com/nikitalaletin",
    },
  };

  const skills = [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "HTML5" },
    { name: "CSS" },
    { name: "SCSS" },
    { name: "Git" },
    { name: "Webpack" },
    { name: "Docker" },
  ];

  const jobs = [
    {
      company: "Mobilunity",
      position: "Frontend Developer",
      period: "Feb 2024 – Present · 1 yr 9 mos",
      website: "https://mobilunity.com",
      project: "GBU Life",
      logo: "/images/mobilunity-logo.jpg",
      technologies: ["React", "Redux", "TypeScript", "JavaScript", "react-testing-library", "Git", "HTML5", "react-bootstrap", "SCSS", "TanStack React Query", "Material-UI"],
      tasks: [
        "Designed and developed a robust, responsive web interface for the administrative panel of a US-based insurance company",
        "Leveraged React-Bootstrap to create a visually appealing and fully responsive UI",
        "Built reusable, modular components to maintain design consistency and accelerate development across multiple features",
        "Proactively identified and resolved customer issues, providing efficient solutions to enhance platform reliability",
      ],
    },
    {
      company: "Mobilunity",
      position: "Frontend Developer",
      period: "Jul 2019 – Feb 2024 · 4 yrs 8 mos",
      website: "https://mobilunity.com",
      project: "Successeve",
      logo: "/images/mobilunity-logo.jpg",
      technologies: ["React", "Redux", "TypeScript", "JavaScript", "react-testing-library", "Immutable.js", "GitLab CI/CD", "Git", "Flux", "HTML5", "Webpack", "SCSS", "Docker"],
      tasks: [
        "Developed a SaaS platform for managing and enhancing customer success (CRM), delivering scalable and efficient solutions",
        "Replaced FLUX with a Redux store, refactoring the legacy codebase for improved maintainability and performance",
        "Implemented functional React components using Hooks, promoting modularity and code reusability",
        "Conducted unit and integration testing with react-testing-library to ensure code quality and reliability",
        "Configured and optimized Webpack, integrating plugins for faster builds and enhanced development efficiency",
        "Initiated and implemented GitLab CI/CD pipelines for automated builds and deployments",
      ],
    },
    {
      company: "MEGOGO",
      position: "Frontend Developer",
      period: "Jan 2019 – Jul 2019 · 7 mos",
      website: "https://megogo.net",
      project: "Web Department",
      logo: "/images/megogo-logo.jpg",
      technologies: ["React", "Redux", "TypeScript", "JavaScript", "Adaptive Streaming", "Git", "HTML5", "Webpack", "SCSS"],
      tasks: [
        "Designed and developed a SPA for creating mobile, web, and SmartTV landing pages",
        "Built responsive, cross-browser UIs with reusable components",
        "Architected and organized client-side business logic for video players, EPG, and advertisements, optimizing performance and reliability",
      ],
    },
    {
      company: "MEGOGO",
      position: "Frontend Developer",
      period: "Apr 2016 – Jan 2019 · 2 yrs 10 mos",
      website: "https://megogo.net",
      project: "SmartTV Department",
      logo: "/images/megogo-logo.jpg",
      technologies: ["JavaScript", "HTML5", "CSS", "SCSS", "Gulp", "Git", "Adaptive Streaming"],
      tasks: [
        "Supported and enhanced Smart TV OTT/VOD services for 26+ vendors (LG, Samsung, etc.), ensuring stable performance and seamless content delivery",
        "Developed Smart TV video players, UI markup, advertisements, and landing pages on the client side, optimizing user experience across devices",
        "Performed bug fixing, debugging, and refactoring",
      ],
    },
    {
      company: "Deceti Innovations Inc",
      position: "Frontend Developer",
      period: "Oct 2015 - Apr 2016 · 7 mos",
      website: "https://deceti.com",
      project: "E-commerce Store",
      technologies: ["JavaScript", "jQuery", "HTML5", "CSS"],
      tasks: [
        "Designed and developed front-end for online e-commerce store (sign industry in North America)",
        "Developed cross-browser and cross-platform UI for the online editor",
        "Designed components to handle vector image inside the editor",
      ],
    },
  ];

  const languages = [
    { name: "Ukrainian", level: "Native", flag: "🇺🇦" },
    { name: "English", level: "Upper Intermediate", flag: "🇬🇧" },
  ];

  const education = [
    {
      degree: "Master's degree",
      institution: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
      field: "Telecommunication systems and networks",
      period: "2008 - 2014",
      logo: "/images/kpi-logo.png",
    },
  ];

  const courses = [
    {
      name: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
      institution: "Udemy",
      year: "2025",
    },
    {
      name: "Advanced and Object Oriented JavaScript and ES6",
      institution: "Udemy",
      year: "2024",
    },
    {
      name: "Design Patterns & Antipatterns & Solid in JavaScript 2024",
      institution: "Udemy",
      year: "2024",
    },
    {
      name: "Next.js: Advanced Level",
      institution: "Lectrum",
      year: "2023",
    },
    {
      name: "JS + React",
      institution: "fwdays'22",
      year: "2022",
    },
    {
      name: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
      institution: "Udemy",
      year: "2020",
    },
    {
      name: "MEGOGO Media Hackathon",
      institution: "MEGOGO",
      year: "2018",
    },
  ];

  return (
    <>
      <ThemeToggle />
      <PrintButton />

      <div className="min-h-screen bg-background animate-fade-in">
        <Header
          photo={personalInfo.photo}
          name={personalInfo.name}
          description={personalInfo.description}
          contacts={personalInfo.contacts}
        />

        <section className="w-full py-6 px-4 bg-white dark:bg-gray-900 print:py-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="mb-4 font-bold">About Me</h2>
            <div className="text-foreground/80">
              <p className="mb-4">
                I&apos;m a Frontend Developer with 9+ years of experience specializing in React, TypeScript, and modern JavaScript.
                My focus is on building scalable, high-performance applications with clean architecture and pixel-perfect UI.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Experienced in React Hooks, Redux, React Query, and state management patterns</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Skilled in CI/CD setup, automated testing, and reusable component libraries</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Strong background in SaaS, insurance platforms, and OTT/streaming services</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Passionate about improving development efficiency and user experience</span>
                </li>
              </ul>

              <p>
                Always open to learning and sharing knowledge, while delivering solutions that bring real value to users and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Two column layout */}
        <div className="w-full px-4 py-12 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 print:py-8 print:bg-white">
          <div className="max-w-5xl mx-auto">
            <div
              id="two-column-layout"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
              }}
              className="print:flex-col"
            >
              {/* Left column - wider (2/3) */}
              <div
                style={{
                  flex: '1 1 0%',
                  minWidth: 0
                }}
                className="space-y-12"
              >
                <Experience jobs={jobs} />
                <Courses courses={courses} />
              </div>

              {/* Right column - narrower (1/3) */}
              <div
                style={{
                  flex: '0 0 auto',
                  minWidth: 0
                }}
                className="space-y-12"
              >
                <Skills skills={skills} />
                <Education education={education} />
                <Languages languages={languages} />
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (min-width: 1024px) {
            #two-column-layout {
              flex-direction: row !important;
            }
            #two-column-layout > div:first-child {
              flex: 2 !important;
            }
            #two-column-layout > div:last-child {
              flex: 1 !important;
            }
          }
        `}</style>

        <footer className="w-full py-8 px-4 bg-gray-900 text-white text-center print:hidden">
          <p className="text-muted-foreground">
            © 2025 {personalInfo.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

