// app/layout.tsx - NLI Kiosk root layout
import type { Metadata } from 'next';
import '../src/styles.css';

export const metadata: Metadata = {
  title: 'Smart Kiosk',
  description: 'Portrait oriented kiosk built with React and Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'hsl(var(--bg-base))' }}>
        {children}
      </body>
    </html>
  );
}
