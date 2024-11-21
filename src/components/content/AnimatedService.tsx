
'use client'
import useInView from "@/hooks/UseView";
import {motion} from 'framer-motion'
import Service from "./Service";

const AnimatedService = () => {
    const { ref, isInView } = useInView();
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <Service />
      </motion.div>
    );
  };
  
  export default AnimatedService;