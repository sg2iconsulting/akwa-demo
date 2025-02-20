import React from "react";

export interface SignCharProps {
  sign?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SignChar = ({ sign = "+", className, style }: SignCharProps) => {
  return (
    <span className={className} style={style}>
      {sign}
    </span>
  );
};

export default SignChar;
