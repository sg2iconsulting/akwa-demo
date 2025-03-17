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
}

const KeyFigure = ({
  value,
  duration,
  paragraphs,
  className = "flex flex-col items-center gap-2",
  style,
  sign = "+",
}: KeyFigureProps) => {
  return (
    <div className={className} style={style || {}}>
      <SignCounter value={value} duration={duration} sign={sign} />
      <Divider className="w-10 bg-white" />
      {paragraphs.map((line, index) => (
        <Paragraph
          key={index}
          className="text-center font-semibold md:text-[10px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]"
        >
          {line}
        </Paragraph>
      ))}
    </div>
  );
};

export default KeyFigure;
