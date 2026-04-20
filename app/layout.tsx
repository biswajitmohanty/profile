import type { Metadata } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import ThemeProvider from '@/components/ui/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Biswajit Mohanty | Technical Lead & Full-Stack Architect',
  description:
    'Technical Lead and Full-Stack Architect with 10+ years of experience building scalable enterprise solutions. Expert in Java, Spring Boot, React, AWS, and microservices architecture.',
  keywords: [
    'Biswajit Mohanty',
    'Technical Lead',
    'Full-Stack Architect',
    'Java Developer',
    'Spring Boot',
    'React',
    'AWS',
    'Microservices',
    'Software Engineer',
    'India',
  ],
  authors: [{ name: 'Biswajit Mohanty' }],
  creator: 'Biswajit Mohanty',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://biswajitmohanty.dev',
    title: 'Biswajit Mohanty | Technical Lead & Full-Stack Architect',
    description:
      'Technical Lead and Full-Stack Architect with 10+ years of experience building scalable enterprise solutions.',
    siteName: 'Biswajit Mohanty Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biswajit Mohanty | Technical Lead & Full-Stack Architect',
    description:
      'Technical Lead and Full-Stack Architect with 10+ years of experience building scalable enterprise solutions.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Biswajit Mohanty',
  jobTitle: 'Technical Lead / Full-Stack Architect',
  email: 'biswajit.fullstackdev@gmail.com',
  url: 'https://biswajitmohanty.dev',
  sameAs: ['https://linkedin.com/in/biswajit01'],
  knowsAbout: [
    'Java',
    'Spring Boot',
    'React',
    'AWS',
    'Microservices',
    'Cloud Architecture',
    'Full-Stack Development',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'HCL Technologies',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <head>
        {/* Prevent flash of unstyled content — set theme class before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('portfolio-theme')||'dark';document.documentElement.classList.add(t);})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      {process.env.NEXT_PUBLIC_GA_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      )}
    </html>
  );
}
