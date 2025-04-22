"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import TabGroup, { TabId } from "../molecules/tab-group";
import HistorySection from "../organism/history-section";
import PresentationSection from "../organism/presentation-section";
import { TimelineItem } from "../organism/timeline";
import CompanyKeyNumbers from "../organism/company-key-numbers";
import Carousel from "../../organisms/Carousel/Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const statsData = [
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
];

interface CompanyTimelineTemplateProps {
  timelineItems: TimelineItem[];
  presentationContent: {
    vision: {
      title: string;
      description: string;
      image: string;
    };
    mission: {
      title: string;
      description: string;
      image: string;
    };
  };
}

export default function CompanyAboutTemplate({
  timelineItems,
  presentationContent,
}: CompanyTimelineTemplateProps) {
  const [activeTab, setActiveTab] = useState<TabId>("historique");

  const tabs = [
    { id: "presentation" as TabId, label: "Présentation" },
    { id: "historique" as TabId, label: "Historique" },
    { id: "chiffres" as TabId, label: "Nos chiffres clés" },
  ];

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="bg-white overflow-hidden max-w-[1920px] w-full "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tabs */}
        <TabGroup
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content */}
        <div className="overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "historique" && (
              <motion.div
                key="historique"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <HistorySection
                  timelineItems={timelineItems}
                  initialActiveIndex={0}
                />
              </motion.div>
            )}

            {activeTab === "presentation" && (
              <motion.div
                key="presentation"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <PresentationSection content={presentationContent} />
              </motion.div>
            )}

            {activeTab === "chiffres" && (
              <motion.div
                key="chiffres"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-8 py-8"
              >
                <CompanyKeyNumbers title="Chiffres Clés" stats={statsData} />

                <Carousel
                  slides={[
                    { image: "/akwagroup/pole/develop.png" },
                    { image: "/akwagroup/pole/Fluides.png" },
                    { image: "/akwagroup/pole/immobilier.png" },
                    { image: "/akwagroup/pole/develop.png" },
                    { image: "/akwagroup/pole/Fluides.png" },
                    { image: "/akwagroup/pole/immobilier.png" },
                    { image: "/akwagroup/pole/develop.png" },
                    { image: "/akwagroup/pole/Fluides.png" },
                    { image: "/akwagroup/pole/immobilier.png" },
                  ]}
                  slideClassename="w-full h-full object-cover shadow-[0_0_20px_0_rgba(0,0,0,0.2)] aspect-[8/7]"
                  title=""
                  titleClassename="text-[20px] md:text-[24px] xl:text-[40px] 2xl:text-[60px] font-black dark:text-white"
                  description=""
                  descriptionClassename="text-[12px] md:text-[14px] xl:text-[18px] 2xl:text-[24px] font-medium dark:text-white"
                  titleTextColor="#052337"
                  leftChevronIcon={FaChevronLeft}
                  leftChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
                  rightChevronIcon={FaChevronRight}
                  rightChevronIconClassename="xl:text-[50px] 2xl:text-[70px] font-bold"
                  descriptionTextColor="#666666"
                  navigationIconColor="#FFFFFF"
                  breakpoints={{
                    319: {
                      slidesPerView: 1.2,
                      spaceBetween: 0,
                    },
                    426: {
                      slidesPerView: 1.6,
                      spaceBetween: 0,
                    },
                    1024: {
                      slidesPerView: 2.3,
                      spaceBetween: 0,
                    },
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
