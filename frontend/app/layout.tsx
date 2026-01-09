import '../styles/menu.css';
import '../styles/hero.css';


export const metadata = {
  title: 'Mi web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ca">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}