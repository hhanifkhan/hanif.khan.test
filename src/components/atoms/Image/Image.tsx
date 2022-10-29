import React from "react";

interface ImageProps {
  src: string;
  height?: string;
  maxWidth?: string;
  alt?: string;
}

export default function Image({ src, alt }: ImageProps) {
  return (
    <img src={src} alt={alt} className="max-w-[280px] max-h-[280px] w-full" />
  );
}
