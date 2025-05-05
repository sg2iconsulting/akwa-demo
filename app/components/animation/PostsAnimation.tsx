"use client";
import useInView from "@/hook/useView";
import { motion } from "framer-motion";
import Posts, { PostProp } from "../afriquia/Posts";

const PostsAnimation = ({ pro }: PostProp) => {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8 }}
    >
      <Posts pro={pro} />
    </motion.div>
  );
};

export default PostsAnimation;
