import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mykyta Lalietin | Senior Frontend Developer',
  description: 'Senior Frontend Developer with 9+ years of experience in React, TypeScript and modern JavaScript. Building scalable web applications.',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'JavaScript', 'Web Development', 'Mykyta Lalietin'],
  authors: [{ name: 'Mykyta Lalietin' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Mykyta Lalietin | Senior Frontend Developer',
    description: 'Senior Frontend Developer with 9+ years of experience in React, TypeScript and modern JavaScript.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

