import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Tiger Electrical Services | YOUR ELECTRICIAN — Tulsa, OK',
  description:
    'Locally owned and operated electrical contracting firm based in Broken Arrow, Oklahoma. Licensed, bonded, and insured. Serving Tulsa and Green Country.',
  keywords:
    'electrician Tulsa, electrical contractor Broken Arrow, commercial electrical Oklahoma, residential electrician Green Country',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-bg text-text-main">
        {children}
      </body>
    </html>
  );
}
