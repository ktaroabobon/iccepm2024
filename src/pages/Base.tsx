import React, { ReactNode } from "react";
import { Navbar } from "../components/Navbar";

interface BaseProps {
  children: ReactNode;
}

export const Base = ({ children }: BaseProps) => {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
};
