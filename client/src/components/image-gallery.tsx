import { useTranslation } from "@/hooks/use-translation";

export default function ImageGallery() {
  const { t } = useTranslation();

  // TODO: Replace these placeholder images from Unsplash with actual project images.
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Hospital Reception",
      title: t("reception"),
    },
    {
      src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Patient Room",
      title: t("patient-room"),
    },
    {
      src: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Medical Equipment",
      title: t("equipment"),
    },
    {
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Laboratory",
      title: t("laboratory"),
    },
    {
      src: "https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Pharmacy",
      title: t("pharmacy"),
    },
    {
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Waiting Area",
      title: t("waiting-area"),
    },
  ];

  return (
    <section id="gallery" className="relative py-20 sm:py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-emerald-50/20" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100 shadow-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent break-words tracking-tight">
              {t("gallery-title")}
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              {t("gallery-subtitle")}
            </p>
          </div>
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-xs font-medium text-emerald-200 uppercase tracking-wide">
                    {t("gallery-image")}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

