import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Phone, CheckCircle } from "lucide-react";

interface Appointment {
  id: string;
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  doctor: string;
  symptoms: string;
  status: 'pending' | 'confirmed' | 'completed';
  createdAt: string;
}

interface AppointmentRequest {
  name: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  doctor: string;
  symptoms: string;
}

export default function EnhancedAppointmentSystem() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [formData, setFormData] = useState<AppointmentRequest>({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    doctor: "",
    symptoms: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const storedAppointments = localStorage.getItem('samad-appointments');
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  const saveAppointments = (updatedAppointments: Appointment[]) => {
    localStorage.setItem('samad-appointments', JSON.stringify(updatedAppointments));
    setAppointments(updatedAppointments);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    const updatedAppointments = [...appointments, newAppointment];
    saveAppointments(updatedAppointments);

    // Send WhatsApp message
    const message = `Hello Samad Nursing Home, I would like to book an appointment:\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.preferredDate}\nPreferred Time: ${formData.preferredTime}\nDoctor: ${formData.doctor}\nSymptoms/Reason: ${formData.symptoms}`;
    const whatsappUrl = `https://wa.me/917860120688?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset form
    setFormData({
      name: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      doctor: "",
      symptoms: "",
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const updateAppointmentStatus = (id: string, status: Appointment['status']) => {
    const updatedAppointments = appointments.map(apt => 
      apt.id === id ? { ...apt, status } : apt
    );
    saveAppointments(updatedAppointments);
  };

  const deleteAppointment = (id: string) => {
    const updatedAppointments = appointments.filter(apt => apt.id !== id);
    saveAppointments(updatedAppointments);
  };

  return (
    <div className="space-y-8">
      {/* Success Message */}
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-800">Appointment request sent successfully! We'll contact you soon.</span>
        </div>
      )}

      {/* Appointment Form */}
      <Card className="bg-white rounded-3xl shadow-xl border border-gray-100">
        <CardContent className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-blue-600" />
            Book Appointment
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                  aria-label="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your phone number"
                  aria-label="Your phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Preferred appointment date"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-label="Preferred appointment time"
                >
                  <option value="">Select time</option>
                  <option value="Morning (9AM - 12PM)">Morning (9AM - 12PM)</option>
                  <option value="Afternoon (12PM - 3PM)">Afternoon (12PM - 3PM)</option>
                  <option value="Evening (5PM - 8PM)">Evening (5PM - 8PM)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Doctor
              </label>
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Select doctor"
              >
                <option value="">Select doctor</option>
                <option value="Dr. Zeeshan Ahmad (General Physician & Child Specialist)">
                  Dr. Zeeshan Ahmad (General Physician & Child Specialist)
                </option>
                <option value="Dr. Badakhshan Malik (Gynecologist)">
                  Dr. Badakhshan Malik (Gynecologist)
                </option>
                <option value="Any available doctor">Any available doctor</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Symptoms / Reason for visit
              </label>
              <textarea
                name="symptoms"
                value={formData.symptoms}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Briefly describe your symptoms or reason for visit..."
                aria-label="Symptoms or reason for visit"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Appointments List */}
      {appointments.length > 0 && (
        <Card className="bg-white rounded-3xl shadow-xl border border-gray-100">
          <CardContent className="p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-6 text-gray-800">Your Appointments</h3>
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-800">{appointment.name}</h4>
                      <p className="text-sm text-gray-600">{appointment.phone}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Date:</strong> {appointment.preferredDate}</p>
                    <p><strong>Time:</strong> {appointment.preferredTime}</p>
                    <p><strong>Doctor:</strong> {appointment.doctor}</p>
                    {appointment.symptoms && <p><strong>Symptoms:</strong> {appointment.symptoms}</p>}
                  </div>
                  <div className="flex gap-2 mt-3">
                    {appointment.status === 'pending' && (
                      <Button
                        size="sm"
                        onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                        className="text-xs"
                      >
                        Confirm
                      </Button>
                    )}
                    {appointment.status === 'confirmed' && (
                      <Button
                        size="sm"
                        onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                        className="text-xs"
                      >
                        Complete
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteAppointment(appointment.id)}
                      className="text-xs text-red-600 hover:text-red-700"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
