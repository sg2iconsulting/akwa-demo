'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TrendingSlider from './Carousel';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const tabs = [
    { id: 'tab1', label: 'Nos Métiers' },
    { id: 'tab2', label: 'Nos Engagements' },
    { id: 'tab3', label: 'Nos 20 Contrôles Gratuits' },
  ];

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleTabSelect = (tab: string) => {
    setActiveTab(tab);
    setIsDropdownOpen(false);
  };

  return (
    <section className="font-poppins w-full max-w-[2000px] mx-auto flex flex-col gap-8 xl:mt-60">
      <div className="relative w-full px-5 md:hidden">
        <button
          onClick={handleDropdownToggle}
          className="w-full p-3 border border-gray-300 dark:bg-black bg-white text-left font-semibold focus:outline-none text-xs"
        >
          {tabs.find((tab) => tab.id === activeTab)?.label || 'Select an option'}
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden bg-white dark:bg-black  border border-gray-300 text-xs shadow-lg "
            >
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => handleTabSelect(tab.id)}
                  className={`p-3 hover:bg-gray-100 cursor-pointer ${
                    activeTab === tab.id ? 'bg-[#2B3773] text-white' : 'dark:bg-black bg-white'
                  }`}
                >
                  {tab.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:flex w-full p-5 md:px-10 lg:px-20 h-full font-bold">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 text-center py-2 ${
              activeTab === tab.id
                ? 'border-b-2 border-black'
                : 'border-b border-[#E5E7EB] text-[#6B7280]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-full flex justify-center">
        {activeTab === 'tab1' && <TrendingSlider />}
        {activeTab === 'tab2' && (
          <div className="p-5 md:px-10 lg:px-20">
            <img src="/speedy/engagements.png" alt="Engagements" />
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="p-5 md:px-10 lg:px-20">
            <img src="/speedy/controles.png" alt="Contrôles Gratuits" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;
