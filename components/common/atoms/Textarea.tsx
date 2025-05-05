import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  style?: React.CSSProperties;
}

const Textarea: React.FC<TextareaProps> = ({ className, style, ...props }) => {
  return <textarea className={className} style={style} {...props} />;
};

export default Textarea;
