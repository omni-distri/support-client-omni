import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-6 text-left text-gray-800 hover:bg-gray-100 px-2 rounded-md transition-colors duration-200"
          onClick={onClick}
          aria-expanded={isOpen}
        >
          <span className="text-lg font-medium">{question}</span>
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 ml-4">
             <svg
              className={`w-6 h-6 text-purple-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6"></path>
            </svg>
          </div>
        </button>
      </h2>
      <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="pb-6 px-2">
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: 'Où puis-je trouver mon numéro de commande ?',
      answer: 'Le numéro de commande est un identifiant unique essentiel pour le suivi de votre dossier. Vous le trouverez systématiquement dans l\'e-mail de confirmation envoyé par la marketplace (Leroy Merlin, Conforama, etc.) juste après la validation de votre achat. Il peut également être présent dans votre espace client sur le site du vendeur, dans la section "Mes commandes".',
    },
    {
      question: 'Comment puis-je suivre ma livraison ?',
      answer: 'Dès que votre colis est expédié par nos services, un e-mail de confirmation d\'expédition vous est envoyé par la marketplace. Cet e-mail contient un lien de suivi qui vous permet de suivre en temps réel l\'acheminement de votre commande. Pensez à vérifier vos courriers indésirables si vous ne le trouvez pas.',
    },
    {
      question: 'Que faire si mon produit est arrivé endommagé ?',
      answer: 'Nous sommes sincèrement navrés que votre produit ne soit pas arrivé en parfait état. La qualité est notre priorité absolue. Veuillez utiliser notre formulaire de contact pour nous le signaler au plus vite. Pour accélérer le traitement, joignez à votre demande votre numéro de commande ainsi que des photos claires montrant l\'article endommagé et l\'état du colis à sa réception. Une solution vous sera proposée dans les plus brefs délais.',
    },
    {
      question: 'Quels sont les délais de réponse du support client ?',
      answer: 'Chez Omni Distribution, nous nous engageons à vous fournir un support réactif et de qualité. Notre équipe dédiée traite chaque demande avec la plus grande attention et s\'engage à vous apporter une première réponse sous 24 à 48 heures ouvrées. Nous vous remercions de votre confiance.',
    },
    {
      question: 'Quelle est votre politique de retour ou de garantie ?',
      answer: 'Tous nos produits bénéficient de la garantie légale de conformité. La politique de retour (délai, conditions) est celle appliquée par la marketplace sur laquelle vous avez effectué votre achat. Nous vous invitons à consulter les conditions générales de vente de nos partenaires (Leroy Merlin, Conforama, etc.) ou à nous contacter pour toute question spécifique.',
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
            Foire Aux Questions
            </h1>
            <p className="mt-4 text-lg text-gray-600">
            Nous avons rassemblé ici les réponses aux questions les plus fréquemment posées.
            </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-8 backdrop-blur-sm">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-100 p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Vous ne trouvez pas votre réponse ?</h2>
            <p className="mt-2 text-gray-600">
            Notre équipe est là pour vous aider sur des cas plus spécifiques.
            </p>
            <Link 
              to="/contact" 
              className="mt-6 inline-block text-white bg-gradient-to-br from-purple-600 to-[#0F5175] hover:from-purple-700 hover:to-[#0F5175] focus:ring-4 focus:ring-purple-500/50 font-semibold rounded-lg px-6 py-3 transition-transform duration-200 hover:-translate-y-0.5 shadow-lg shadow-purple-500/20"
            >
              Contacter le support
            </Link>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;