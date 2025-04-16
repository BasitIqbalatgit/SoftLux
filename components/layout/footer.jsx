import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 text-slate-200">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">CleanMaster</h3>
            <p className="mb-4 text-sm text-slate-400">
              Professional cleaning services with over 10 years of experience.
              We provide top-quality cleaning solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors duration-200">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Area Rug Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">General Carpet Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Upholstery Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Drapes and Curtain Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Leather Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Mattress Cleaning</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Pet Stain and Odor Removal</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/#home" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/#services" className="hover:text-white transition-colors duration-200">Services</Link></li>
              <li><Link href="/#testimonials" className="hover:text-white transition-colors duration-200">Testimonials</Link></li>
              <li><Link href="/#cta" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-blue-500" />
                <span>123 Cleaning Street, City, State, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-blue-500" />
                <Link href="tel:+1234567890" className="hover:text-white transition-colors duration-200">
                  (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-blue-500" />
                <Link href="mailto:info@cleanmaster.com" className="hover:text-white transition-colors duration-200">
                  info@cleanmaster.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} CleanMaster. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}