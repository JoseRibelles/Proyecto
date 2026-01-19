import '../styles/globals.css';
import '../styles/menu.css';
import '../styles/hero.css';
import '../styles/highlighted-cards.css';
import '../styles/call-to-action.css';
import '../styles/map-location.css';
import '../styles/footer.css';
import '../styles/legal-pages.css';
import '../styles/content-pages.css';  // ← DEBE ESTAR AQUÍ

export const metadata = {
  title: 'Col·legi Lluís Millet',
};

export default function RootLayout({ children }: { children: React. ReactNode }) {
  return (
    <html lang="ca">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}