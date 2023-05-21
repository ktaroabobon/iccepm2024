import React, { ReactNode } from "react";
import { MyNavbar } from "../components/Navbar";

interface BaseProps {
  children: ReactNode;
}

export const Base = ({ children }: BaseProps) => {
  return (
    <div>
      <MyNavbar />

      <main>{children}</main>
    </div>
  );
};
