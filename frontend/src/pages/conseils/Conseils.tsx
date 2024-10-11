import React, { Fragment, useState, useEffect } from 'react';
import { FaHeartbeat, FaAppleAlt, FaRunning, FaBed, FaStethoscope, FaSmile, FaRegEye , FaFileMedical , FaRegSmileBeam , FaBriefcase } from 'react-icons/fa';
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
        suggestion: "Essayez nos recettes saines et faciles pour une alimentation équilibrée. Cliquez ici pour en savoir plus.",
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
    {
        titre: 'Évitez le Tabac',
        icone: <FaRegEye className="text-4xl text-[#FF6347]" />, // Remplacez par une autre icône
        description: "Cesser de fumer améliore considérablement votre santé et réduit le risque de maladies graves.",
        categorie: 'Prévention',
        suggestion: "Découvrez nos ressources sur l'arrêt du tabac et commencez votre parcours vers une vie sans fumée.",
    },
    {
        titre: 'Faites des Examens de Santé',
        icone: <FaFileMedical className="text-4xl text-[#1E90FF]" />, // Remplacez par une autre icône
        description: "Des contrôles réguliers permettent de détecter tôt les maladies et d'assurer un suivi médical approprié.",
        categorie: 'Prévention',
        suggestion: "Planifiez votre bilan de santé annuel dès aujourd'hui pour rester en forme !",
    },
    {
        titre: 'Adoptez une Routine de Soins de la Peau',
        icone: <FaRegSmileBeam className="text-4xl text-[#FFD700]" />, // Remplacez par une autre icône
        description: "Une routine de soins adaptée à votre type de peau protège contre les agressions extérieures.",
        categorie: 'Beauté',
        suggestion: "Consultez notre guide de soins de la peau pour trouver les meilleurs produits pour vous.",
    },
    {
        titre: 'Équilibrez votre Vie Professionnelle et Personnelle',
        icone: <FaBriefcase className="text-4xl text-[#6A5ACD]" />, // Remplacez par une autre icône
        description: "Un bon équilibre entre vie professionnelle et personnelle est essentiel pour votre bien-être.",
        categorie: 'Bien-être',
        suggestion: "Lisez nos conseils pour mieux gérer votre temps et réduire le stress au travail.",
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

                    <p className="text-lg text-white max-w-2xl mx-auto mb-16 bg-opacity-70 bg-[#4A5568] p-4 rounded-lg shadow-md">
                        Découvrez nos conseils pratiques pour améliorer votre santé et votre bien-être.
                        🌟 Apprenez à prendre soin de vous et à vivre mieux !
                    </p>
                    {/* <p className="text-md text-[#4A5568] max-w-2xl mx-auto mb-4 italic">
                        Chaque petit geste compte. Voici comment vous pouvez faire la différence.
                    </p> */}

                    {conseilsSanteData.map((items, index) => (
                        <div key={index} className={`bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 mb-8 border-l-4 ${index % 2 === 0 ? 'border-[#22C55E]' : 'border-[#4299E1]'}`} data-aos="fade-up" data-aos-duration="950" >
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
