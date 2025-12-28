import { useTranslation } from '@/hooks/use-translation';
import { Button } from '@/components/ui/button';
import { UserRound, MapPin, Calendar, Phone, Heart, Award, Shield } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-emerald-100/20" />
      
      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/98 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl border border-white/30 max-w-6xl mx-auto">
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-medium">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{t('trusted-healthcare')}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Certified Doctors</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-50 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 border border-purple-200 text-purple-700 text-xs sm:text-sm font-medium">
              <Award className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Award Winning</span>
            </div>
          </div>

          {/* Hero Title with better hierarchy */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-blue-900 via-emerald-800 to-blue-900 bg-clip-text text-transparent break-words tracking-tight">
            {t('hero-title')}
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium px-2">
            {t('hero-subtitle')}
          </p>

          {/* Primary CTAs with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              aria-label={t('book-appointment-aria')}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('book-appointment-now')}
            </Button>

            <Button
              onClick={() => window.open('tel:+917860120688', '_self')}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              aria-label={t('emergency-call-aria')}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              {t('emergency-call-hero')}
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16">
            <Button
              onClick={() => scrollToSection('doctors')}
              variant="outline"
              className="inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-base sm:text-lg border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white hover:border-blue-600 transition-all duration-300 rounded-xl"
              aria-label={t('view-doctors-aria')}
            >
              <UserRound className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('view-our-doctors')}
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto text-base sm:text-lg border-2 border-teal-500 text-teal-600 hover:bg-teal-500 hover:text-white hover:border-teal-600 transition-all duration-300 rounded-xl"
              aria-label={t('get-directions-aria')}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              {t('get-directions')}
            </Button>
          </div>

          {/* Enhanced Stats with better visual design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-gray-200/60">
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">5000+</div>
              <div className="text-sm font-medium text-gray-600">{t('happy-patients')}</div>
            </div>
            
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm font-medium text-gray-600">{t('emergency-care')}</div>
            </div>
            
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">5+</div>
              <div className="text-sm font-medium text-gray-600">{t('years-experience')}</div>
            </div>
            
            <div className="text-center group">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-1">98%</div>
              <div className="text-sm font-medium text-gray-600">{t('patient-satisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
