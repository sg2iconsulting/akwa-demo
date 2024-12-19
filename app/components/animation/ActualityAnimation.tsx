"use client";
import useInView from "@/app/hook/useView";
import { motion } from "framer-motion";
import Actuality from "../actuality/Actuality";

const ActualityAnimation = () => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Actuality
        imgSrc={"/actuality/actu.jpeg"}
        btnColor="bg-[#19A0BF]"
        color="bg-[#052337]"
        title="Nouveau casque protecteur"
        descrip="Après avoir étudié les attentes et besoins de nos clients,
                Afriquia Gaz a décidé de développer un casque protecteur, en
                rendant la bouteille beaucoup plus pratique, plus ergonomique,
                plus sécurisée et avec un nouveau design."
      />
    </motion.div>
  );
};

export default ActualityAnimation;
