import React from 'react';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Label = ({ children, htmlFor, className, style }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className} style={style || {}}>
      {children}
    </label>
  );
};

export default Label;