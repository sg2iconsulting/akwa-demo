import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import useInView from "@/app/hook/useView";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedCounter = ({ value, duration }: any) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const animation = animate(count, value, {
        duration: duration,
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="font-bold lg:text-[28px] 2xl:text-[48px]"
    >
      {rounded}
    </motion.div>
  );
};

export default AnimatedCounter;
