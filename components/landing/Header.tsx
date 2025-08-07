"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">H360</span>
            </div>
            <span className="font-bold text-xl text-foreground">Hisaab360</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-foreground transition-smooth">Features</a>
            <a href="#industries" className="hover:text-foreground transition-smooth">Industries</a>
            <a href="#pricing" className="hover:text-foreground transition-smooth">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="rounded-full">Sign In</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 transition-smooth rounded-full">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="#features" className="hover:text-foreground transition-smooth py-2">Features</a>
              <a href="#industries" className="hover:text-foreground transition-smooth py-2">Industries</a>
              <a href="#pricing" className="hover:text-foreground transition-smooth py-2">Pricing</a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="rounded-full">Sign In</Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90 transition-smooth rounded-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}