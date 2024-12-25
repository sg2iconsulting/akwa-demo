'use client'
import useInView from "@/app/hook/useView";
import {motion} from 'framer-motion'
import Section, { SectionProps } from "../Section";


const SectionAnimation = ({title, descrip, imgSrc, spee, pub}: SectionProps) => {
    const { ref, isInView } = useInView();
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <Section title={title} descrip={descrip} imgSrc={imgSrc} spee={spee} pub={pub} />
      </motion.div>
    );
  };
  
  export default SectionAnimation;