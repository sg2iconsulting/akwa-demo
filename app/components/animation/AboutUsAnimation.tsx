'use client'
import useInView from "@/app/hook/useView";
import {motion} from 'framer-motion'
import AboutUs from "../maghreb/AboutUs";

const AboutUsAnimation = () => {
    const { ref, isInView } = useInView();
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <AboutUs />
      </motion.div>
    );
  };
  
  export default AboutUsAnimation;