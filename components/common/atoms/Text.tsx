import React from "react";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tag: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Text: React.FC<TextProps> = ({ children, className, style, tag }) => {
  let Tag: React.ElementType;

  switch (tag) {
    case "h1":
      Tag = "h1";
      break;
    case "h2":
      Tag = "h2";
      break;
    case "h3":
      Tag = "h3";
      break;
    case "h4":
      Tag = "h4";
      break;
    case "h5":
      Tag = "h5";
      break;
    case "h6":
      Tag = "h6";
      break;
    default:
      Tag = "p";
  }

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
};

export default Text;
