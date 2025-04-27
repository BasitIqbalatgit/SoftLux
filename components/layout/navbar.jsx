// Navbar.jsx
"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Mail } from "lucide-react";

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
          ? "border-b border-blue-900 bg-[#010D36] shadow-md"
          : "bg-[#010D36]"
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
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Navigation Links and Contact - All on the right */}
          <div className="flex items-center gap-4">
            {/* Navigation Links - Desktop */}
            <div className="hidden items-center justify-center md:flex">
              <ul className="flex space-x-4 lg:space-x-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-sm font-medium text-slate-200 transition-colors hover:text-blue-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
           
            {/* Contact Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Link
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors"
                href="tel:07351783671"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </Link>
              <Link
                className="flex items-center gap-2 text-sm font-medium text-slate-200 hover:text-blue-300 transition-colors"
                href="mailto:softluxcleaningservicesltd@gmail.com"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#010D36] hover:bg-blue-200 transition-colors z-50 relative"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu - Dark Theme */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col">
          {/* Simple overlay */}
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={toggleMobileMenu}
          ></div>
          
          <div className="relative z-50 mt-16 flex flex-1 flex-col bg-[#010D36] rounded-t-3xl shadow-lg">
            <Container className="flex flex-1 flex-col px-6">
              <ul className="flex flex-col space-y-2 py-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="block py-3 text-lg font-medium text-slate-200 hover:text-blue-300 transition-colors"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        document.body.style.overflow = "auto";
                      }}
                    >
                      {link.label}
                    </Link>
                    {index < navLinks.length - 1 && (
                      <div className="h-px w-full bg-blue-900/50"></div>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-blue-900/50 py-6">
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                  <Button asChild size="sm" variant="outline" className="w-full border-slate-300 text-slate-200 hover:bg-blue-900 hover:text-white">
                    <Link href="tel:07351783671" className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Us
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="primary" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="mailto:softluxcleaningservicesltd@gmail.com" className="flex items-center justify-center">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Link>
                  </Button>
                </div>
                <p className="mt-6 text-center text-sm text-slate-300">
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