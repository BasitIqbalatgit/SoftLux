import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "../../lib/utils";

export function Logo({ className }) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div className="flex items-center gap-2">
        <div className="relative h-12 w-32">
          <Image
            src="/logo.png"
            alt="SoftLux Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
