import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinkItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <li>
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block py-2 px-3 rounded-md transition-colors duration-200 text-base ${
          isActive
            ? 'font-bold text-purple-700'
            : 'text-gray-700 hover:text-gray-900 hover:bg-white/50'
        }`
      }
    >
      {children}
    </NavLink>
  </li>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-xl border-b border-white/20 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center" onClick={closeMenu}>
          <img 
            src="https://storage.googleapis.com/service-file-images-bucket-prod/organization_logo/49ad12c4-a3e0-4ff4-82ab-1eb8cc3bc030" 
            alt="Omni Distribution Logo" 
            className="h-8 w-auto mix-blend-multiply"
          />
        </NavLink>
        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white/80 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <NavLinkItem to="/" onClick={closeMenu}>Accueil</NavLinkItem>
            <NavLinkItem to="/contact" onClick={closeMenu}>Nous contacter</NavLinkItem>
            <NavLinkItem to="/faq" onClick={closeMenu}>FAQ</NavLinkItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;