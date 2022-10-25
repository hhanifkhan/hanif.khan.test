import React from "react";

interface ProductTitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function ProductTitle({
  className,
  children,
}: ProductTitleProps) {
  return (
    <h2 className={`text-base md:text-lg font-semibold ${className}`}>
      {children}
    </h2>
  );
}
