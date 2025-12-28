import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent } from "@/components/ui/card";
import { useDoctorAvailability } from "@/hooks/use-doctor-availabilty";
import { Doctor } from "@/types";
import { Sun, Moon, CheckCircle, XCircle, Calendar, Phone, Star, Clock } from "lucide-react";

interface DoctorTimingsCardProps {
  doctor: Doctor;
}

export default function DoctorTimingsCard({ doctor }: DoctorTimingsCardProps) {
  const { t } = useTranslation();
  const availability = useDoctorAvailability(
    doctor.morningHours,
    doctor.eveningHours,
    doctor.days
  );

  return (
    <Card
      key={doctor.id}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-gray-100 bg-white"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="relative p-6 sm:p-8">
        {/* Doctor Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">
              {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </span>
          </div>
          <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            {doctor.name}
          </h4>
          <p className="text-lg text-emerald-600 font-semibold">
            {doctor.specialty}
          </p>
        </div>

        {/* Availability Status */}
        <div className="mb-8">
          <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold ${
            availability.isAvailable
              ? "bg-green-100 text-green-800 border border-green-200"
              : "bg-red-100 text-red-800 border border-red-200"
          }`}>
            {availability.isAvailable ? (
              <>
                <CheckCircle className="w-4 h-4 animate-pulse" />
                <span>{t("available-now")}</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4" />
                <span>{t("currently-unavailable")}</span>
              </>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center">
            {availability.nextAvailable}
          </p>
        </div>

        {/* Timings Section */}
        <div className="space-y-4 mb-8">
          {doctor.morningHours && (
            <div className="group bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Sun className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{t("morning")}</span>
                </div>
                <span className="font-bold text-orange-600 text-lg">{doctor.morningHours}</span>
              </div>
            </div>
          )}
          
          {doctor.eveningHours && (
            <div className="group bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-200/50 hover:shadow-md transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Moon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{t("evening")}</span>
                </div>
                <span className="font-bold text-indigo-600 text-lg">{doctor.eveningHours}</span>
              </div>
            </div>
          )}
        </div>

        {/* Available Days */}
        {doctor.days && doctor.days.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">{t("available-days")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {doctor.days.map((day) => (
                <span
                  key={day}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium border border-gray-200"
                >
                  {day.slice(0, 3).toUpperCase()}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Doctor Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold text-gray-900">4.8</span>
            </div>
            <span className="text-xs text-gray-600">Rating</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold text-gray-900">5+</span>
            </div>
            <span className="text-xs text-gray-600">Years</span>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-500 mb-1">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-bold text-gray-900">500+</span>
            </div>
            <span className="text-xs text-gray-600">Patients</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => window.open(`tel:${doctor.mobile}`, '_self')}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            {t("emergency-call")}
          </button>
          <button
            onClick={() => window.open(`https://wa.me/${doctor.mobile.replace(/\D/g, '')}`, '_blank')}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            {t("book-appointment-now")}
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
