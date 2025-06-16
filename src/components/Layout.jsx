import React from 'react';

function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-brand-bg text-brand-text">
      <header className="bg-black/80 backdrop-blur-md border-b border-purple-900/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-start items-center">
   <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">
     InfinityClouds
   </h1>
        </div>
      </header>
      <main className="w-full">{children}</main>
      <footer className="w-full py-6 bg-black/50 text-center text-sm text-gray-400">
        © 2025 InfinityClouds. Todos los derechos reservados.
      </footer>
    </div>
  );
}
export default Layout;

