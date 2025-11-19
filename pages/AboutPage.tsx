import React from 'react';

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; children: string }> = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 border border-gray-200 text-purple-600">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  </div>
);

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Envoyez votre demande
            </h1>
            <p className="mt-4 text-lg text-gray-600">
            Pour garantir un traitement rapide et efficace, veuillez remplir le formulaire ci-dessous avec le plus de détails possible. Notre équipe vous répondra dans les plus brefs délais.
            </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 bg-white/50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Pour un traitement express</h2>
              <InfoItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>}
                title="Préparez votre numéro de commande"
              >
                Indispensable pour retrouver votre dossier, vous le trouverez sur l'email de confirmation de la marketplace.
              </InfoItem>
               <InfoItem 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="Joignez des photos si besoin"
              >
                Une image vaut mille mots, surtout pour un produit endommagé. Cela nous aide à trouver la meilleure solution, plus vite.
              </InfoItem>
            </div>
            <div className="mt-0 p-1 rounded-xl bg-gradient-to-br from-purple-500 to-[#0F5175]">
              <div className="p-8 rounded-lg bg-gray-50 text-left space-y-4">
                <div className="w-full h-8 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-2/3 h-8 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-full h-24 rounded bg-gray-200 animate-pulse"></div>
                <p className="pt-2 text-sm text-center text-gray-500">
                  Chargement de notre formulaire de contact sécurisé...
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;