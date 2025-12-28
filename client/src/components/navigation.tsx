import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Hospital, Menu, X } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

export default function Navigation() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
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

  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavClick(sectionId);
    }
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
      className={`sticky top-12 sm:top-14 z-40 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
        {/* Enhanced Logo and brand */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Hospital className="text-white text-lg sm:text-xl" />
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 truncate">
              {t("hospital-name")}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block truncate">
              {t("tagline")}
            </p>
          </div>
        </div>
        
        {/* Enhanced Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              className="text-gray-700 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors duration-200 relative group bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg px-2 lg:px-3 py-2"
              aria-label={`Navigate to ${item.label}`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          
          </div>
        
        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden w-10 h-10 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-lg lg:hidden z-50">
          <div className="py-2 px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                className="block w-full py-3 px-4 text-left text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 font-medium bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                aria-label={`Navigate to ${item.label}`}
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
