"use client";

import { motion } from "framer-motion";
import TabButton from "@/components/akwa/atoms/tab-button";

export type TabId = "presentation" | "historique" | "chiffres";

interface Tab {
  id: TabId;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  activeTab: TabId;
  onTabChange: (tabId: TabId) => void;
}

export default function TabGroup({
  tabs,
  activeTab,
  onTabChange,
}: TabGroupProps) {
  return (
    <motion.div
      className={`border-b grid grid-cols-1 md:grid-cols-3 w-full md:gap-12 pt-8 px-8`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </motion.div>
  );
}
