import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import Image from Next.js
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { FaStar } from "react-icons/fa";

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
            <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-medium text-blue-600 animate-slide-in-left">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
              Carpet & Upholstery Cleaning Services
            </div>
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 animate-slide-in-left animate-delay-200">
              Professional Carpet & Apostel <span className="text-gradient animate-gradient">Cleaning Services</span> 
            </h1>
            <p className="mb-6 sm:mb-8 max-w-md text-base sm:text-lg text-slate-600 px-4 sm:px-0 animate-slide-in-left animate-delay-400">
              Premium cleaning services tailored for homes and businesses in London and its surrounding areas. Experience spotless results with a touch of class.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 w-full sm:w-auto px-4 sm:px-0 animate-slide-in-left animate-delay-600">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto btn-hover-effect shadow-custom transition-all duration-300 hover:scale-105 hover:shadow-lg"
                variant="primary"
              >
                <Link
                  href="/#services"
                  className="flex items-center justify-center"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  size="lg" 
                  variant="primary" 
                  className="w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="tel:07351783671" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Call Us Now
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link href="mailto:softluxcleaningservicesltd@gmail.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Rating Section */}
            <div className="mt-6 flex flex-col items-center lg:items-start animate-slide-in-left animate-delay-800">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="h-5 w-5"
                    style={{
                      animation: `starFill 0.5s ease-out forwards`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-600 font-medium transition-colors duration-300 hover:text-slate-900">
                Rated 5.0 on Google Reviews
              </p>
            </div>
          </div>

          {/* Right side image */}
          <div className="relative mx-auto mt-8 lg:mt-0 max-w-sm sm:max-w-md lg:max-w-lg block animate-slide-in-right">
            <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] w-full bg-blue-50">
                <Image
                  src="/clean.jpg"
                  alt="Cleaning Service"
                  layout="responsive"
                  width={600}
                  height={600}
                  className="rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </Container>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 sm:h-40 md:h-48 bg-gradient-to-t from-blue-50 to-transparent md:block animate-fade-in"></div>
      <div className="absolute right-0 top-0 hidden h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-blue-100/50 blur-3xl lg:block animate-pulse"></div>
      <div className="absolute bottom-0 left-0 hidden h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full bg-blue-100/50 blur-3xl lg:block animate-pulse"></div>
    </section>
  );
}
