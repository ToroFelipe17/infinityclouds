import React from 'react';
import { motion } from 'framer-motion';

const productos = [
  { id: 1, nombre: 'Geek Bar Meloso Max – Mango Ice (9000 puffs)', precio: '$18.990' },
  { id: 2, nombre: 'Innobar 20000 Puffs – Energy Drink', precio: '$23.990' },
  { id: 3, nombre: 'Oxbar 8000 Puffs – Uva Ice', precio: '$21.990' },
  { id: 4, nombre: 'Nexpod Kit 5000 Puffs – Monster Ice', precio: '$21.990', preventa: true },
  { id: 5, nombre: 'ElfBar BC20000 Touch – Blueberry Mint', precio: '$24.990', preventa: true },
  { id: 6, nombre: 'SWFT 10000 Puffs – Strawberry Banana', precio: '$19.990', preventa: true },
];

export default function Productos() {
  return (
    <section className="w-full py-16 flex flex-wrap justify-center gap-6 px-4">
      {productos.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: p.id * 0.1 }}
          className="w-64 bg-black/30 p-4 rounded-lg flex flex-col items-center"
        >
          <div className="w-full h-40 bg-gray-800 mb-4 flex items-center justify-center">
            <span className="text-6xl text-gray-600">∞</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 text-center">{p.nombre}</h3>
          <p className="text-sm text-gray-300 mb-4">{p.preventa ? 'Entrega 1-14 días' : 'En stock'}</p>
          <span className="font-bold mb-4">{p.precio}</span>
          <button className="bg-accent text-black font-bold py-2 px-6 rounded-full">
            {p.preventa ? 'Encargar ahora' : 'Comprar'}
          </button>
        </motion.div>
      ))}
    </section>
  );
};
