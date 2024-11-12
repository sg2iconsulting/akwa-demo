import Link from "next/link";
import { motion } from "framer-motion";

const News = () => {
  const SmallCards = [
    {
      featuredImage: "/maghriboxygen/news/picB.jpeg",
      articleLink: "",
      publishDate: "July 20, 2021",
      title: "AFRIQUIA GAZ PARTICIPE À LA 15ÈME ÉDITION DU SALON MAROCOTEL",
    },
    {
      featuredImage: "/maghriboxygen/news/picC.jpeg",
      articleLink: "",
      publishDate: "July 20, 2021",
      title: "LES DÉPOSITAIRES UTILISATEURS D'I-GAZ RÉCOMPENSÉS",
    },
    {
      featuredImage: "/maghriboxygen/news/picA.jpeg",
      articleLink: "",
      publishDate: "July 20, 2021",
      title:
        "LES NOUVELLES BOUTEILLES D'AFRIQUIA GAZ RÉVOLUTIONNENT LE MARCHÉ  ",
    },
    {
      featuredImage: "/maghriboxygen/news/picD.jpeg",
      articleLink: "",
      publishDate: "July 20, 2021",
      title:
        "AFRIQUIA GAZ S'ALLIE À L'ASSOCIATION TIBU MAROC ET OUVRE UN CENTRE POUR LA JEUNESSE D'INZEGANE",
    },
    {
      featuredImage: "/maghriboxygen/news/picE.jpeg",
      articleLink: "",
      publishDate: "July 20, 2021",
      title:
        "AFRIQUIA GAZ S'ALLIE À L'ASSOCIATION TIBU MAROC ET OUVRE UN CENTRE POUR LA JEUNESSE D'INZEGANE",
    },
  ];

  const MainCard = {
    featuredImage: "/maghriboxygen/news/picA.jpeg",
    articleLink: "",
    title: "Nouveau Casque Protecteur",
    Desc: "Après avoir étudié les attentes et besoins de nos clients, Afriquia Gaz a décidé de développer un casque protecteur, en rendant la bouteille beaucoup plus pratique, plus ergonomique, plus sécurisée et avec un nouveau design.",
    publishDate: "July 20, 2021",
  };

  return (
    <section className="padding-x padding-b w-full flex items-center justify-center">
      <div className="max-container">
        <h1 className="text-sky font-poppins py-8 sm:py-16 font-bold text-[50px] md:text-[60px] tracking-tighter text-start">
          Actualités
        </h1>
        <div className="flex flex-col lg:min-h-[500px] justify-center gap-8 xl:flex-row">
          {/* Big Card */}
          <motion.div
            key="BigCard"
            className="flex flex-col rounded-[24px] bg-[#19517D] xl:w-3/5 text-white shadow-[0_-5px_20px_0_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={MainCard.featuredImage}
              className="max-h-[500px] object-cover rounded-t-[24px] object-center"
            />
            <div className="flex flex-col px-4 md:px-12 py-8 gap-8 font-poppins">
              <div className="flex flex-col gap-2 text-start">
                <h4 className="text-xs">{MainCard.publishDate}</h4>
                <h2 className="font-bold text-[36px]">{MainCard.title}</h2>
                <p className="text-xl font-normal md:line-clamp-none line-clamp-3">
                  {MainCard.Desc}
                </p>
              </div>

              <Link
                href={MainCard.articleLink}
                className="w-full md:w-56 rounded-full bg-sky"
              >
                <button className="w-full text-primary font-normal tracking-wide p-4">
                  Lire l'article
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-4 xl:w-2/5 px-2 md:p-0">
            {SmallCards.map((card, index) => (
              <motion.div
                key={index}
                className="border border-[#F1F1F1] rounded-[12px] flex  pl-6 p-3 items-center justify-between hover:scale-105 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex flex-col">
                  <h4 className="text-xs mb-2 text-start">
                    {card.publishDate}
                  </h4>

                  <h2 className="font-bold line-clamp-3 text-start">
                    {card.title}
                  </h2>
                </div>
                <img
                  src={card.featuredImage}
                  alt={card.title}
                  className="max-w-[120px] w-full rounded-xl object-cover aspect-square"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
