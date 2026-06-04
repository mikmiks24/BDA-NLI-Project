// src/app/layout.jsx
import '../styles.css';

export const metadata = {
  title: 'Smart Kiosk',
  description: 'Portrait oriented kiosk built with React and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100%' }}>
      <body style={{ margin: 0, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'hsl(var(--bg-base))' }}>
        {children}
      </body>
    </html>
  );
}
