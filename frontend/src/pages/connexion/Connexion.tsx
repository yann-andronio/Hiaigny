import { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import formlottie from "../../lotties/1.json";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import s from "./connexion.module.css";

const Connexion: React.FC = () => {

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
            console.log("Formulaire soumis avec les valeurs : ", values);
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

                        <div className="flex items-center justify-between pt-4 mb-4">
                            <h3 className="text-gray-700 text-lg">Vous n'avez pas de compte ?</h3>
                            <Link className={`text-blue-600 font-semibold hover:text-green-600 transition-colors duration-300`} to="/inscription">
                                Créer un compte
                            </Link>

                        </div>

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

                        {/* <div className="mb-4">
                            <label className="inline-flex items-center text-gray-700">
                                <input
                                    type="radio"
                                    name="role"
                                    value="patient"
                                    checked={formik.values.role === 'patient'}
                                    onChange={formik.handleChange}
                                    className={`form-radio text-indigo-600 h-5 w-5 ${s.formradio}`}
                                />
                                <span className="ml-2 text-gray-700">Patient</span>
                            </label>
                            <label className="inline-flex items-center text-gray-700 ml-4">
                                <input
                                    type="radio"
                                    name="role"
                                    value="doctor"
                                    checked={formik.values.role === 'doctor'}
                                    onChange={formik.handleChange}
                                    className={`form-radio text-indigo-600 h-5 w-5 ${s.formradio}`}
                                />
                                <span className="ml-2 text-gray-700">Docteur</span>
                            </label>
                        </div> */}

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex-1 border-b border-gray-300 h-px mr-2" />
                            <span className="text-gray-700">ou</span>
                            <div className="flex-1 border-b border-gray-300 h-px ml-2" />
                        </div>

                        <div className="flex justify-between mb-4 text-center items-center">
                            <a href="#" className={`flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`}>
                                <FcGoogle className="w-6 h-6 mr-2" />
                                Se connecter avec Google
                            </a>
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
