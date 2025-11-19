import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col mb-4 sm:mb-0">
             <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} Omni Distribution France™. All Rights Reserved.
            </span>
             <span className="text-xs text-gray-400 mt-1">
              L'excellence du produit, la sérénité du service.
            </span>
          </div>
            <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500">
                <li>
                <Link to="/" className="hover:text-gray-900 me-4 md:me-6">Accueil</Link>
                </li>
                <li>
                <Link to="/contact" className="hover:text-gray-900 me-4 md:me-6">Nous contacter</Link>
                </li>
                <li>
                <Link to="/faq" className="hover:text-gray-900">FAQ</Link>
                </li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;