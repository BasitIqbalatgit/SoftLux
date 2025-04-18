import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, CheckCircle, Clock, Brush } from 'lucide-react';

import { serviceData } from '@/lib/services-data';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

// This creates a statically generated page for each service
export async function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = serviceData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Service Not Found</h1>
        <p className="mt-4 text-slate-600">The service you&apos;re looking for doesn&apos;t exist.</p>
        <Button asChild className="mt-8">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
        </Button>
      </Container>
    );
  }

  return (
    <main className="pt-16">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-20">
        <Container className="px-4 sm:px-6 md:px-8">
          <Link 
            href="/#services" 
            className="mb-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div>
              <div className="mb-3 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-medium text-blue-600">
                Professional Service
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {service.title}
              </h1>
              <p className="text-slate-600 text-lg mb-6">
                {service.longDescription || service.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-slate-700">60-90 minutes (average)</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-slate-700">Available 7 days a week</span>
                </div>
                <div className="flex items-center">
                  <Brush className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-slate-700">Eco-friendly solutions</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="primary" className="w-full sm:w-auto btn-hover-effect shadow-custom">
                  <Link href="/#cta" className="flex items-center justify-center">
                    Book This Service
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="tel:+1234567890" className="flex items-center justify-center">
                    Call For Inquiry
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto max-w-md md:max-w-full">
              <div className="aspect-video relative bg-gradient-to-tr from-blue-100 to-white rounded-xl flex items-center justify-center p-12 shadow-lg">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-blue-200/50 blur-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-lg bg-blue-200/50 blur-2xl -z-10"></div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-20">
        <Container className="px-4 sm:px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our {service.title} Service
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide exceptional service quality with attention to detail that sets us apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features?.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            )) || (
              // Default features if service doesn't have specific ones
              <>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Professional Staff</h3>
                  <p className="text-slate-600">Our trained and experienced professionals deliver consistent, high-quality results every time.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Eco-Friendly Products</h3>
                  <p className="text-slate-600">We use environmentally safe cleaning solutions that are effective yet gentle for your home and family.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-slate-600">We stand behind our work with a 100% satisfaction guarantee on all our services.</p>
                </div>
              </>
            )}
          </div>
        </Container>
      </section>

      {/* Process section - FIXED */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container className="px-4 sm:px-6 md:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Cleaning Process
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our thorough and methodical approach ensures the best possible results.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - visible only on md and up */}
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-100 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-12 relative">
              {[
                {
                  title: "Initial Assessment",
                  description: "We begin with a thorough inspection to identify specific needs and problem areas."
                },
                {
                  title: "Pre-Treatment",
                  description: "Application of specialized solutions to break down soils and stains."
                },
                {
                  title: "Deep Cleaning",
                  description: "Using professional-grade equipment to extract dirt, allergens, and cleaning solutions."
                },
                {
                  title: "Spot Treatment",
                  description: "Extra attention to stubborn stains and high-traffic areas."
                },
                {
                  title: "Final Inspection",
                  description: "Ensuring all areas meet our high-quality standards before completion."
                }
              ].map((step, index) => (
                <div key={index} className="md:grid md:grid-cols-2 gap-8 items-center relative">
                  {/* Left side (even index) or right side (odd index) on desktop */}
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 relative">
                      {/* Desktop number indicator - absolutely positioned in the middle of the timeline */}
                      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 
                           ${index % 2 === 0 ? 'right-0 translate-x-1/2 mr-4' : 'ml-4 left-0 -translate-x-1/2'} 
                           w-8 h-8 rounded-full bg-blue-600 text-white items-center justify-center z-10">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      
                      {/* Mobile heading with number */}
                      <div className="flex items-center md:hidden mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white mr-3">
                          <span className="text-sm font-bold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                      </div>
                      
                      {/* Desktop heading without number */}
                      <h3 className="ml-10 text-xl font-semibold text-slate-900 mb-2 hidden md:block">{step.title}</h3>
                      <p className="text-slate-600 md:hidden">{step.description} </p>
                      <p className="text-slate-600 hidden md:block ml-10">{step.description} </p>
                    </div>
                  </div>
                  
                  {/* Empty space for timeline layout on desktop */}
                  <div className={`md:col-span-1 hidden md:block ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-20">
        <Container className="px-4 sm:px-6 md:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 shadow-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Schedule Your {service.title}?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Contact us today to book your service appointment or request a free quote. Our team is ready to provide the exceptional cleaning results you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 hover:text-black w-full sm:w-auto">
                <Link href="/#cta" className="flex items-center justify-center">
                  Book Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white  hover:bg-blue-500 hover:text-white text-blue-600 sm:w-auto w-full">
                <Link href="tel:+1234567890" className="flex items-center justify-center">
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}