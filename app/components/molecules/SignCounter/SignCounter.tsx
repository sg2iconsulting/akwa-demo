import React from "react";
import AnimatedCounter from "../../atoms/AnimatedCounter/AnimatedCounter";
import SignChar from "../../atoms/SignChar/SignChar";

export interface SignCounterProps {
  value: number;
  duration: number;
  sign?: string;
  className?: string;
  signClassName?: string;
  counterClassName?: string;
}

const SignCounter = ({
  value,
  duration,
  sign = "+",
  className,
  signClassName,
  counterClassName,
}: SignCounterProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      <SignChar sign={sign} className={signClassName} />
      <AnimatedCounter value={value} duration={duration} classname={counterClassName} />
    </div>
  );
};

export default SignCounter;
