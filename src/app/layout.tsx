
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NusaGraph - Indonesian Cultural Knowledge Graph',
  description: 'Explore the rich heritage of Nusantara through an advanced interactive knowledge graph.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased batik-overlay min-h-screen overflow-hidden">
        {children}
      </body>
    </html>
  );
}
