import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { serviceData } from "../../lib/services-data";

const ServiceCard = ({ title, description, image, slug, index }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mb-4 flex-1 text-gray-600">{description}</p>
        <Link
          href={`/services/${slug}`}
          className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-blue-50 via-blue-50/50 to-white py-12 sm:py-16 md:py-20">
      <Container className="px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <div className="mb-2 sm:mb-3 inline-flex items-center rounded-full bg-blue-100 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium text-blue-600">
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
            <ServiceCard key={service.slug} {...service} index={index} />
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