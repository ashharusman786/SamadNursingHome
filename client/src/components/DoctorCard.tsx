import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Calendar, CheckCircle, XCircle, UserRound, Star, Award, IndianRupee } from "lucide-react";
import { useDoctorAvailability } from "@/hooks/use-doctor-availabilty";
import { Doctor } from "@/types";
import DoctorModal from "./DoctorModal";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const availability = useDoctorAvailability(
    doctor.morningHours,
    doctor.eveningHours,
    doctor.days
  );

  return (
    <Card
      key={doctor.id}
      className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 overflow-hidden"
    >
      {/* Doctor Image Section */}
      <div className="relative">
        <div className="aspect-square bg-gray-50 relative overflow-hidden">
          <img  
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.specialty}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          
          {/* Fallback placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 hidden">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-white rounded-full flex items-center justify-center shadow-sm">
                <UserRound className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500">Doctor Photo</p>
            </div>
          </div>
          
          {/* Availability Badge */}
          <div className="absolute top-4 right-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm ${
              availability.isAvailable 
                ? 'bg-emerald-500 text-white' 
                : 'bg-gray-500 text-white'
            }`}>
              {availability.isAvailable ? (
                <CheckCircle className="w-3 h-3" />
              ) : (
                <XCircle className="w-3 h-3" />
              )}
              <span>{availability.isAvailable ? 'Available' : 'Closed'}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Doctor Information */}
      <CardContent className="p-6">
        {/* Name and Specialty */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-1 leading-tight">
            {doctor.name}
          </h3>
          <p className="text-gray-600 text-sm font-medium">
            {doctor.specialty}
          </p>
        </div>

        {/* Key Information Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {doctor.ratings && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-50 rounded-md border border-gray-200">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-medium text-gray-700">{doctor.ratings}</span>
            </div>
          )}
          {doctor.consultationFee && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-50 rounded-md border border-gray-200">
              <IndianRupee className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">{doctor.consultationFee}</span>
            </div>
          )}
          {doctor.experienceYears && (
            <div className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-50 rounded-md border border-gray-200">
              <Award className="w-3.5 h-3.5 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">{doctor.experienceYears} yrs</span>
            </div>
          )}
        </div>
        
        {/* Availability Status */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700 font-medium">{availability.statusText}</span>
          </div>
          <p className="text-xs text-gray-600 mt-1">{availability.nextAvailable}</p>
        </div>
        
        {/* Working Hours */}
        <div className="mb-4 text-xs text-gray-600">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Days:</span>
            <span>{doctor.days.join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Hours:</span>
            <span>{doctor.morningHours} - {doctor.eveningHours}</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="space-y-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            View Profile
          </Button>
          
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${doctor.mobile}`}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">Call</span>
            </a>
            
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${doctor.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            >
              <Mail className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-medium text-gray-700">Email</span>
            </a>
          </div>
        </div>
      </CardContent>
      
      <DoctorModal
        doctor={doctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Card>
  );
}
