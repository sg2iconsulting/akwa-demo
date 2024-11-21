'use client'
import useInView from "@/hooks/UseView";
import {motion} from 'framer-motion'
import Actuality from "../actuality/Actuality";

const AnimatedActuality = () => {
    const { ref, isInView } = useInView();
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <Actuality />
      </motion.div>
    );
  };
  
  export default AnimatedActuality;