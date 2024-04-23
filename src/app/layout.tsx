import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'MainStack Dashboard',
  description: 'For creators and enterpreneurs to showcase products and recieve payments',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
