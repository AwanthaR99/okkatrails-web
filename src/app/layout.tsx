import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export const metadata = {
  title: 'OKKATRAILS | Eco-Adventure & Gems',
  description: 'Uncover hidden gemstones and explore the raw wilderness of Monaragala.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-900">
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}