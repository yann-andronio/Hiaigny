import { Fragment } from "react/jsx-runtime";
import s from "./questiontest.module.css";
import { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { HomeIcon, HeartIcon, UserGroupIcon, } from "@heroicons/react/24/outline"; // Importation des icônes
import { FaStethoscope, FaBookMedical } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 



const Questiontest: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isLastStep, setIsLastStep] = useState(false);
    const [isFirstStep, setIsFirstStep] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null); // État pour la sélection de l'option

    const handleNext = () => {
        if (!isLastStep) {
            setActiveStep((cur) => cur + 1);
            setSelectedOption(null); // Réinitialiser la sélection pour chaque étape
        }
    };

    const handlePrev = () => {
        if (!isFirstStep) {
            setActiveStep((cur) => cur - 1);
            setSelectedOption(null); // Réinitialiser la sélection pour chaque étape
        }
    };

    // Texte et options pour chaque étape
    const Questions = [
        "Avez-vous des douleurs à la tête ?",
        "Ressentez-vous une douleur ou une irritation dans la gorge ?",
        "Avez-vous de la fièvre ou des frissons ?",
        "Avez-vous des douleurs musculaires ou des courbatures ?",
        "Avez-vous des nausées ou des vomissements ?",

    ];

    const reponse = [
        ["Oui, j'ai mal à la tête", "Non, je n'ai pas de douleur", "Parfois, j'ai des maux de tête"],
        ["Oui, j'ai mal à la gorge", "Non, ma gorge va bien", "Parfois, j'ai une irritation"],
        ["Oui, j'ai de la fièvre", "Non, je n'ai pas de fièvre", "Parfois, j'ai des frissons"],
        ["Oui, j'ai des douleurs musculaires", "Non, je n'ai pas de douleurs", "Parfois, j'ai des courbatures"],
        ["Oui, j'ai des nausées", "Non, je n'ai pas de nausées", "Parfois, je me sens mal"],

    ];

    // Configuration des étapes avec des icônes de santé
    const steps = [
        { icon: <HomeIcon className={`${s.icons}`} />, completedIcon: <FaCheck className={`${s.iconscheck}`} /> },
        { icon: <HeartIcon className={`${s.icons}`} />, completedIcon: <FaCheck className={`${s.iconscheck}`} /> },
        { icon: <UserGroupIcon className={`${s.icons}`} />, completedIcon: <FaCheck className={`${s.iconscheck}`} /> },
        { icon: <FaBookMedical className={`${s.icons}`} />, completedIcon: <FaCheck className={`${s.iconscheck}`} /> },
        { icon: <FaStethoscope className={`${s.icons}`} />, completedIcon: <FaCheck className={`${s.iconscheck}`} /> },
    ];

    return (
        <Fragment>
            <div className="w-full py-4 px-8  justify-center flex flex-col">
                <div className={`${s.stepicon}`}>
                    <Stepper {...(undefined as any)} activeStep={activeStep} isLastStep={(value) => setIsLastStep(value)} isFirstStep={(value) => setIsFirstStep(value)}>
                        {steps.map((step, index) => (
                            <Step key={index} {...(undefined as any)} onClick={() => setActiveStep(index)} className="bg-green-500">
                                {activeStep > index ? step.completedIcon : step.icon}
                            </Step>
                        ))}
                    </Stepper>
                </div>

                {/* Affichage du texte selon l'étape active */}
                <div className="mt-8">
                    <h2 className="text-lg font-semibold">{Questions[activeStep]}</h2>
                </div>

                {/* Affichage des options (checkboxes) */}
                <div className="mt-4">
                    {reponse[activeStep].map((option, index) => (
                        <div key={index} className="flex items-center mb-4 cursor-pointer">
                            <input
                                type="radio"
                                id={`option-${activeStep}-${index}`}
                                name={`step-${activeStep}`}
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => setSelectedOption(option)}
                                className="hidden peer"
                            />
                            <label
                                htmlFor={`option-${activeStep}-${index}`}
                                className="flex items-center justify-start w-full p-4 border border-gray-300 rounded-lg transition-colors duration-300 ease-in-out peer-checked:bg-[#22C55E] peer-checked:text-white peer-checked:border-[#1e7a31] hover:bg-[#f0f0f0]"
                            >
                                <span className="h-5 w-5 rounded-full border border-gray-300 bg-white flex items-center justify-center mr-3 peer-checked:bg-white peer-checked:border-[#22C55E]">
                                    <span className={`h-3 w-3 rounded-full bg-[#22C55E] ${selectedOption === option ? 'block' : 'hidden'}`}></span>
                                </span>
                                {option}
                            </label>
                        </div>
                    ))}
                </div>


<div className="mt-16 flex justify-between">
    {/* Bouton Précédent */}
    <Button
        {...(undefined as any)}
        className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center ${isFirstStep ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handlePrev}
        disabled={isFirstStep}
    >
        {/* Icône de flèche vers la gauche */}
        <FaArrowLeft className="mr-2" /> {/* Espace entre l'icône et le texte */}
        Précédent
    </Button>

    {/* Bouton Suivant */}
    <Button
        {...(undefined as any)}
        className={`bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 transition-all duration-300 ease-in-out shadow-md flex items-center justify-center ${isLastStep || !selectedOption ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleNext}
        disabled={isLastStep || !selectedOption}
    >
        Suivant
        {/* Icône de flèche vers la droite */}
        <FaArrowRight className="ml-2" /> {/* Espace entre le texte et l'icône */}
    </Button>
</div>

            </div>
        </Fragment>
    );
}

export default Questiontest;
