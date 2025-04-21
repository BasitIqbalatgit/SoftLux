"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

import { Container } from "../ui/container";
import { Logo } from "../ui/logo";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

export function Navbar({ className, ...props }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About Us" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#cta", label: "Contact Us" },
  ];

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm" 
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <Container className="px-4 sm:px-6 md:px-8">
        <nav
          className={cn(
            "flex h-16 items-center justify-between py-2 md:py-4",
            className
          )}
          {...props}
        >
          {/* Logo */}
          <Logo />

          <div className="flex items-center gap-4">
          {/* Navigation Links (Middle) - Desktop */}
          <div className="hidden items-center  justify-center md:flex">
            <ul className="flex space-x-4 lg:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm font-medium text-slate-700 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
         
          {/* Contact Icons (Right) - Desktop */}
          <div className="hidden items-center space-x-3 lg:space-x-4 md:flex">
            <Link 
              href="tel:+1234567890" 
              className="flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-600"
              aria-label="Call us"
            >
              <Phone size={18} />
            </Link>
            <Link 
              href="mailto:info@softlux.com" 
              className="flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-blue-100 hover:text-blue-600"
              aria-label="Email us"
            >
              <MessageCircle size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-600 transition-colors z-50 relative"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>



          </div>

        </nav>
      </Container>

      {/* Mobile Menu - Glassmorphic Effect */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white/0">
          {/* Glassmorphic overlay */}
          <div 
            className="absolute inset-0 bg-blue-600/10 backdrop-blur-lg"
            onClick={toggleMobileMenu}
          ></div>
          
          <div className="relative z-50 mt-16 flex flex-1 flex-col bg-white/80 backdrop-blur-md rounded-t-3xl shadow-lg">
            <Container className="flex flex-1 flex-col px-6">
              <ul className="flex flex-col space-y-2 py-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="block py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="h-px w-full bg-slate-100"></div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-slate-200 py-6">
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <Button asChild variant="primary" className="w-full">
                    <Link href="tel:+1234567890" className="flex items-center justify-center">
                      <Phone size={18} className="mr-2" />
                      Call Us
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="mailto:info@softlux.com" className="flex items-center justify-center">
                      <MessageCircle size={18} className="mr-2" />
                      Email Us
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-center text-sm text-slate-500">
                  Professional cleaning services for your home and business
                </p>
              </div>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}