'use client';

import PropertyCard from './PropertyCard';
import { properties } from '@/lib/data';

export default function PropertiesSection() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  return (
    <section id="properties" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">Latest Listings</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium properties in Dubai&apos;s most sought-after locations.
          </p>
          <div className="section-divider w-24 mx-auto mt-6" />
        </div>

        {/* Featured Properties - Only 3 with Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} showCarousel={true} />
          ))}
        </div>
      </div>
    </section>
  );
}