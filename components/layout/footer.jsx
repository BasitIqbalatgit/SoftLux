import React from "react";
import Link from "next/link";
import { Container } from "../ui/container";
import { Phone, Mail, MapPin, Facebook, Instagram, Clock } from "lucide-react";
import { FcGoogle } from "react-icons/fc"; // Add this for Google icon
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
              Professional cleaning services with over 5+ years of experience.
              We provide top-quality cleaning solutions for homes and businesses.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61567719046340"
                target="_blank"
                rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200">
                <FaFacebookF size={18} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/softluxcleaningservicesltd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <FaInstagram size={18} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.google.com/search?client=ms-android-samsung-ss&sca_esv=1e618ffcd8ec6d84&sxsrf=AHTn8zrFuxtqMOE74JfhYTjI5F1JQkyIyw:1745861266844&q=softlux+cleaning+services+ltd+reviews&uds=ABqPDvyHZ_Llhf9RlCLgpvH8tV0aGL9SpSMLlkDIwzxNmrdUNYvJMCeVr1eQJ6Z26hJOgPc-Iyq63bLXtcI1WUaEz29VFoSbQVXDSisnrEgpSmMVdNUefIta5sUCbSChBrw90aP0Dta9RohVrtjJN0Ef9mqnXAqGbOTq-gmSQEwzys8XBrgM6rjvq5k5TZfpI5UC_VCwtns6FTHqC6gc2qMJBcYxjn4RFZ5pXaE5v1Tk9CBfD2nUUCLwZ5q1qtdeXwJTrc3oJs0cUCgNmAFkemswinCIzm6tyoR3f-o5-ios9iFZioZbJdR0r1VzTbGWC5XlYFLdqbN91VS1Zfega8Ey7o-QMyIgBlmuTCVU9Gk9YPcQ8vKAqJSuai9b3ZJH86lsi8O0TSMSASYKiy9uoUwq26A6dsF7JnDuVKlGPw-TiBGszWe9gaNyBVkVt2PNsmBCtCxZQmMV&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2Kzc4atQSKY5QxjZ2zUj0V_ndGhYdDynI3kM7k-aa6TQj6ZpSon2FQPW1sIuRJxEq3rjrUezjmbkpGIS4krGMZTtf17MY3Iin0ur9X8gbnlQ6m60phdg%3D%3D&sa=X&ved=2ahUKEwjssIyFoPuMAxUpQkEAHTi5M9oQk8gLegQIIBAB&ictx=1&stq=1&cs=1&lei=kroPaOyfM6mEhbIPuPLO0Q0#ebo=2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                <FcGoogle size={18} />
                <span className="sr-only">Google</span>
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

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="tel:07351783671" className="hover:text-white transition-colors duration-200">
                  <Phone className="inline-block w-4 h-4 mr-2" />
                  07351 783671
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:softluxcleaningservicesltd@gmail.com"
                  className="flex items-center hover:text-white transition-colors duration-200 whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <Mail className="flex-shrink-0 w-4 h-4 mr-2" />
                  <span className="truncate">softluxcleaningservicesltd@gmail.com</span>
                </Link>
              </li>
              <li className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-1" />
                <div>
                  <p>Monday to Sunday</p>
                  <p>07:00 - 22:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} SoftLux Cleaning Services Ltd. All rights reserved.</p>
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