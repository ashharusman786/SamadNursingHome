import { Button } from "@/components/ui/button";
import { X, Phone, MessageCircle, Calendar, Clock, Award, Languages } from "lucide-react";
import { Doctor } from "@/types";

interface DoctorModalProps {
  doctor: Doctor;
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorModal({ doctor, isOpen, onClose }: DoctorModalProps) {
  if (!isOpen) return null;

  const handleBookAppointment = () => {
    const message = `Hello Samad Nursing Home, I would like to book an appointment with Dr. ${doctor.name} (${doctor.specialty}).`;
    const whatsappUrl = `https://wa.me/917860120688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 sm:p-8 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl object-cover shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
              <p className="text-lg text-blue-600 font-medium mb-4">{doctor.specialty}</p>
              
              <div className="flex flex-wrap gap-3 mb-4">
                {doctor.isAvailable && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    Available Today
                  </span>
                )}
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {doctor.experienceYears} Years Experience
                </span>
              </div>
              
              <div className="flex gap-3">
                <Button
                  onClick={handleBookAppointment}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open(`tel:${doctor.mobile.replace(/\s/g, '')}`, "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600" />
              About
            </h3>
            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-600">{doctor.education}</p>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Languages className="w-5 h-5 text-blue-600" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {doctor.languages?.map((lang: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {doctor.services?.map((service: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              OPD Timings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Morning</p>
                <p className="text-gray-600">{doctor.morningHours}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold text-gray-900 mb-1">Evening</p>
                <p className="text-gray-600">{doctor.eveningHours}</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="font-semibold text-gray-900 mb-2">Available Days</p>
              <div className="flex flex-wrap gap-2">
                {doctor.days.map((day, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => window.open(`mailto:${doctor.email}`, "_self")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {doctor.email}
              </Button>
              <Button
                variant="outline"
                className="justify-start"
                onClick={() => window.open(`tel:${doctor.mobile.replace(/\s/g, '')}`, "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                {doctor.mobile}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
