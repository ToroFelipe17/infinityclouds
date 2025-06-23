// src/components/SidebarFilters.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const filterData = [
  {
    title: 'Tipo de dispositivo',
    options: ['Pod', 'Mod Kit', 'Desechable']
  },
  {
    title: 'Vaporizadores',
    options: [
      'Hierba seca Cannabis',
      'Extracciones Wax',
      'Cartridge 510',
      'Todo Extracciones'
    ]
  },
  {
    title: 'E‑Liquids',
    options: ['E‑Liquid Frutal', 'E‑Liquid Mentolado', 'E‑Liquid Gourmet']
  }
];

export default function SidebarFilters({ onFilter }) {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (idx) => {
    setOpenSections(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <div className="w-full md:w-64 bg-gray-800 dark:bg-gray-100 p-4 rounded-lg mb-8 md:mb-0">
      {filterData.map((section, idx) => (
        <div key={section.title} className="mb-4">
          <button
            className="w-full flex justify-between items-center text-lg font-semibold text-brand-text dark:text-brand"
            onClick={() => toggleSection(idx)}
          >
            {section.title}
            {openSections[idx] 
              ? <FiChevronUp className="text-xl"/> 
              : <FiChevronDown className="text-xl"/>}
          </button>
          <AnimatePresence initial={false}>
            {openSections[idx] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden mt-2"
              >
                {section.options.map(option => (
                  <div key={option} className="flex items-center my-1">
                    <input
                      type="checkbox"
                      id={option}
                      className="mr-2 form-checkbox text-accent"
                      onChange={() => onFilter(section.title, option)}
                    />
                    <label
                      htmlFor={option}
                      className="text-sm text-brand-text dark:text-brand"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
