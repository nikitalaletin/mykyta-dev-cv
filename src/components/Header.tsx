import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeaderProps {
  photo: string;
  name: string;
  description: string;
  contacts: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
}

export function Header({ photo, name, description, contacts }: HeaderProps) {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-12 px-4 print:bg-white print:py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <ImageWithFallback
              src={photo}
              alt={name}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg print:border-2"
            />
          </div>

          <div className="flex-grow text-center md:text-left">
            <h1 className="mb-3 text-4xl font-medium">{name}</h1>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start items-center sm:items-start">
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>{contacts.location}</span>
              </div>

              <a
                href={`mailto:${contacts.email}`}
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors print:text-foreground"
              >
                <Mail className="w-4 h-4" />
                <span>{contacts.email}</span>
              </a>

              <a
                href={`tel:${contacts.phone}`}
                className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors print:text-foreground"
              >
                <Phone className="w-4 h-4" />
                <span>{contacts.phone}</span>
              </a>

              <a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-blue-600 transition-colors print:text-foreground"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/80 hover:text-blue-600 transition-colors print:text-foreground"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
