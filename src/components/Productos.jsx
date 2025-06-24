// src/components/Productos.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SidebarFilters from './SidebarFilters.jsx';
import { productos } from '../data/productos.js';

export default function Productos({ showFilters = true, featuredOnly = false }) {
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
    if (featuredOnly) {
      list = list.filter(p => p.destacado);
    }
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
  }, [activeFilters, featuredOnly]);

  return (
    <section id="tienda" className="py-16 bg-gray-900 dark:bg-gray-100">
      <h3 className="text-3xl font-semibold text-center text-brand-text dark:text-brand mb-12">
        Productos Destacados

      </h3>
      <div className="container mx-auto flex flex-col md:flex-row">
        {showFilters && <SidebarFilters onFilter={handleFilter} />}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 px-4">
          {filteredList.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="bg-black/20 dark:bg-white/20 p-6 rounded-xl shadow-lg flex flex-col items-center backdrop-blur-md hover:-translate-y-1 transition"
            >
               <div className="w-full h-40 mb-4 flex items-center justify-center rounded-lg overflow-hidden bg-gray-800 dark:bg-gray-200">
                <img src={p.imagen} alt={p.nombre} className="h-full object-contain" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-center text-brand-text dark:text-brand">
                {p.nombre}
              </h4>
              <p className="text-sm text-gray-300 dark:text-gray-600 mb-2">
                {p.puffs} puffs
              </p>
              <p className="text-lg font-semibold mb-4 text-brand-text dark:text-brand">
                ${p.precio.toLocaleString('es-CL')}
              </p>
              <button className="mt-auto bg-accent text-black font-bold py-2 px-6 rounded-full">
                {p.preventa ? 'Encargar ahora' : 'Comprar'}
              </button>
              {p.preventa && (
                <span className="text-xs text-gray-400 mt-2">
                  Entrega 1–14 días
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
