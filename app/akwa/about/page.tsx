import CompanyAboutTemplate from "@/components/akwa/template/company-about-template";
import Footer from "@/components/common/template/Footer";
import HeroSlider from "@/components/common/template/HeroSlider";
import Navbar from "@/components/common/template/Navbar";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const presentationData = {
  vision: {
    title: "Vision",
    description:
      "Accompagner la croissance économique nationale et le développement humain en investissant dans des secteurs à forte valeur ajoutée et en tissant des liens durables avec l'ensemble des parties prenantes du Groupe.",
    image: "/akwagroup/images/akwa-about1.jpg",
  },
  mission: {
    title: "Akwa Group, une mission national",
    description:
      "Le Maroc connait aujourd'hui une effervescence en matière de projets structurants et s'appuie sur un environnement économique en plein essor.  AKWA Group, conscient de son rôle dans l'accompagnement du développement social et économique marocain, a investi d'autres domaines d'activité stratégiques, en parallèle à son métier d'origine que sont les hydrocarbures.  Aujourd'hui avec l'élargissement progressif de son bouquet énergétique et l'augmentation de ses capacités de stockage, le Groupe est un acteur incontestable dans le secteur énergétique au Maroc.  Depuis une quinzaine d'années et afin de répondre aux besoins de la croissance urbaine et du développement humain, AKWA Group s'est diversifié dans des secteurs à forte valeur ajoutée comme la presse, l'hôtellerie et l'immobilier afin d'apporter aux entreprises et aux particuliers des solutions variées et innovantes.  De part sa volonté de s'investir dans les énergies propres comme le GNL, en prenant le virage de l'habitat économique, en suivant le développement marocain dans toutes ses composantes, sociale, urbaine et énergétique, AKWA Group constitue désormais un modèle original au Maroc, celui d'un Groupe responsable, engagé au quotidien, à travers ses femmes, ses hommes et ses métiers, à accompagner les chantiers structurants du Royaume.",
    image: "/akwagroup/images/akwa-about2.jpg",
  },
};

const historiqueData = {
  historique: {
    title: "Historique",
    description: "",
    image: "",
  },
  timelineData: [
    {
      year: "1932-1942",
      title: "Fondation 1932-1942",
      description:
        "Une histoire qui se confond avec celle du Maroc et qui témoigne d'une vision audacieuse et entreprenante qui fait de AKWA Group un fleuron de l'économie nationale.",
    },
    {
      year: "1959",
      title: "Expansion 1959",
      description: "Développement des activités et expansion régionale.",
    },
    {
      year: "1962",
      title: "Innovation 1962",
      description: "Introduction de nouvelles technologies et services.",
    },
    {
      year: "1972",
      title: "Croissance 1972",
      description: "Période de croissance significative pour l'entreprise.",
    },
    {
      year: "1977",
      title: "Diversification",
      description: "Diversification des activités du groupe.",
    },
    {
      year: "2000",
      title: "Nouveau Millénaire",
      description:
        "Entrée dans le nouveau millénaire avec de nouvelles ambitions.",
    },
    {
      year: "2002",
      title: "Restructuration",
      description: "Restructuration majeure des opérations.",
    },
    {
      year: "2006",
      title: "Développement International",
      description: "Expansion des activités à l'international.",
    },
    {
      year: "2007",
      title: "Leader sur le marche des carburants et gpl",
      description:
        "L'acquisition du groupe Oismine propulse Akwa Group à la tête du premier réseau de distribution de carburants et des GPL.",
    },
    {
      year: "2011",
      title: "Innovation Technologique",
      description: "Investissements majeurs dans les nouvelles technologies.",
    },
    {
      year: "2014",
      title: "Développement Durable",
      description: "Engagement vers des pratiques plus durables.",
    },
    {
      year: "2020",
      title: "Digitalisation",
      description: "Engagement vers des pratiques plus Digital.",
    },
    {
      year: "2024",
      title: "Rah Ba9ine Ghadine",
      description: "Ach Bghiti HHHHH.",
    },
  ],
};

