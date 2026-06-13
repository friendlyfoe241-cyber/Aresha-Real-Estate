'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Bed, Bath, Maximize, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '@/lib/data';

interface PropertyCardProps {
  property: Property;
  showCarousel?: boolean;
}

export default function PropertyCard({ property, showCarousel = false }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = property.images && property.images.length > 0 
    ? property.images 
    : [property.image];

  useEffect(() => {
    if (!showCarousel || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [showCarousel, images.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="property-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
      {/* Image Container */}
      <div className={`relative ${showCarousel ? 'h-80' : 'h-64'} overflow-hidden`}>
        <Image
          src={images[currentImageIndex]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gold-500 text-slate-900 text-xs font-bold rounded-full">
            FEATURED
          </div>
        )}

        {/* Image Counter */}
        {showCarousel && images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/60 text-white text-xs font-medium rounded-full">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {showCarousel && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-2xl font-bold text-white">{property.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{property.location}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-gold-600 transition-colors">
          {property.title}
        </h3>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-gold-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-gold-500" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-gold-500" />
            <span>{property.area}</span>
          </div>
        </div>

        {/* Tags */}
        {property.tags && property.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {property.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        {property.description && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{property.description}</p>
        )}

        {/* CTA */}
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 bg-slate-900 text-white text-center font-semibold rounded-xl hover:bg-gold-500 hover:text-slate-900 transition-all duration-300"
        >
          Enquire Now
        </a>
      </div>
    </div>
  );
}