import React, { useState } from "react";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  
  const languages = ["FR", "EN", "AR"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const selectLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button 
        onClick={toggleDropdown}
        className="flex items-center px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md"
      >
        <span className="mr-1">{selectedLanguage}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-10"
        >
          <ul>
            {languages.map(lang => (
              <li key={lang}>
                <button
                  onClick={() => selectLanguage(lang)}
                  className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    selectedLanguage === lang ? 'bg-gray-100 dark:bg-gray-700' : ''
                  }`}
                >
                  {lang}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 