import React from "react";
import Navbar from "../components/maghreb/Navbar";
import Footer from "../components/maghreb/Footer";
import ActualityAnimation from "../components/animation/ActualityAnimation";
import ContactAnimation from "../components/animation/ContactAnimation";
import AboutUsAnimation from "../components/animation/AboutUsAnimation";
import ApplicationsAnimation from "../components/animation/ApplicationsAnimation";
import LastPostsAnimation from "../components/animation/LastPostsAnimation";

const Home = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-10 lg:gap-20 xl:gap-[100px] 2xl:gap-[160px]">
      <Navbar />
      <ContactAnimation />
      <AboutUsAnimation />
      <ApplicationsAnimation />
      <ActualityAnimation
        imgSrc={"/actuality/actu.jpeg"}
        btnColor="bg-[#0085C3]"
        color="bg-[#19517D]"
        title="Nouveau casque protecteur"
        ttlColor="text-[#0085C3]"
        descrip="Après avoir étudié les attentes et besoins de nos clients,
                Afriquia Gaz a décidé de développer un casque protecteur, en
                rendant la bouteille beaucoup plus pratique, plus ergonomique,
                plus sécurisée et avec un nouveau design."
        Date={"23 Decembre 2024"}
      />
      <LastPostsAnimation />
      <Footer />
    </section>
  );
};

export default Home;
