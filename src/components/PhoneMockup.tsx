import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
}

export const PhoneMockup = ({ children, className = "" }: PhoneMockupProps) => {
  return (
    <div className={`phone-mockup ${className}`}>
      <div className="phone-notch"></div>
      <div className="phone-content">{children}</div>
    </div>
  );
};