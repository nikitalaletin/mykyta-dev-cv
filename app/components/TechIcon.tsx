import {
  SiJavascript, SiTypescript, SiReact, SiRedux, SiCss3, SiSass,
  SiHtml5, SiWebpack, SiGit, SiDocker, SiGraphql, SiMui,
  SiGitlab, SiJquery, SiGulp, SiBootstrap,
  SiTestinglibrary
} from 'react-icons/si';
import { IconType } from 'react-icons';
import { Code } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const iconMap: { [key: string]: IconType } = {
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'React': SiReact,
    'Redux': SiRedux,
    'CSS': SiCss3,
    'SCSS': SiSass,
    'HTML5': SiHtml5,
    'Webpack': SiWebpack,
    'Git': SiGit,
    'Docker': SiDocker,
    'GraphQL': SiGraphql,
    'Material-UI': SiMui,
    'GitLab CI/CD': SiGitlab,
    'jQuery': SiJquery,
    'Gulp': SiGulp,
    'react-bootstrap': SiBootstrap,
    'react-testing-library': SiTestinglibrary,
  };

  const Icon = iconMap[name];

  if (Icon) {
    return <Icon className={className} />;
  }

  // Fallback icon для невідомих технологій
  return <Code className={className} />;
}
