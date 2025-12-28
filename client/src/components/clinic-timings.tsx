import { useTranslation } from '@/hooks/use-translation';
import { Phone, Clock, Calendar, CheckCircle, XCircle, Activity, Users } from "lucide-react";
import { useHospitalStatus } from "@/hooks/use-hospital-status";
import doctorsData from "@/data/doctors.json";
import { Doctor } from "@/types";
import DoctorTimingsCard from "./DoctorTimingsCard";

export default function ClinicTimings() {
  const { t } = useTranslation();
  const isHospitalOpen = useHospitalStatus();

  return (
    <section id="timings" className="relative py-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-emerald-50/30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 mb-8 border border-gray-200 shadow-sm">
            <Clock className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">{t("24/7-available")}</span>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto border border-gray-100 shadow-xl">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
              {t("timings-title")}
            </h2>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              {t("timings-subtitle")}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-16">
          {/* Main Hospital Hours Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl blur-xl opacity-15"></div>
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white rounded-3xl p-10 sm:p-12 lg:p-16 shadow-2xl border border-blue-200/20">
              {/* Hospital Status Badge */}
              <div className="flex justify-center mb-10">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold backdrop-blur-sm ${
                  isHospitalOpen
                    ? "bg-green-500/20 text-green-300 border border-green-400/30"
                    : "bg-red-500/20 text-red-300 border border-red-400/30"
                }`}>
                  {isHospitalOpen ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-pulse" />
                      <span>{t("open-now")}</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>{t("closed-now")}</span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
                  {t("hospital-hours")}
                </h3>
                <p className="text-blue-200 text-lg">{t("general-timings")}</p>
              </div>

              {/* Enhanced Timing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-blue-100">{t("weekdays")}</p>
                      <p className="text-sm text-blue-300">{t("monday-to-saturday")}</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-white mb-4">8:00 AM - 10:00 PM</p>
                  <div className="flex items-center gap-2 text-green-400">
                    <Activity className="w-5 h-5" />
                    <span className="text-sm font-medium">{t("full-day-service")}</span>
                  </div>
                </div>

                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-emerald-100">{t("sunday")}</p>
                      <p className="text-sm text-emerald-300">{t("limited-hours")}</p>
                    </div>
                  </div>
                  <p className="text-4xl font-bold text-white mb-4">9:00 AM - 2:00 PM</p>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm font-medium">{t("morning-only")}</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="text-center">
                <div className="inline-flex items-center gap-4 bg-red-500/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-red-400/30">
                  <Phone className="w-6 h-6 text-red-400 animate-pulse" />
                  <div className="text-left">
                    <p className="text-red-300 text-sm font-medium">{t("emergency-always-available")}</p>
                    <p className="text-white font-bold text-xl">+91 7860120688</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Timings Section */}
          <div className="space-y-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-200">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-blue-700 font-semibold">Expert Doctors</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                {t("doctor-timings")}
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t("individual-doctor-schedule")}</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Array.isArray(doctorsData) && doctorsData.slice(0, 2).map((doctor) => (
                <DoctorTimingsCard key={doctor.id} doctor={doctor as unknown as Doctor} />
              ))}
            </div>

            {/* Enhanced View All Doctors Button */}
            <div className="text-center pt-8">
              <button
                onClick={() => document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-lg"
              >
                <Users className="w-5 h-5" />
                {t("view-all-doctors")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
