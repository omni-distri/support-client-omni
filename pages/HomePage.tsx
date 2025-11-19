
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import * as THREE from 'three';
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min';

const openEDeskChat = () => {
  alert('Cette action ouvrira le widget de chat eDesk.');
};

const SupportRequestCard = () => (
  <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 max-w-md w-full mx-auto md:mx-0 relative z-10">
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Demande de support</h3>
    <p className="text-gray-500 mb-6 text-sm">Remplissez ce formulaire pour une assistance rapide.</p>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Sujet de la demande</label>
        <select className="w-full rounded-lg border-gray-200 border p-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500 sm:text-sm bg-gray-50">
          <option>Suivi de commande</option>
          <option>Produit endommagé</option>
          <option>Demande de retour</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
        <textarea
          rows={3}
          className="w-full rounded-lg border-gray-200 border p-2.5 text-gray-900 focus:border-purple-500 focus:ring-purple-500 sm:text-sm bg-gray-50"
          placeholder="Décrivez votre problème en détail..."
        ></textarea>
      </div>

      <Link
        to="/contact"
        className="block w-full rounded-lg bg-[#5856D6] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#4845c6] focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-200 shadow-md hover:shadow-lg"
      >
        Envoyer la demande
      </Link>
    </div>

    <div className="mt-6 pt-6 border-t border-gray-100">
      <h4 className="text-xs font-semibold text-gray-900 uppercase mb-3">Autres outils d'aide</h4>
      <div className="grid grid-cols-2 gap-3">
        <Link to="/faq" className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          Base de connaissances
        </Link>
        <button onClick={openEDeskChat} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-xs font-medium text-gray-700 transition-colors text-left">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
          FAQ
        </button>
      </div>
    </div>
  </div>
);

const CommitmentCard: React.FC<{ icon: React.ReactNode; title: string; children: string }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 h-full">
    <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-purple-50 text-purple-600">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const PartnerLogo: React.FC<{ name: string; imageUrl: string; sizeClass?: string }> = ({ name, imageUrl, sizeClass = "h-14" }) => (
  <div
    title={name}
    className="flex items-center justify-center h-36 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group"
  >
    <img
      src={imageUrl}
      alt={name}
      className={`${sizeClass} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105`}
    />
  </div>
);

const HomePage: React.FC = () => {
  const partners = [
    { name: 'Amazon France', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/amazon-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-24' },
    { name: 'Cdiscount', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/logo-cdiscount-marketplace-1-300x300-c-default.webp', sizeClass: 'h-28' },
    { name: 'ManoMano France', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/manomano-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-28' },
    { name: 'Leroy Merlin France', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/leroymerlin-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-16' },
    { name: 'Rue du Commerce', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/design-sans-titre-3-1-300x300-c-default.webp', sizeClass: 'h-24' },
    { name: 'Carrefour', imageUrl: 'https://static.cdnlogo.com/logos/c/70/carrefour.svg', sizeClass: 'h-28' },
    { name: 'Conforama', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/conforama-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-24' },
    { name: 'But', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2023/02/solution-logistique-but-miniature-150x150-c-default.webp', sizeClass: 'h-16' },
    { name: 'Rakuten', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/rakuten-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-24' },
    { name: 'Darty', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/darty-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-16' },
    { name: 'Castorama', imageUrl: 'https://www.castorama.fr/spa/images/d3b19.svg', sizeClass: 'h-6' },
    { name: 'Pixmania', imageUrl: 'https://www.shippingbo.com/content/uploads/timber-images/2022/03/pixmania-shippingbo-miniature-150x150-c-default.webp', sizeClass: 'h-28' },
  ];

  const scrollToPartners = () => {
    const element = document.getElementById('partners');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x9be2fe,
        cloudColor: 0xddebf7,
        cloudShadowColor: 0x3a5f7d,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunlightColor: 0xff9933
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section with Bevel Background */}
      <div className="relative w-full pb-32 lg:pb-48">
        {/* Vanta.js Background */}
        <div
          ref={vantaRef}
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)', WebkitClipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)' }}
        >
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text with Mix Blend Mode */}
            <div className="text-center lg:text-left space-y-8">
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mix-blend-difference text-white leading-[1.1]">
                Bienvenue sur le Support Client
              </h1>
              <p className="text-xl mix-blend-difference text-white max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Vous avez effectué une commande chez l'un de nos partenaires ? Notre équipe est à votre disposition pour répondre à toutes vos questions et assurer le suivi de vos produits.
              </p>

              <div className="flex flex-col items-center lg:items-start gap-6 pt-2">


                <button
                  onClick={scrollToPartners}
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-gray-800 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 uppercase tracking-wide"
                >
                  RETROUVEZ-NOUS DANS LES MESSAGERIES DE NOS DISTRIBUTEURS
                  <svg className="w-4 h-4 ml-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
            </div>

            {/* Right Column: Card */}
            <div className="w-full flex justify-center lg:justify-end">
              <SupportRequestCard />
            </div>

          </div>
        </div>
      </div>

      {/* Partners Section - Placed below hero in the white area */}
      <div id="partners" className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 scroll-mt-32">
        <div className="text-center mb-10">
          <p className="text-gray-500 font-semibold uppercase tracking-wider text-sm">
            NOS PRODUITS SONT EN VENTE CHEZ LES MEILLEURES PLACES DE MARCHÉ
            <svg className="w-6 h-6 inline-block ml-2 text-red-500 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ display: 'none' }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <PartnerLogo key={partner.name} name={partner.name} imageUrl={partner.imageUrl} sizeClass={partner.sizeClass} />
          ))}
        </div>
      </div>

      {/* Values Section (Gray Background) */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Engagement</h2>
            <p className="mt-4 text-lg text-gray-600">
              Nous comprenons qu'un service après-vente fiable est aussi important que la qualité du produit.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <CommitmentCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Réactivité"
            >
              Nous nous engageons à vous fournir une première réponse sous 24 à 48 heures ouvrées, car nous savons que votre temps est précieux.
            </CommitmentCard>
            <CommitmentCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>}
              title="Expertise"
            >
              Notre équipe connaît parfaitement nos produits. Vous échangerez avec des spécialistes capables de comprendre votre besoin et de vous guider.
            </CommitmentCard>
            <CommitmentCard
              icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>}
              title="Solution"
            >
              Notre objectif n'est pas de fermer des tickets, mais de résoudre des problèmes. Nous irons au bout de votre demande pour vous apporter une solution concrète.
            </CommitmentCard>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
