import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Βολιωτικο Τσιπουράδικο | Νέα Χώρα Χανίων',
  description:
    'Το Βολιωτικο Τσιπουράδικο στη Νέα Χώρα Χανίων: παραθαλάσσια ταβέρνα με μεζέδες, φρέσκο ψάρι και κρητική φιλοξενία.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body>{children}</body>
    </html>
  );
}
