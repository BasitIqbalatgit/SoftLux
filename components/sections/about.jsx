import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Heart, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

import { Container } from "../ui/container";

export function About() {
  const features = [
    "Top-quality cleaning equipment",
    "Eco-friendly cleaning solutions",
    "Fully insured and bonded staff",
    "100% satisfaction guarantee",
    "Flexible scheduling options",
    "Free estimates for all services",
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20">
      <Container className="px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1 mx-auto w-full max-w-sm sm:max-w-md lg:max-w-full">
            {/* Image placeholder with design elements */}
            <div className="relative mx-auto aspect-square max-w-xs sm:max-w-sm md:max-w-md overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-full w-full bg-gradient-to-tr from-success/5 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4 sm:px-6">
                    <div className="mb-4 sm:mb-6 mx-auto h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-success flex items-center justify-center">
                      <Heart size={32} className="sm:size-40" color="white" />
                    </div>
                    <h3 className="mb-2 text-lg sm:text-xl font-bold text-success">Trusted Since 2010</h3>
                    <p className="text-xs sm:text-sm text-slate-600">Our commitment to quality has made us the trusted choice for thousands of customers.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 h-24 w-24 sm:h-32 sm:w-32 rounded-lg bg-success hidden sm:block"></div>
            <div className="absolute -left-4 sm:-left-6 -top-4 sm:-top-6 h-24 w-24 sm:h-32 sm:w-32 rounded-lg bg-blue-100 hidden sm:block"></div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 sm:-bottom-10 left-0 right-0 mx-auto w-4/5 rounded-lg bg-white p-3 sm:p-4 shadow-lg">
              <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center">
                <div className="border-r border-slate-200 px-1 sm:px-2">
                  <p className="text-lg sm:text-2xl font-bold text-success">10+</p>
                  <p className="text-[10px] sm:text-xs text-slate-600">Years Experience</p>
                </div>
                <div className="border-r border-slate-200 px-1 sm:px-2">
                  <p className="text-lg sm:text-2xl font-bold text-success">5,000+</p>
                  <p className="text-[10px] sm:text-xs text-slate-600">Happy Clients</p>
                </div>
                <div className="px-1 sm:px-2">
                  <p className="text-lg sm:text-2xl font-bold text-success">15+</p>
                  <p className="text-[10px] sm:text-xs text-slate-600">Team Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="mb-2 sm:mb-3 inline-flex items-center rounded-full border border-success/20 bg-success/10 px-2 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-success">
              <span className="mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-success"></span>
              About Our Company
            </div>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
              High-Quality Cleaning Services You Can Trust
            </h2>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-slate-600">
              SoftLux has been providing exceptional cleaning services since 2010. Our dedicated team of cleaning professionals is committed to delivering the highest quality results for your home or business.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base text-slate-600">
              We use only the finest equipment and eco-friendly cleaning solutions to ensure your space isn't just clean, but healthy and safe for your family, employees, and customers.
            </p>
            <ul className="mb-6 sm:mb-8 grid grid-cols-1 gap-2 sm:gap-3 sm:grid-cols-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className={`mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 ${index % 2 === 0 ? 'text-success' : 'text-blue-600'}`} />
                  <span className="text-xs sm:text-sm md:text-base text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="success" className="w-full sm:w-auto btn-hover-effect shadow-custom">
              <Link href="/#cta" className="flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}