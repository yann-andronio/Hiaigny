import React, { Fragment, useState } from 'react';
import { FaHeartbeat, FaAppleAlt, FaRunning, FaBed, FaStethoscope, FaSmile } from 'react-icons/fa'; // Importation d'icônes uniques
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import s from './conseils.module.css';
import Navbar from '../../components/navbar/Navbar';
import Headerconseils from '../../components/headerconseil/Headerconseils';
import Footers from '../../components/footers/Footers';

interface ConseilSante {
    titre: string;
    icone: JSX.Element;
    description: string;
    categorie: string;
    suggestion: string;
}

const conseilsSanteData: ConseilSante[] = [
    {
        titre: 'Restez Hydraté',
        icone: <FaHeartbeat className="text-4xl text-[#22C55E]" />,
        description: "Boire suffisamment d'eau est essentiel pour votre santé. Visez au moins 2 litres par jour.",
        categorie: 'Hydratation',
        suggestion: "Découvrez notre guide gratuit sur les bienfaits de l'hydratation. Téléchargez-le maintenant !",
    },
    {
        titre: 'Mangez Équilibré',
        icone: <FaAppleAlt className="text-4xl text-[#ffbb33]" />,
        description: "Une alimentation équilibrée riche en fruits et légumes renforce votre système immunitaire.",
        categorie: 'Nutrition',
        suggestion: "Essayez nos recettes saines et faciles pour une alimentation équilibrée. Cliquez ici pour en saopen plus.",
    },
    {
        titre: 'Faites de l’Exercice Régulièrement',
        icone: <FaRunning className="text-4xl text-[#4299E1]" />,
        description: "Pratiquez au moins 30 minutes d'activité physique chaque jour pour maintenir votre santé.",
        categorie: 'Activité physique',
        suggestion: "Avez-vous testé notre programme d'exercice à la maison ? Commencez gratuitement aujourd'hui.",
    },
    {
        titre: 'Dormez Suffisamment',
        icone: <FaBed className="text-4xl text-[#22C55E]" />,
        description: "Un bon sommeil est crucial pour votre bien-être mental et physique. Visez 7 à 8 heures par nuit.",
        categorie: 'Bien-être',
        suggestion: "Téléchargez notre application de méditation pour améliorer la qualité de votre sommeil.",
    },
    {
        titre: 'Consultez Régulièrement Votre Médecin',
        icone: <FaStethoscope className="text-4xl text-[#ffbb33]" />,
        description: "Des examens réguliers aident à détecter les problèmes de santé avant qu'ils ne deviennent graves.",
        categorie: 'Prévention',
        suggestion: "Planifiez votre prochain rendez-vous médical en ligne avec nos médecins certifiés.",
    },
    {
        titre: 'Gérez Votre Stress',
        icone: <FaSmile className="text-4xl text-[#4299E1]" />,
        description: "Pratiquez la méditation ou le yoga pour réduire le stress et améliorer votre bien-être général.",
        categorie: 'Bien-être',
        suggestion: "Inscrivez-vous à notre cours gratuit de yoga en ligne pour une meilleure gestion du stress.",
    },
];

const Conseils: React.FC = () => {
    const [open, setopen] = useState<number | null>(null);

    const activeopen = (index: number) => {
        setopen(open === index ? null : index);
        console.log(index);
    };

    return (
        <Fragment>
            <div className={`${s.navbar}`}>
                <Navbar />
            </div>
            <div className={`${s.navbar} pt-16`}>
                <Headerconseils />
            </div>
            <div className="py-16 px-8 bg-[#F5F5F5] lg:px-28 sm:px-24">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-[#22C55E] mb-12 font-poppins">Conseils de Santé</h2>
                    <p className="text-lg text-[#4A5568] max-w-2xl mx-auto mb-16">
                        Découvrez nos conseils pratiques pour améliorer votre santé et votre bien-être.
                    </p>

                    {conseilsSanteData.map((items, index) => (
                        <div key={index} className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 mb-8 border-l-4 ${index % 2 === 0 ? 'border-[#22C55E]' : 'border-[#4299E1]'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    {items.icone}
                                    <h3 className="text-xl font-semibold text-[#333333] ml-4">{items.titre}</h3>
                                </div>
                                <button onClick={() => activeopen(index)} className="text-xl text-[#4299E1] hover:underline focus:outline-none">
                                    {open === index ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                            </div>
                            <div className={`overflow-hidden transition-all duration-500 ${open === index ? 'max-h-screen' : 'max-h-0'}`}>
                                <div className="text-left text-[#4A5568] mt-2 p-2 bg-[#F9FAFB] rounded-lg">
                                    <h4 className="text-lg font-bold mb-2">Détail du Conseil :</h4>
                                    <p>{items.description}</p>
                                    <div className="mt-2 p-2 border border-dashed border-[#ffbb33] bg-[#fff9f0] rounded-lg">
                                        <h5 className="text-sm font-semibold text-[#ffbb33]">💡 Suggestion :</h5>
                                        <p>{items.suggestion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer">
                <Footers />
            </div>
        </Fragment>
    );
};

export default Conseils;
