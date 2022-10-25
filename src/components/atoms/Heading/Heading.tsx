import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export default function Heading({ children }: TitleProps) {
  return <h1 className="text-4xl">{children}</h1>;
}
