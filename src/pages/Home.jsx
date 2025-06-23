// src/pages/Home.jsx
import React from 'react';
import {Link}from 'react-router-dom';
import Productos from '../components/Productos.jsx';

export default function Home() {
  return (
    <>
      {/* Hero / Inicio */}
      <section id="inicio" className="flex flex-col items-center justify-center text-center py-20 px-6 bg-brand text-brand-text dark:bg-white dark:text-black">
        <div className="max-w-lg">
          <img src="/assets/hero-image.png" alt="Vaporizador Destacado" className="mx-auto mb-8 rounded-lg shadow-lg" />
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Respira – Fluye – Continúa</h2>
         <Link to="/shop" className="inline-block px-6 py-3 border border-brand-text text-brand-text hover:bg-brand-text hover:text-brand transition">
            Explorar Vaporizadores
          </Link>
        </div>
      </section>

      {/* Productos Más Vendidos */}
      <section id="featured" className="py-16 px-6 bg-gray-900 dark:bg-gray-100">
        <h3 className="text-3xl font-semibold text-center text-brand-text dark:text-brand mb-12">
        </h3>
        <Productos featuredOnly={true} />
      </section>
    {/* ¿Por qué elegirnos? */}
    <section id="nosotros" className="py-16 px-6 bg-brand text-brand-text dark:bg-white dark:text-black">
      <h3 className="text-3xl font-semibold text-center mb-8">¿Por qué elegirnos?</h3>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">✔️</span>
          <p className="text-center">Productos originales y certificados</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">⚡</span>
          <p className="text-center">Envío express disponible</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl mb-2">💬</span>
          <p className="text-center">Atención al cliente 24/7</p>
        </div>
      </div>
    </section>

    {/* Newsletter */}
    <section id="contacto" className="py-12 px-6 bg-gray-800 dark:bg-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-brand-text dark:text-brand mb-4 md:mb-0">
          Sé el primero en recibir promociones exclusivas !!
        </p>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-grow px-4 py-2 rounded-l-lg text-black"
          />
          <button className="px-4 py-2 bg-accent text-black font-semibold rounded-r-lg">
            Unirte al Club
          </button>
        </div>
      </div>
    </section>
    </>
  );
}