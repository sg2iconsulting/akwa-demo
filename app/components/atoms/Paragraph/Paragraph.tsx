import React from 'react';

export interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Paragraph = ({ children, className, style }: ParagraphProps) => {
  return <p className={className} style={style || {}}>{children}</p>;
};

export default Paragraph;