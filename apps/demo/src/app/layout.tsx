import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'React Season Effects - Demo',
  description: 'Beautiful seasonal visual effects for React and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
