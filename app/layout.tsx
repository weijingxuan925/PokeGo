import { Metadata } from 'next';
import { dmSans } from './fonts';
import './globals.css';
import { BackToTop, Footer, Navbar, TopBar } from '@/components/components';

export const metadata: Metadata = {
  title: 'Poke go & broth house',
  description: 'Discover the best dishes in the world',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
      <TopBar />
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      </body>
      </html>
  );
}

