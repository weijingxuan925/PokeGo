import { Metadata } from 'next';
import { dmSans } from './fonts';
import './globals.css';
import { BackToTop, Footer, Navbar, TopBar } from '@/components/components';

export const metadata: Metadata = {
    title: 'Poke go & broth house',
    description: 'Discover the best dishes in the world',
}

export default function RootLayout({children} : {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body id='top' className={`${dmSans.className} nav-active`}>
        <TopBar/>
        <Navbar/>
        {children}
        <Footer/>
        <BackToTop/>
        </body>
        </html>
    )
}


