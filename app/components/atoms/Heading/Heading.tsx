import React from 'react';

export interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Heading = ({ tag, children, className, style }: HeadingProps) => {
  const Tag = tag;
  return <Tag className={className} style={style || {}}>{children}</Tag>;
};

export default Heading;