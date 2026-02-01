import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
  headerTheme?: string;
};

export const Layout = ({ children, headerTheme }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar headerTheme={headerTheme} />

      {/* ⬇️ INI PALING PENTING */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
};
