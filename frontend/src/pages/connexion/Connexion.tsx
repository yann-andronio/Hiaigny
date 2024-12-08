import { Fragment, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import formlottie from "../../lotties/1.json";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import s from "./connexion.module.css";
import { MdErrorOutline } from 'react-icons/md'
import { motion } from 'framer-motion';
import ClipLoader from "react-spinners/ClipLoader";

const Connexion: React.FC = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: 'patient',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Email invalide")
                .required("L'email est requis"),
            password: Yup.string()
                .min(6, "Le mot de passe doit comporter au moins 6 caractères")
                .required("Le mot de passe est requis"),
        }),
        onSubmit: (values) => {
            setIsLoading(true);
            axios.post('http://localhost:5000/api/login', values)
                .then((res) => {
                    setIsLoading(false);
                    if (res.data) {
                        console.log("Connexion réussie : ", res.data);
                        navigate('/');
                    } else {
                        setErrorMessage('Veuillez vérifier vos informations');
                    }
                })
                .catch((error) => {
                    console.log("l erruer est : ", error)
                    setErrorMessage('Veuillez vérifier vos informations');
                });
        },
    });

    return (
        <Fragment>
            <div className={`${s.screen} overflow-hidden`}>
                
                <div className={`${s.sary} z-50 hidden lg:block md:w-1/2 lottie-background`}>
                    <div className={`${s.lotti}`}>
                        <Lottie animationData={formlottie} />
                    </div>
                    <div className={`${s.text_parents} p-6 rounded-lg`}>
                        <h1 className={`${s.logo} text-4xl text-white font-bold text-center mb-4`}>
                            Votre santé, notre priorité
                        </h1>
                        <div className={`${s.text} text-white text-lg text-center mb-6`}>
                            <p>Connectez-vous pour accéder à une plateforme innovante qui facilite vos soins de santé.</p>
                            <p>Gérez vos ordonnances, obtenez des recommandations personnalisées et connectez-vous à votre médecin en toute simplicité.</p>
                            <p>Votre santé mérite le meilleur accès. Inscrivez-vous dès maintenant pour explorer toutes nos fonctionnalités.</p>
                        </div>
                    </div>
                </div>

                <div className={`${s.droite} w-full  lg:w-1/2 flex flex-col justify-center items-center relative`}>
                    <h2 className={`${s.connexion} text-4xl font-bold mb-6 `}>Connexion</h2>

                    <form className={`${s.forme}  rounded-lg p-8 mb-4 w-full max-w-lg`} onSubmit={formik.handleSubmit}>
                        <div className="logo text-center mb-4">
                            <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
                        </div>

                        {errorMessage && (
                            <motion.div
                                className="flex items-center text-red-500 text-sm mb-4 bg-red-100 p-3 rounded-md"
                                initial={{ opacity: 0, y: 20 }} // Départ avec opacité 0 et en dessous
                                animate={{ opacity: 1, y: 0 }}  // Apparition avec opacité 1 et position normale
                                exit={{ opacity: 0, y: -20 }}   // Disparition vers le haut
                                transition={{ duration: 0.5 }}  // Durée de l'animation
                            >
                                <MdErrorOutline className="w-5 h-5 mr-2" />
                                {errorMessage}
                            </motion.div>
                        )}

                        <div className="mb-6 relative">
                            <label htmlFor="email" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight `}
                                placeholder="exemple@domaine.com"
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <HiOutlineMail className="absolute right-3 top-10 text-gray-500 w-6 h-6" />
                            {formik.touched.email && formik.errors.email ? (
                                <div className={`text-xs italic text-red-500`}>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="mb-6 relative">
                            <label htmlFor="password" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className={`${s.motdepasse} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight `}
                                required
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            <HiOutlineLockClosed className="absolute right-3 top-10 text-gray-500 w-6 h-6" />
                            {formik.touched.password && formik.errors.password ? (
                                <div className={`text-xs italic text-red-500`}>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button
                            type="submit"
                            className={`${s.inscrire} bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full `}
                        >
                            Se connecter
                        </button>
                    </form>

                    <img className={`${s.deco}`} src="./assets/image/deco/2.png" alt="" width={200} />
                    <img className={`${s.deco2}`} src="./assets/image/deco/6.png" width={225} alt="" />
                    <img className={`${s.deco3} hidden lg:hidden md:block`} src="./assets/image/deco/4.png" width={225} alt="" />
                    <img className={`${s.deco4} hidden lg:hidden md:block`} src="./assets/image/deco/4.png" width={225} alt="" />
                </div>
            </div>
        </Fragment>
    );
};

export default Connexion;
