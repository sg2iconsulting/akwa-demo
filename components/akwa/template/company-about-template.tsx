"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import TabGroup, { TabId } from "@/components/akwa/molecule/tab-group";
import { TimelineItem } from "@/components/akwa/organisme/timeline";
import PresentationSection from "@/components/akwa/organisme/presentation-section";
import HistorySection from "@/components/akwa/organisme/history-section";
import CompanyKeyNumbers from "@/components/akwa/organisme/company-key-numbers";
import Carousel from "@/components/common/template/Carousel";

interface CompanyTimelineTemplateProps {
  historiqueContent: {
    timelineData: TimelineItem[];
    historique: {
      title: string;
      description: string;
      image: string;
    };
  };
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
  chiffreContent: {
    stats: {
      value: number;
      duration: number;
      hasPlus?: boolean;
      lines: string[];
    }[];
    slides: {
      image: string;
    }[];
  };
}

export default function CompanyAboutTemplate({
  historiqueContent,
  presentationContent,
  chiffreContent,
}: CompanyTimelineTemplateProps) {
  const [activeTab, setActiveTab] = useState<TabId>("presentation");

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

            {activeTab === "historique" && (
              <motion.div
                key="historique"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <HistorySection
                  timelineData={historiqueContent.timelineData}
                  historique={historiqueContent.historique}
                  initialActiveIndex={0}
                />
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
                <CompanyKeyNumbers
                  title="Chiffres Clés"
                  stats={chiffreContent.stats}
                />

                <Carousel
                  slides={chiffreContent.slides}
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
