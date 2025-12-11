import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X, Sun, Moon } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";
import "./ui/standard-theme.css";

export default function Navigation() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("nav-home") },
    { id: "doctors", label: t("nav-doctors") },
    { id: "timings", label: t("nav-timings") },
    { id: "gallery", label: t("nav-gallery") },
    { id: "contact", label: t("nav-contact") },
  ];

  return (
    <nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo and tagline */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
            <Hospital className="text-primary-foreground text-lg sm:text-xl" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-foreground truncate">
              {t("hospital-name")}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block truncate">
              {t("tagline")}
            </p>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-foreground/80 hover:text-primary font-medium text-sm lg:text-base transition-colors duration-200 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors duration-200 text-foreground/70 hover:text-foreground"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/5 transition-colors duration-200 text-foreground/70 hover:text-foreground md:hidden"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-10 h-10 rounded-lg hover:bg-foreground/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg md:hidden z-50">
          <div className="py-2 px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full py-3 px-4 text-left text-foreground/90 hover:text-primary hover:bg-foreground/5 rounded-lg transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
