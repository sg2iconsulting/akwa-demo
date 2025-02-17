import React from 'react';

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Textarea = ({ placeholder, value, onChange, className, style }: TextareaProps) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
      style={style || {}}
    />
  );
};

export default Textarea;