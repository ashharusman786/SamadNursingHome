import { useTranslation } from '@/hooks/use-translation';
import { Heart, Award, Users, Shield } from 'lucide-react';

export default function MissionSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-8 border border-gray-200 shadow-sm">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                {t('mission-badge')}
              </span>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100 shadow-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent break-words tracking-tight">
                {t('mission-title')}
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
                {t('mission-text')}
              </p>
            </div>
          </div>
          
          {/* Values Grid - Modern Healthcare Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Heart className="text-white text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 text-center">
                {t('value-compassion')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base">
                {t('value-compassion-desc')}
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Award className="text-white text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 text-center">
                {t('value-excellence')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base">
                {t('value-excellence-desc')}
              </p>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 text-center">
                {t('value-community')}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed text-base">
                {t('value-community-desc')}
              </p>
            </div>
          </div>
          
          {/* Stats Section - Professional Healthcare Metrics */}
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 rounded-3xl p-12 sm:p-16 shadow-2xl border border-blue-200/20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center">
                    <Heart className="w-8 h-8 text-emerald-400" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">5000+</div>
                <div className="text-emerald-200 text-sm font-medium">{t('value-happy-patients')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-red-400" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">24/7</div>
                <div className="text-red-200 text-sm font-medium">{t('value-emergency-care')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">5+</div>
                <div className="text-blue-200 text-sm font-medium">{t('value-years-experience')}</div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-purple-200 text-sm font-medium">{t('value-patient-satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
