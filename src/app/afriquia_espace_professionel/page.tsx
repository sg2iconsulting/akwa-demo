import Content from "@/components/content/Content";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const espace_professionel = () => {
  return (
    <div className="flex flex-col font-poppins">
      <Navbar space={"Espace Particulier"} btnColor={"bg-[#387CCC]"} link={"/afriquia_espace_particulier"} />
      <Content />
      <Footer />
    </div>
  );
};

export default espace_professionel;
