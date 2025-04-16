"use client"
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, CheckCircle } from "lucide-react";

import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="cta" className="bg-gradient-to-b from-blue-600 to-blue-700 py-10 sm:py-12 md:py-16 lg:py-20">
      <Container className="px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2">
          <div>
            <div className="mb-2 sm:mb-3 inline-flex items-center rounded-full bg-blue-500 px-2 py-1 sm:px-3 text-xs sm:text-sm font-medium text-white">
              Get In Touch
            </div>
            <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Ready for a Deeper Clean?
            </h2>
            <p className="mb-4 sm:mb-6 max-w-xl text-sm sm:text-base md:text-lg text-blue-100">
              Contact us today to schedule a cleaning service or request a free estimate.
              Our team is ready to provide the professional cleaning solutions you need.
            </p>
            
            <div className="mb-6 sm:mb-8 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-500/50 p-3 sm:p-4">
                <div className="mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-blue-600">
                  <Phone size={16} className="sm:size-20" />
                </div>
                <h3 className="mb-1 text-base sm:text-lg font-semibold text-white">Call Us</h3>
                <p className="text-xs sm:text-sm text-blue-100">Available Mon-Sat, 8am - 7pm</p>
                <Link 
                  href="tel:+1234567890" 
                  className="mt-1 sm:mt-2 inline-block text-white underline hover:text-blue-200 text-xs sm:text-sm"
                >
                  (123) 456-7890
                </Link>
              </div>
              <div className="rounded-lg bg-blue-500/50 p-3 sm:p-4">
                <div className="mb-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-blue-600">
                  <MessageCircle size={16} className="sm:size-20" />
                </div>
                <h3 className="mb-1 text-base sm:text-lg font-semibold text-white">Email Us</h3>
                <p className="text-xs sm:text-sm text-blue-100">We'll respond within 24 hours</p>
                <Link 
                  href="mailto:info@cleanmaster.com" 
                  className="mt-1 sm:mt-2 inline-block text-white underline hover:text-blue-200 text-xs sm:text-sm"
                >
                  info@softlux.com
                </Link>
              </div>
            </div>
            
            <div className="mb-6 sm:mb-0 hidden md:block">
              <h3 className="mb-3 text-lg font-semibold text-white">Why Choose Us?</h3>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Professional, uniformed staff</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">100% satisfaction guarantee</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Eco-friendly cleaning products</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-2 mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-200" />
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100">Flexible scheduling options</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-slate-900">Thank You!</h3>
                <p className="text-sm sm:text-base text-slate-600">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <>
                <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold text-slate-900">
                  Request a Free Quote
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="name" className="mb-1 block text-xs sm:text-sm font-medium text-slate-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="phone" className="mb-1 block text-xs sm:text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      placeholder="(123) 456-7890"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="service" className="mb-1 block text-xs sm:text-sm font-medium text-slate-700">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs sm:text-sm text-slate-900 focus:border-blue-500 focus:outline-none"
                      value={formState.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="carpet">Carpet Cleaning</option>
                      <option value="upholstery">Upholstery Cleaning</option>
                      <option value="area">Area Rug Cleaning</option>
                      <option value="drapes">Drapes & Curtain Cleaning</option>
                      <option value="leather">Leather Cleaning</option>
                      <option value="mattress">Mattress Cleaning</option>
                      <option value="pet">Pet Stain & Odor Removal</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <label htmlFor="message" className="mb-1 block text-xs sm:text-sm font-medium text-slate-700">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none"
                      placeholder="Tell us more about your needs..."
                      value={formState.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-xs sm:text-sm py-2 sm:py-2.5 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <span className="flex items-center justify-center">
                        Get Free Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                  <p className="mt-2 text-center text-[10px] sm:text-xs text-slate-500">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}