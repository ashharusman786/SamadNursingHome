import LanguageToggle from './language-toggle';
import { MapPin, Activity, Phone } from 'lucide-react';
import { useTranslation } from "@/hooks/use-translation";

export default function UtilityBar() {
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Left Section - Language & Status */}
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-full border border-emerald-200">
              <Activity className="w-3 h-3 text-emerald-600" />
              <span className="text-xs font-medium text-emerald-700">{t('24/7-available')}</span>
            </div>
          </div>

          {/* Center Section - Location */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
            <MapPin className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-medium text-blue-700">Bilariaganj, Azamgarh</span>
          </div>

          {/* Right Section - Emergency Contact */}
          <div className="flex items-center gap-2">
            <a 
              href="tel:+917860120688" 
              className="inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs sm:text-sm font-semibold rounded-full shadow hover:from-red-600 hover:to-red-700 hover:shadow-md transition-all duration-300 hover:scale-105 active:scale-95" 
              aria-label="Emergency contact: +91 7860120688"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              <span className="hidden sm:inline">{t('emergency-call')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}