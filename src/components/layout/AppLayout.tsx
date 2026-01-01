import { ReactNode } from 'react';
import { DesktopSidebar } from './DesktopSidebar';
import { MobileNav } from './MobileNav';
import { useApp } from '@/contexts/AppContext';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { portfolioMode } = useApp();

  return (
    <div className="flex min-h-screen w-full bg-background">
      <DesktopSidebar />
      <main className="page-container">
        {children}
      </main>
      <MobileNav />
      
      {portfolioMode && (
        <div className="portfolio-watermark">
          Portfolio Prototype
        </div>
      )}
    </div>
  );
}
