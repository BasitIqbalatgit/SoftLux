import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js
import { ArrowRight, MapPin } from "lucide-react";

import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left side content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-medium text-blue-600">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
              Professional Cleaning Services
            </div>
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Make Your Space <span className="text-gradient">Spotless</span> &
              Fresh
            </h1>
            <p className="mb-6 sm:mb-8 max-w-md text-base sm:text-lg text-slate-600 px-4 sm:px-0">
              We provide expert cleaning solutions for your home and business.
              Our professional team delivers exceptional results every time.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 w-full sm:w-auto px-4 sm:px-0">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto btn-hover-effect shadow-custom"
                variant="primary"
              >
                <Link
                  href="/#services"
                  className="flex items-center justify-center"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto btn-hover-effect"
              >
                <Link
                  href="tel:+1234567890"
                  className="flex items-center justify-center"
                >
                  Call Us Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative mx-auto mt-8 lg:mt-0 max-w-sm sm:max-w-md lg:max-w-lg block">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full bg-blue-50">
                {/* Add your actual image here */}
                <Image
                  src="/clean.jpg"
                  alt="Cleaning Service"
                  layout="responsive" // or use layout="intrinsic"
                  width={600} // Provide width for the image
                  height={600} // Provide height for the image
                  className="rounded-full"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl"></div>
          </div>
        </div>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 sm:h-40 md:h-48 bg-gradient-to-t from-blue-50 to-transparent md:block" />
      <div className="absolute right-0 top-0 hidden h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-blue-100/50 blur-3xl lg:block" />
      <div className="absolute bottom-0 left-0 hidden h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full bg-blue-100/50 blur-3xl lg:block" />
    </section>
  );
}
