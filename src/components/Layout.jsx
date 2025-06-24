// src/components/Layout.jsx
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeProvider.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
  const { dark, setDark } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    setMenuOpen(false);
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      navigate('/');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      navigate(path);
    }
  };
  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Tienda', path: '/shop' },
    { name: 'Nosotros', path: '/#nosotros' },
    { name: 'Contacto', path: '/#contacto' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-black/80 backdrop-blur-md border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold text-brand-text dark:text-brand-bg">
            InfinityClouds
          </h1>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-brand-text dark:text-brand-bg">
            {links.map(link => (
              <button
                key={link.name}
                onClick={() => handleNav(link.path)}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
            >
              {dark ? '☀' : '🌙'}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-2xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Animated Mobile Nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="md:hidden bg-black/90"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="px-6 py-4 space-y-4 text-brand-text dark:text-brand-bg">
                {links.map(link => (
                  <button
                    key={link.name}
                    onClick={() => handleNav(link.path)}
                    className="block hover:text-accent transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full">{children}</main>

      {/* Separator and Footer */}
      <hr className="border-t border-gray-700 dark:border-gray-300" />
      <footer className="bg-black/80 text-center text-sm text-gray-400 py-4">
        <p>© 2025 InfinityClouds. Todos los derechos reservados.</p>
        <p className="mt-2">
          Venta exclusiva para mayores de 18 años.{' '}
          <a href="#mas-informacion" className="underline hover:text-accent">
            Más información
          </a>
        </p>
      </footer>
    </div>
  );
}
