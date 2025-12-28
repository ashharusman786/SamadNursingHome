import { Hospital, Syringe, HeartPulse, Ambulance } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { useMemo } from "react";

export default function ServiceCardsGrid() {
  const { t } = useTranslation();

  const services = useMemo(() => [
    {
      icon: <Ambulance className="w-8 h-8 text-red-600" />,
      title: t("Emergency-Service-title"),
      desc: t("Emergency-Service-description"),
      color: "red"
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-emerald-600" />,
      title: t("Cardiac Cares-service-title"),
      desc: t("Cardiac Cares-service-description"),
      color: "emerald"
    },
    {
      icon: <Syringe className="w-8 h-8 text-blue-600" />,
      title: t("Vaccination-service-title"),
      desc: t("Vaccination-service-description"),
      color: "blue"
    },
    {
      icon: <Hospital className="w-8 h-8 text-purple-600" />,
      title: t("Inpatient Wards-service-title"),
      desc: t("Inpatient Wards-service-description"),
      color: "purple"
    }
  ], [t]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: "bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:border-red-300 hover:shadow-red-200",
      emerald: "bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 hover:border-emerald-300 hover:shadow-emerald-200",
      blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:border-blue-300 hover:shadow-blue-200",
      purple: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:border-purple-300 hover:shadow-purple-200"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-emerald-50/20" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100 shadow-xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent break-words tracking-tight">
              {t("Our Services-title")}
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Comprehensive healthcare services designed with your well-being in mind
            </p>
          </div>
        </div>

        {/* Modern Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(service.color)} cursor-pointer`}
              tabIndex={0}
              aria-label={service.title}
            >
              {/* Icon Container */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  {service.icon}
                </div>
              </div>
              
              {/* Service Content */}
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}