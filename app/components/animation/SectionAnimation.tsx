'use client'
import useInView from "@/app/hook/useView";
import {motion} from 'framer-motion'
import Section from "../Section";

export interface SectonProps {
    title: string;
    descrip: string;
    imgSrc: string;
}

const SectionAnimation = ({title, descrip, imgSrc}: SectonProps) => {
    const { ref, isInView } = useInView();
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
      >
        <Section title={title} descrip={descrip} imgSrc={imgSrc} />
      </motion.div>
    );
  };
  
  export default SectionAnimation;