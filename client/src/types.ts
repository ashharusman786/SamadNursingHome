export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  morningHours: string;
  eveningHours: string;
  days: string[];
  email: string;
  mobile: string;
  isAvailable?: boolean;
  bio?: string;
  education?: string;
  languages?: string[];
  experienceYears?: number;
  services?: string[];
  registration?: string;
  achievements?: string[];
  consultationFee?: string;
  specializations?: string[];
  hospitalAffiliations?: string[];
  ratings?: number;
  patientReviews?: number;
}
