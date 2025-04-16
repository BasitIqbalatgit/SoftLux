import React from "react";
import Link from "next/link";
import { Droplet } from "lucide-react";
import { cn } from "../../lib/utils";

export function Logo({ className }) {
  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
          <Droplet size={20} className="text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-900">
            <span className="text-blue-600">Soft</span>
            Lux
          </span>
          <span className="text-xs font-light text-gray-600">Cleaning Services</span>
        </div>
      </div>
    </Link>
  );
}
