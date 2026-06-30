'use client';

import Image from 'next/image';
import { Award, Shield, Users, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Award, value: '500+', label: 'Properties Sold' },
    { icon: Shield, value: '100%', label: 'Vastu Compliant' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: TrendingUp, value: '15+', label: 'Years Experience' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold-500 font-semibold tracking-wider uppercase text-sm">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Your Trusted Partner in
              <span className="block text-gold-gradient mt-2">Dubai Real Estate</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Aresha Real Estate is your gateway to premium properties in Dubai. With years of experience 
              and deep market knowledge, we provide unparalleled expertise in buying, selling, and 
              investing in one of the world&apos;s most dynamic real estate markets.
            </p>
            <p className="text-gray-400 mb-8">
              Our commitment to excellence, combined with personalized service, ensures that every client 
              finds their perfect property. Whether you&apos;re looking for a luxurious penthouse with Burj Khalifa 
              views or a family villa in a serene community, we have got you covered.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/4855c0_0540ccfcc04b44ed88bda8b8e66edd1c~mv2.jpg"
                alt="Luxury Property"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gold-500/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}