const chiffreData = {
  stats: [
    {
      value: 20000,
      duration: 3,
      hasPlus: true,
      lines: ["Emplois directs et", "indirects"],
    },
    {
      value: 4,
      duration: 3,
      hasPlus: true,
      lines: ["Milliards $", "de chiffres annuel"],
    },
    {
      value: 2,
      duration: 3,
      lines: ["Sociétés cotées en", "bourse"],
    },
    {
      value: 72,
      duration: 5,
      lines: ["Sociétés"],
    },
    {
      value: 40,
      duration: 5,
      hasPlus: true,
      lines: ["Marques phares"],
    },
  ],
  slides: [
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
    { image: "/akwagroup/pole/develop.png" },
    { image: "/akwagroup/pole/Fluides.png" },
    { image: "/akwagroup/pole/immobilier.png" },
  ],
};

const page = () => {
  return (
    <section className="flex flex-col gap-6 ">
      <section id="navbar">
        <Navbar
          mobileLogoSrcImage="/logo/akwaLogo.png"
          mobileLogoClassname="w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]"
          mobileMenuItemClassename="text-black"
          mobileMenuItemStyle={{}}
          mobileButtonClassename="w-[160px] text-[10px] md:text-[12px] py-2 bg-[#19A0BF] text-white font-bold rounded-full"
          mobileButtonStyle={{}}
          mobileButtonLable="Espace Media"
          desktopNavbarProps={{
            desktopLogoSrcImage: "/logo/akwaLogo.png",
            desktopLogoClassename:
              "w-[60px] md:w-[80px] lg:w-[100px] 2xl:w-[150px]",
            desktopLogoStyle: {},
            menuItemsList: [
              { menuItem: "Le Groupe", link: "#" },
              { menuItem: "Pôles d'activités", link: "#" },
              { menuItem: "Finance", link: "#" },
              { menuItem: "Engagements", link: "#" },
            ],
            menuItemClassename: "flex items-center cursor-pointer",
            menuItemStyle: {},
            selectItems: [
              { label: "Fr", value: "fr" },
              { label: "Ar", value: "ar" },
              { label: "En", value: "en" },
            ],
            selectLabelItem: "label",
            selectValueItem: "value",
            selectIconPath:
              "M2.02852 7.28516L2.35898 7.86172C2.65078 8.37148 3.12891 8.74766 3.69492 8.90938L5.73047 9.48945C6.33516 9.66172 6.75 10.2137 6.75 10.843V12.2457C6.75 12.6324 6.96797 12.984 7.3125 13.1562C7.65703 13.3285 7.875 13.6801 7.875 14.0668V15.4379C7.875 15.9863 8.39883 16.3836 8.92617 16.2324C9.49219 16.0707 9.93164 15.6172 10.0758 15.0441L10.1742 14.6504C10.3219 14.0562 10.7086 13.5465 11.2395 13.2441L11.5242 13.0824C12.0516 12.7836 12.375 12.2211 12.375 11.6164V11.3246C12.375 10.8781 12.1957 10.4492 11.8793 10.1328L11.7422 9.9957C11.4258 9.6793 10.9969 9.5 10.5504 9.5H9.03516C8.64492 9.5 8.2582 9.39805 7.91719 9.20469L6.7043 8.51211C6.55312 8.42422 6.43711 8.28359 6.38086 8.11836C6.26836 7.78086 6.41953 7.41523 6.73945 7.25703L6.94688 7.15156C7.17891 7.03555 7.44961 7.01445 7.6957 7.09883L8.51133 7.36953C8.79961 7.46445 9.11602 7.35547 9.28125 7.10586C9.44648 6.85977 9.42891 6.53281 9.23906 6.3043L8.76094 5.73125C8.40938 5.30938 8.41289 4.69414 8.77148 4.2793L9.32344 3.63594C9.63281 3.27383 9.68203 2.75703 9.44648 2.3457L9.36211 2.19805C9.23906 2.19102 9.11953 2.1875 8.99648 2.1875C5.73398 2.1875 2.96719 4.32852 2.02852 7.28516ZM16.3125 9.5C16.3125 8.20625 15.975 6.98984 15.3844 5.93164L14.4844 6.29375C13.9324 6.51523 13.6477 7.13047 13.834 7.69297L14.4281 9.47539C14.5512 9.84102 14.85 10.1188 15.2227 10.2102L16.2457 10.4668C16.2879 10.1504 16.309 9.82695 16.309 9.5H16.3125ZM0 9.5C0 7.11305 0.948212 4.82387 2.63604 3.13604C4.32387 1.44821 6.61305 0.5 9 0.5C11.3869 0.5 13.6761 1.44821 15.364 3.13604C17.0518 4.82387 18 7.11305 18 9.5C18 11.8869 17.0518 14.1761 15.364 15.864C13.6761 17.5518 11.3869 18.5 9 18.5C6.61305 18.5 4.32387 17.5518 2.63604 15.864C0.948212 14.1761 0 11.8869 0 9.5Z",
            selectIconColor: "white",
            selectItemClassename:
              "flex items-center gap-2 rounded-lg bg-transparent h-7 px-2 cursor-pointer focus:outline-none",
            selectItemsTextColor: "white",
            buttonClassename:
              "w-[160px] py-2 bg-[#19A0BF] text-white font-bold rounded-full",
            buttonLable: "Espace Media",
          }}
        />
        <HeroSlider
          slides={[
            {
              type: "image",
              src: "/akwagroup/images/akwahero.jpg",
              title: "Le Groupe",
              subtitle: "Qui Somme nous?",
            },
          ]}
          paginationStyles={`
        .swiper-pagination {
          position: absolute;
          bottom: 20px !important;
          z-index: 50 !important;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: white;
          opacity: 0.6;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #19A0BF;
        }

        .swiper-button-next, .swiper-button-prev {
          color: white;
        }
      `}
          titleClassName="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[52px] xl:text-[70px] 2xl:text-[85px] 3xl:text-[100px] font-bold leading-tight xl:mt-8 2xl:mt-12 3xl:mt-16 drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          subtitleClassName="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-semibold font-poppins drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          appDownloadTitleClassName="text-[14px] sm:text-[20px] lg:text-[26px] xl:text-[30px] 2xl:text-[36px] font-extrabold font-poppins"
          appButtonClassName="w-16 sm:w-24 md:w-28 lg:w-32 xl:w-44 2xl:w-auto"
          slideClassName="w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[800px] 2xl:min-h-[900px] object-cover"
          effect="slide"
          showPagination={true}
          containerClassName="mt-10 lg:mt-0"
          enableVideoModal={true}
        />
        <CompanyAboutTemplate
          historiqueContent={historiqueData}
          presentationContent={presentationData}
          chiffreContent={chiffreData}
        />
      </section>

      <Footer
        footerBackgroundColor="#052337"
        footerItems={[
          { menuItem: "Contact", link: "/" },
          { menuItem: "Condition d'utilisation", link: "/" },
          { menuItem: "Politique de confidentialité", link: "/" },
          { menuItem: "FAQ", link: "/" },
          { menuItem: "Recrutement", link: "/" },
          {
            menuItem: "Nos filiales",
            isDropdown: true,
            dropdownItems: [
              { menuItem: "Home", link: "#" },
              { menuItem: "Profile", link: "#" },
              { menuItem: "About", link: "#" },
              { menuItem: "Contact", link: "#" },
            ],
          },
        ]}
        socialMediaItems={[
          { icon: FaFacebook, iconSize: 24, iconColor: "#1877F2" },
          { icon: FaTwitter, iconSize: 24, iconColor: "#1DA1F2" },
          { icon: FaInstagram, iconSize: 24, iconColor: "#E4405F" },
        ]}
        footerLogoSource="/logo/akwaLogo.png"
        imageClassename="w-[100px] 2xl:w-[150px]"
      />
    </section>
  );
};

export default page;
