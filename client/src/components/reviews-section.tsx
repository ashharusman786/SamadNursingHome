import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

export default function ReviewsSection() {
  const { t } = useTranslation();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400/50 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-emerald-50/20" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent break-words tracking-tight">
              {t('reviews-title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              {t('reviews-subtitle')}
            </p>
          </div>
        </div>
        
        {/* Modern Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {reviewsData.map((review) => (
            <Card key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <CardContent className="p-6 sm:p-8">
                {/* Rating Section */}
                <div className="flex items-center mb-6">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="ml-3 text-gray-600 text-sm font-medium">{review.rating}.0</span>
                </div>
                
                {/* Review Text */}
                <blockquote className="mb-6">
                  <p className="text-gray-700 text-base leading-relaxed italic">"{review.text}"</p>
                </blockquote>
                
                {/* Reviewer Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold shadow-md">
                    {review.avatar}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
