import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterItemProps {
  label: string;
  href: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ label, href }) => {
  return (
    <motion.li className="cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <Link href={href}>{label}</Link>
    </motion.li>
  );
};

export default FooterItem;