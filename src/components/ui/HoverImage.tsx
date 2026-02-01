import { cn } from "@/lib/utils";
import React from "react";

interface HoverImageProps {
  src: string;
  alt?: string;
  className?: string;
  heightClass?: string;
  badge?: React.ReactNode;
}

export const HoverImage = ({
  src,
  alt = "",
  className,
  heightClass = "h-96",
  badge,
}: HoverImageProps) => {
  return (
    <div className={cn("relative group overflow-hidden rounded-2xl", className)}>
      {/* BLURRED BACKGROUND ON HOVER */}
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-all duration-700 ease-out
          z-0
        "
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover scale-110 blur-xl opacity-70"
        />
      </div>

      {/* MAIN IMAGE */}
      <div className="relative z-10 overflow-hidden rounded-2xl shadow-large">
        <img
          src={src}
          alt={alt}
          className={cn(
            "w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105",
            heightClass
          )}
        />
      </div>

      {/* OPTIONAL BADGE */}
      {badge && (
        <div className="absolute z-20 -bottom-6 -right-6 transition-transform duration-500 ease-out group-hover:translate-y-1">
          {badge}
        </div>
      )}
    </div>
  );
};
