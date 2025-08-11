import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className = '' }: PageLayoutProps) {
  return (
    <div className={`font-sans min-h-screen bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 flex flex-col ${className}`}>
      {/* Main content that grows to fill available space */}
      <div className="flex-1">
        {children}
      </div>
      
      {/* Footer that sticks to bottom */}
      <footer className="bg-green-800 text-white py-6 md:py-8 mt-12 md:mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">Gente Seria y Honesta Cup</p>
          <p className="text-sm md:text-base">&copy; GMC All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}