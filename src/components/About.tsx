import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="padding flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center rounded-[50px] max-container lg:h-[600px] bg-gradient-to-b from-[#0963AA] to-[#0085C3]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full px-6 py-12 md:px-16"
        >
          <div className="max-w-[700px] flex flex-col gap-12">
            <h1 className="xl:text-[60px] text-[48px] font-bold text-white">
              Qui sommes nous?
            </h1>
            <p className="text-tar text-xl leading-tight text-white">
              Spécialiste des gaz industriels, des gaz médicaux et services
              associés, de la distribution des produits de soudage et des
              techniques annexes, de la diffusion d'équipements et consommables
              médicaux, Maghreb Oxygène s'engage au quotidien à apporter des
              solutions, des produits et services à ses clients, partout à
              travers le Maroc.
            </p>
            <Link href={""} className="max-w-72">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-[55px] w-full px-12 py-4 flex items-center justify-center text-sm"
              >
                En savoir plus
              </motion.button>
            </Link>
          </div>
        </motion.div>
        <div className="lg:w-5/6 w-full">
          <img
            alt="AboutUs"
            src="/maghriboxygen/about.jpeg"
            className="w-full h-[400px] lg:h-[600px] object-cover lg:rounded-r-[50px] max-lg:rounded-b-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
