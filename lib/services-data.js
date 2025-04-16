import React from 'react';
import { Droplet, Grid, Sofa, DoorClosed, Briefcase, BedDouble, Dog } from "lucide-react";

// This data will be used for both the services section and individual service pages
export const serviceData = [
  {
    title: "Area Rug Cleaning",
    slug: "area-rug-cleaning",
    description: "Professional cleaning for all types of area rugs, removing stains, odors, and allergens.",
    longDescription: "Our specialized area rug cleaning service is designed to thoroughly clean and rejuvenate your valuable rugs. We use advanced techniques and gentle cleaning solutions to remove embedded dirt, stains, and allergens while preserving the integrity of your rug's fibers and colors.",
    icon: <Droplet size={40} />,
    features: [
      {
        title: "Safe for All Rug Types",
        description: "Our process is safe for all types of rugs including Persian, Oriental, wool, silk, and synthetic fibers."
      },
      {
        title: "Deep Soil Removal",
        description: "We extract deeply embedded dirt that regular vacuuming can't reach, extending the life of your rugs."
      },
      {
        title: "Stain Treatment",
        description: "Specialized treatments for common stains including pet accidents, food spills, and beverage stains."
      },
      {
        title: "Odor Elimination",
        description: "Complete removal of odors from pets, smoke, and other sources, not just masking them."
      },
      {
        title: "Color Restoration",
        description: "Gentle cleaning that can help restore the vibrant colors of your area rugs."
      },
      {
        title: "Allergen Removal",
        description: "Elimination of dust mites, pet dander, and other allergens for a healthier home environment."
      }
    ]
  },
  {
    title: "General Carpet Cleaning",
    slug: "carpet-cleaning",
    description: "Deep cleaning solutions for carpets that restore appearance and eliminate embedded dirt.",
    longDescription: "Our comprehensive carpet cleaning service removes the dirt, allergens, and stains that have accumulated in your carpets over time. Using advanced hot water extraction methods and eco-friendly cleaning solutions, we'll restore your carpets to a fresh, clean condition.",
    icon: <Grid size={40} />,
    features: [
      {
        title: "Hot Water Extraction",
        description: "Our primary method uses hot water extraction (steam cleaning) to deeply clean carpets and remove stubborn dirt."
      },
      {
        title: "Pre-Treatment",
        description: "Special attention to high-traffic areas and spots with pre-treatment solutions for maximum effectiveness."
      },
      {
        title: "Quick Dry Technology",
        description: "Advanced equipment ensures carpets dry quickly, usually within 4-6 hours."
      },
      {
        title: "Whole House Service",
        description: "Comprehensive cleaning of all carpeted areas in your home with consistent results throughout."
      },
      {
        title: "Stain Protection",
        description: "Optional application of carpet protectant to guard against future stains and spills."
      },
      {
        title: "Deodorizing Treatment",
        description: "Elimination of odors at their source for a fresh, clean-smelling environment."
      }
    ]
  },
  {
    title: "Upholstery Cleaning",
    slug: "upholstery-cleaning",
    description: "Refresh and revitalize your furniture with our expert upholstery cleaning services.",
    longDescription: "Give your furniture a new lease on life with our professional upholstery cleaning service. We carefully clean sofas, chairs, ottomans, and other upholstered items using specialized equipment and cleaning solutions appropriate for each fabric type.",
    icon: <Sofa size={40} />,
    features: [
      {
        title: "Fabric-Specific Cleaning",
        description: "We use different methods for different fabrics, ensuring safe and effective cleaning for each material type."
      },
      {
        title: "Stain Removal",
        description: "Specialized treatments for food stains, pet accidents, ink, and other common upholstery stains."
      },
      {
        title: "Allergen Extraction",
        description: "Thorough removal of dust mites, pet dander, and other allergens that accumulate in furniture."
      },
      {
        title: "Odor Neutralization",
        description: "Elimination of embedded odors from pets, smoke, and daily use for fresher furniture."
      },
      {
        title: "Color Restoration",
        description: "Gentle cleaning that can help rejuvenate the appearance of faded or dulled upholstery."
      },
      {
        title: "Fabric Protection",
        description: "Optional application of fabric protectant to guard against future stains and spills."
      }
    ]
  },
  {
    title: "Drapes and Curtain Cleaning",
    slug: "drapes-curtain-cleaning",
    description: "Specialized cleaning for all types of window treatments, removing dust and allergens.",
    longDescription: "Our drapes and curtain cleaning service removes accumulated dust, allergens, and odors from your window treatments without the need to take them down. We use specialized equipment and cleaning methods designed specifically for different fabric types and hanging window treatments.",
    icon: <DoorClosed size={40} />,
    features: [
      {
        title: "In-Place Cleaning",
        description: "Clean your drapes and curtains without removing them from the windows in most cases."
      },
      {
        title: "Dust Extraction",
        description: "Thorough removal of dust and allergens that accumulate in window treatments over time."
      },
      {
        title: "Delicate Fabric Care",
        description: "Safe cleaning methods for delicate and specialty fabrics including silk, linen, and sheers."
      },
      {
        title: "Odor Removal",
        description: "Elimination of cooking odors, smoke, and other smells that curtains and drapes absorb."
      },
      {
        title: "UV Damage Prevention",
        description: "Cleaning that helps protect fabrics from continued sun damage and color fading."
      },
      {
        title: "Extended Lifespan",
        description: "Regular professional cleaning helps extend the life of your window treatments."
      }
    ]
  },
  {
    title: "Leather Cleaning",
    slug: "leather-cleaning",
    description: "Gentle yet effective cleaning for all types of leather furniture and accessories.",
    longDescription: "Maintain the beauty and extend the life of your leather furniture with our specialized leather cleaning service. We use gentle yet effective cleaning methods and conditioning treatments specifically designed for leather to remove dirt, oils, and stains while preserving the material's natural characteristics.",
    icon: <Briefcase size={40} />,
    features: [
      {
        title: "Gentle Cleaning",
        description: "Specialized cleaning process that removes dirt and grime without damaging the leather."
      },
      {
        title: "Conditioning Treatment",
        description: "Application of high-quality conditioners to restore moisture and prevent drying and cracking."
      },
      {
        title: "Stain Removal",
        description: "Targeted treatments for common leather stains including ink, food, and body oils."
      },
      {
        title: "Color Restoration",
        description: "For worn areas where color has faded or been removed through regular use."
      },
      {
        title: "Preventative Protection",
        description: "Application of protectants to guard against future stains and damage."
      },
      {
        title: "All Leather Types",
        description: "Specialized care for all types of leather including aniline, semi-aniline, pigmented, and nubuck."
      }
    ]
  },
  {
    title: "Mattress Cleaning",
    slug: "mattress-cleaning",
    description: "Deep sanitization and cleaning of mattresses to remove allergens and improve sleep quality.",
    longDescription: "Our mattress cleaning service provides deep cleaning, sanitization, and deodorization of your mattresses. We remove dust mites, allergens, sweat stains, and odors to create a healthier sleeping environment and extend the life of your mattress.",
    icon: <BedDouble size={40} />,
    features: [
      {
        title: "Allergen Removal",
        description: "Elimination of dust mites, dead skin cells, and other allergens that accumulate in mattresses."
      },
      {
        title: "Stain Treatment",
        description: "Specialized cleaning for common mattress stains including sweat, blood, and urine."
      },
      {
        title: "Sanitization",
        description: "UV sanitizing treatment to kill bacteria and other microorganisms for a healthier sleep surface."
      },
      {
        title: "Odor Elimination",
        description: "Complete deodorization to remove unpleasant smells and leave your mattress fresh."
      },
      {
        title: "Moisture Extraction",
        description: "Thorough extraction of moisture to prevent mold and mildew growth within the mattress."
      },
      {
        title: "Extended Mattress Life",
        description: "Regular professional cleaning can help extend the useful life of your mattress investment."
      }
    ]
  },
  {
    title: "Pet Stain and Odor Removal",
    slug: "pet-stain-removal",
    description: "Specialized treatments to eliminate pet stains and odors from carpets, rugs, and upholstery.",
    longDescription: "Our specialized pet stain and odor removal service is designed to completely eliminate even the most stubborn pet accidents from your carpets, rugs, and upholstery. We use enzyme-based cleaners and specialized equipment to break down and remove both the stain and the odor at its source.",
    icon: <Dog size={40} />,
    features: [
      {
        title: "Enzymatic Cleaning",
        description: "We use specialized enzyme-based cleaners that break down pet waste at the molecular level."
      },
      {
        title: "Deep Extraction",
        description: "Powerful extraction equipment reaches deep into padding and subfloors where pet urine often penetrates."
      },
      {
        title: "Black Light Detection",
        description: "Special UV black lights to locate hidden pet stains that may not be visible to the naked eye."
      },
      {
        title: "Odor Neutralization",
        description: "Complete elimination of odors, not just masking them with fragrances."
      },
      {
        title: "Preventative Treatment",
        description: "Application of repellent treatments to discourage pets from resoiling the same areas."
      },
      {
        title: "Multiple Surface Treatment",
        description: "Effective on carpets, area rugs, upholstery, mattresses, and even hard surfaces."
      }
    ]
  }
]; 