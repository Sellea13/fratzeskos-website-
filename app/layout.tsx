import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Νέα Χώρα | Τσιπουράδικο & Ταβέρνα στα Χανιά',
  description:
    'Παραθαλάσσιο τσιπουράδικο και ταβέρνα στη Νέα Χώρα Χανίων με μεζέδες, φρέσκο ψάρι και κρητική φιλοξενία.',
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
