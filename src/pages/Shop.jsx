// src/pages/Shop.jsx
import React, { useState, useEffect } from 'react';
import SidebarFilters from '../components/SidebarFilters.jsx';
import { motion } from 'framer-motion';
import { productos } from '../data/productos.js'; // Update the path as needed

export default function Shop() {
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredList, setFilteredList] = useState(productos);

  const handleFilter = (section, option) => {
    setActiveFilters(prev => {
      const key = `${section}:${option}`;
      const newFilters = { ...prev };
      newFilters[key] ? delete newFilters[key] : (newFilters[key] = { section, option });
      return newFilters;
    });
  };

  useEffect(() => {
    let list = productos;
    Object.values(activeFilters).forEach(f => {
      if (f.section === 'Tipo de dispositivo') {
        list = list.filter(p => p.nombre.includes(f.option));
      }
      if (f.section === 'Vaporizadores') {
        list = list.filter(p => p.nombre.includes(f.option.split(' ')[0]));
      }
      if (f.section === 'E‑Liquids') {
        list = list.filter(p => p.nombre.toLowerCase().includes('liquid'));
      }
    });
    setFilteredList(list);
  }, [activeFilters]);

  return (
    <section id="tienda" className="py-16 bg-gray-900 dark:bg-gray-100">
      <h3 className="text-3xl font-semibold text-center text-brand-text dark:text-brand mb-12">

      </h3>
      <div className="container mx-auto flex flex-col md:flex-row">
        {/* Sidebar */}
        <SidebarFilters onFilter={handleFilter} />

        {/* Productos */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {filteredList.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black/30 dark:bg-white/30 p-6 rounded-2xl flex flex-col items-center"
            >
              <div className="w-full h-40 bg-gray-800 dark:bg-gray-200 mb-4 flex items-center justify-center rounded-lg">
                <span className="text-6xl text-gray-600 dark:text-gray-400">∞</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-brand-text dark:text-brand">
                {p.nombre}
              </h4>
              <p className="text-sm text-gray-300 dark:text-gray-600 mb-2">{p.puffs}</p>
              <p className="text-lg font-semibold mb-4 text-brand-text dark:text-brand">
                {p.precio}
              </p>
              <button className="mt-auto bg-accent text-black font-bold py-2 px-6 rounded-full">
                {p.preventa ? 'Encargar ahora' : 'Comprar'}
              </button>
              {p.preventa && (
                <span className="text-xs text-gray-400 mt-2">Entrega 1–14 días</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
