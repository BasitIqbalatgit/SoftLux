import React from "react";
import { Star, Quote } from "lucide-react";

import { Container } from "../ui/container";
import { cn } from "../../lib/utils";

const TestimonialCard = ({ content, author, role, rating, index, className }) => {
  // Alternate background colors for visual interest
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-white" : "bg-blue-50";
  
  return (
    <div 
      className={cn(
        `${bgColor} group relative flex h-full flex-col rounded-lg p-6 shadow-custom transition-all duration-300 hover:shadow-lg`,
        className
      )}
    >
      {/* Quote icon */}
      <div className="absolute -top-3 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        <Quote size={16} />
      </div>
      
      {/* Rating stars */}
      <div className="mb-4 flex pt-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "h-4 w-4",
              i < rating ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200"
            )}
          />
        ))}
      </div>
      
      {/* Testimonial content */}
      <p className="mb-6 flex-1 text-slate-700">{content}</p>
      
      {/* Author info */}
      <div className="mt-auto">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <span className="text-sm font-medium">{author.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <div className="ml-3">
            <p className="font-semibold text-slate-900">{author}</p>
            <p className="text-sm text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      content: "CleanMaster did an amazing job cleaning our carpets and upholstery. The team was professional, thorough, and the results exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Homeowner",
      rating: 5,
    },
    {
      content: "I've been using their services for years now for my business. They are always reliable, prompt, and deliver excellent results every time.",
      author: "Michael Thompson",
      role: "Business Owner",
      rating: 5,
    },
    {
      content: "The pet stain and odor removal service was incredible. Stains that I thought would never come out are completely gone. Highly recommended!",
      author: "Jessica Williams",
      role: "Pet Owner",
      rating: 4,
    },
    {
      content: "Professional team with attention to detail. They cleaned our leather furniture and it looks brand new again. Great service at a fair price.",
      author: "David Rodriguez",
      role: "Homeowner",
      rating: 5,
    },
    {
      content: "We hired CleanMaster to clean all the carpets in our office building. They were efficient, minimized disruption, and did an excellent job.",
      author: "Emma Davis",
      role: "Office Manager",
      rating: 4,
    },
    {
      content: "Outstanding service from start to finish. The mattress cleaning service has made a huge difference to my allergies. Thank you!",
      author: "Robert Chen",
      role: "Customer",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            Testimonials
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Don't just take our word for it - hear from our satisfied customers about their experiences with CleanMaster.
          </p>
        </div>

        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-10 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl" />
          <div className="absolute -bottom-10 right-10 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl" />
          
          {/* Testimonial cards */}
          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                index={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>

        {/* Overall rating */}
        <div className="mt-16 rounded-lg bg-white p-6 shadow-custom lg:mx-auto lg:max-w-2xl">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div>
              <p className="text-lg font-semibold text-slate-900">Our customers rate us</p>
              <div className="flex items-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="ml-2 text-sm text-slate-600">
                  <span className="font-semibold">5 out of 5</span> based on Google reviews
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/google.jpeg" alt="Google" className="h-6" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}