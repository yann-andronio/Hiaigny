import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import s from "./teste.module.css"; // Importer les styles du module CSS
import Questiontest from "../../components/Questiontest/Questiontest";
import { useNavigate } from "react-router-dom";

const Testes: React.FC = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    };

    return (
        <Fragment>
            <div className="bg-[#f5f5f5] relative h-screen flex flex-col items-center justify-center p-8 overflow-hidden">

                {/* Décorations côté gauche */}
                <div className={`${s.pillule1}`}>
                    <img src="./assets/image/medicaments/15.png" alt="Médicament 1" />
                </div>
                <div className={`${s.pillule2} hidden lg:block `}>
                    <img src="./assets/image/medicaments/7.png" alt="Médicament 2" />
                </div>

                <div className={`${s.pillule3} hidden lg:block `}>
                    <img src="./assets/image/medicaments/2.png" alt="Médicament 3" />
                </div>
                <div className={`${s.pillule4} hidden lg:block `}>
                    <img src="./assets/image/medicaments/5.png" alt="Médicament 4" />
                </div>

                {/* Décorations côté droit */}

                <div className={`${s.pillule5}`}>
                    <img src="./assets/image/medicaments/5.png" alt="Médicament 4" />
                </div>
                <div className={`${s.pillule6} hidden lg:block `}>
                    <img src="./assets/image/medicaments/12.png" alt="Médicament 4" />
                </div>
                <div className={`${s.pillule7} hidden lg:block `}>
                    <img src="./assets/image/medicaments/6.png" alt="Médicament 4" />
                </div>
                <div className={`${s.pillule8} hidden lg:block `}>
                    <img src="./assets/image/medicaments/13.png" alt="Médicament 4" />
                </div>

                {/* Nouveau titre aligné au thème */}
                <div className="text-center mb-8">
                    <h1
                        className="text-4xl lg:text-4xl flex-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#34D399] to-[#22C55E] mb-4 drop-shadow-lg"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Un Soin pour Chacun, Une Santé pour Tous
                    </h1>

                    <p
                        className="text-lg lg:text-xl text-gray-600 mb-2 hidden lg:block"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Répondez à quelques questions pour un diagnostic rapide et adapté à vos besoins, où que vous soyez.
                    </p>
                    <p
                        className="text-sm lg:text-base text-gray-700 hidden lg:block"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Prenez soin de vous en consultant un professionnel si nécessaire.
                    </p>

                </div>

                {/* Bouton de retour à l'accueil */}
                <button
                    onClick={handleHomeClick}
                    className="z-50 absolute top-2 left-2 flex items-center justify-center bg-[#ffbb33] text-white py-3 px-6 rounded-full hover:bg-[#ff8c00] focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 shadow-md"
                >
                    <FaHome className="mr-2" />
                    Accueil
                </button>


                {/* Composant de questions */}
                <div className="bg-white z-50 shadow-lg rounded-lg p-8 w-full max-w-2xl">
                    <Questiontest />
                </div>

                {/* Décorations blob */}
                <img className={`${s.deco} z-0`} src="./assets/image/deco/15.png" alt="15" width={250} />
                <img className={`${s.deco2} z-0`} src="./assets/image/deco/14.png" width={275} alt="14" />
                <img className={`${s.deco3} z-0 `} src="./assets/image/deco/10.png" width={225} alt="" />
                <img className={`${s.deco4} z-0 `} src="./assets/image/deco/11.png" width={500} alt="11" />
            </div>
        </Fragment>
    );
};

export default Testes;
