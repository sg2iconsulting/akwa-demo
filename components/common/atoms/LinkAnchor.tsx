import React from 'react';

export interface LinkAnchorProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

const LinkAnchor = ({ href, children, className, style, target = '_blank' }: LinkAnchorProps) => {
  return (
    <a href={href} className={className} style={style || {}} target={target}>
      {children}
    </a>
  );
};

export default LinkAnchor;