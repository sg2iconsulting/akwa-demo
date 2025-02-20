import React from "react";

export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

const Divider = ({ className, style }: DividerProps) => {
  return <hr className={className} style={style} />;
};

export default Divider;