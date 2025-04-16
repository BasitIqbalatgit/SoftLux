import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { serviceData } from "../../lib/services-data";

const ServiceCard = ({ service, index, className }) => {
  return (
    <Link 
      href={`/services/${service.slug}`}
      className={cn(
        "group relative rounded-lg bg-white p-4 sm:p-5 md:p-6 shadow-custom transition-all duration-300 hover:-translate-y-1 hover:shadow-lg block",
        className
      )}
    >
      <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
        {service.icon}
      </div>
      <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
      <p className="text-xs sm:text-sm text-slate-600 mb-3">{service.description}</p>
      <div className="flex items-center text-blue-600 text-xs sm:text-sm font-medium mt-auto">
        <span>Learn more</span>
        <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
      </div>
      {/* Number badge */}
      <span className="absolute -right-2 -top-2 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-600 text-xs sm:text-sm font-medium text-white">
        {index + 1}
      </span>
    </Link>
  );
};

export function Services() {
  return (
    <section id="services" className="bg-blue-50 py-12 sm:py-16 md:py-20">
      <Container className="px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="mb-2 sm:mb-3 inline-flex items-center rounded-full bg-blue-100 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium text-blue-700">
            Our Services
          </div>
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Professional Cleaning Solutions
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-slate-600">
            We offer a comprehensive range of professional cleaning services with guaranteed satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              service={service}
            />
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg text-slate-700">
            Need a custom cleaning solution? Contact us for a personalized quote.
          </p>
          <Button asChild size="lg" variant="primary" className="w-full sm:w-auto btn-hover-effect">
            <Link href="/#cta" className="flex items-center justify-center">
              Get a Free Quote
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}