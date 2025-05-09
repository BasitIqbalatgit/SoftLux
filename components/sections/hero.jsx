"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export function Hero() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  // Autoplay logic
  useEffect(() => {
    let interval;
    if (slider) {
      interval = setInterval(() => {
        slider.current?.next();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="mb-4 sm:mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs sm:text-sm font-medium text-blue-600">
              <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
              Carpet & Upholstery Cleaning Services
            </div>
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Professional Carpet & Upholstery <span className="text-gradient">Cleaning Services</span>
            </h1>
            <p className="mb-6 sm:mb-8 max-w-md text-base sm:text-lg text-slate-600 px-4 sm:px-0">
              Premium cleaning services tailored for homes and businesses in London and its surrounding areas. Experience spotless results with a touch of class.
            </p>
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0 w-full sm:w-auto px-4 sm:px-0">
              <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                <Link href="/#services" className="flex items-center justify-center">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="primary" className="w-full sm:w-auto">
                  <Link href="tel:07351783671" className="flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="mailto:softluxcleaningservicesltd@gmail.com" className="flex items-center justify-center">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-6 flex gap-8">
              <Image src="/googleReview.png" alt="Google Review" width={180} height={50} />
              <Image src="/googleGurante.png" alt="Google Guarantee" width={180} height={50} />
            </div>
          </div>

          {/* Right: Image Slider - FIXED for consistent image display */}
          <div className="relative mx-auto mt-8 lg:mt-0 w-full md:w-11/12 lg:w-full">
            <div 
              ref={sliderRef} 
              className="keen-slider overflow-hidden rounded-lg shadow-xl"
              style={{ aspectRatio: "4/3", height: "450px" }} // Fixed height and aspect ratio
            >
              {["img4.jpg","img1.jpg", "img2.jpg", "img3.jpg",  "img5.jpg"].map((img, index) => (
                <div 
                  className="keen-slider__slide relative w-full h-full" 
                  key={index}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={`/${img}`}
                      alt={`Slide ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      priority={index === 0}
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-lg bg-blue-200/50 blur-2xl animate-pulse"></div>
          </div>
        </div>
      </Container>

      {/* Decorative Background */}
      <div className="absolute bottom-0 left-0 right-0 hidden h-32 sm:h-40 md:h-48 bg-gradient-to-t from-blue-50 to-transparent md:block"></div>
      <div className="absolute right-0 top-0 hidden h-48 w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 rounded-full bg-blue-100/50 blur-3xl lg:block animate-pulse"></div>
      <div className="absolute bottom-0 left-0 hidden h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48 rounded-full bg-blue-100/50 blur-3xl lg:block animate-pulse"></div>
    </section>
  );
}