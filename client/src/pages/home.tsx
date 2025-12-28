import HeroSection from '@/components/hero-section';
import MissionSection from '@/components/mission-section';
import DoctorsDirectory from '@/components/doctors-directory';
import ClinicTimings from '@/components/clinic-timings';
import ImageGallery from '@/components/image-gallery';
import ReviewsSection from '@/components/reviews-section';
import LocationContact from '@/components/location-contact';
import ServiceCardsGrid from '@/components/ServiceCardsGrid';
import { useRevealOnScroll } from '@/lib/utils';

export default function Home() {
  const reveal1 = useRevealOnScroll<HTMLDivElement>();
  const reveal2 = useRevealOnScroll<HTMLDivElement>();
  const reveal3 = useRevealOnScroll<HTMLDivElement>();
  const reveal4 = useRevealOnScroll<HTMLDivElement>();
  const reveal5 = useRevealOnScroll<HTMLDivElement>();
  const reveal6 = useRevealOnScroll<HTMLDivElement>();
  const reveal7 = useRevealOnScroll<HTMLDivElement>();
  const reveal8 = useRevealOnScroll<HTMLDivElement>();
  return (
    <>
      <div ref={reveal1} className="reveal-init"><HeroSection /></div>
      <div ref={reveal2} className="reveal-init"><ServiceCardsGrid /></div>
      <div ref={reveal3} className="reveal-init"><MissionSection /></div>
      <div ref={reveal4} className="reveal-init"><DoctorsDirectory /></div>
      <div ref={reveal5} className="reveal-init"><ClinicTimings /></div>
      <div ref={reveal6} className="reveal-init"><ImageGallery /></div>
      <div ref={reveal7} className="reveal-init"><ReviewsSection /></div>
      <div ref={reveal8} className="reveal-init"><LocationContact /></div>
    </>
  );
}

