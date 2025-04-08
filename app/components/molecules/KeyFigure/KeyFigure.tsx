import React from "react";
import Divider from "../../atoms/Divider/Divider";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import SignCounter from "../SignCounter/SignCounter";

export interface KeyFigureProps {
  value: number;
  duration: number;
  paragraphs: string[];
  className?: string;
  style?: React.CSSProperties;
  sign?: string;
  signClassename?: string;
  valueClassename?: string;
  paragraphClassename?: string;
  deviderClassename?: string;
}

const KeyFigure = ({
  value,
  duration,
  paragraphs,
  className = "flex flex-col items-center gap-2",
  style,
  sign = "+",
  signClassename,
  valueClassename,
  paragraphClassename,
  deviderClassename
}: KeyFigureProps) => {
  return (
    <div className={className} style={style || {}}>
      <SignCounter value={value} duration={duration} sign={sign} signClassName={signClassename} counterClassName={valueClassename} />
      <Divider className={deviderClassename}/>
      {paragraphs.map((line, index) => (
        <Paragraph
          key={index}
          className={paragraphClassename}
        >
          {line}
        </Paragraph>
      ))}
    </div>
  );
};

export default KeyFigure;
