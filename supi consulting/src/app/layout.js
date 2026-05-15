import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Supi Consulting | Build Your Economy',
  description: "Supi Consulting equips you with the tools, knowledge, and connections to succeed in the African investment landscape.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
