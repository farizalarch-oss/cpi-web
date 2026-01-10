import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppWidget } from "./WhatsAppWidget";

interface LayoutProps {
  children: React.ReactNode;
  headerTheme?: string;
}

export const Layout = ({ children, headerTheme }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar headerTheme={headerTheme} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};
