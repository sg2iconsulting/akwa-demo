import React from 'react';

export interface SubmitButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SubmitButton = ({ children, className, style }: SubmitButtonProps) => {
  return (
    <button type="submit" className={className} style={style || {}}>
      {children}
    </button>
  );
};

export default SubmitButton;