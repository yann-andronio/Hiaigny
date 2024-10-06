import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from 'lottie-react';
import formlottie from "../../lotties/1.json";
import axios from 'axios';
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import s from "./inscription.module.css";
import { motion } from 'framer-motion';
import { FC } from "react";


interface FormValues {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    hospital?: string;
    specialty?: string;
    role: 'patient' | 'doctor';
}

interface FormErrors {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    hospital?: string;
    specialty?: string;
}

const Inscription: FC = () => {
    const [role, setRole] = useState<'patient' | 'doctor'>('patient');
    const [doctorhita, setdoctorhita] = useState<boolean>(false);
    const [inputs, setInputs] = useState<FormValues>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        hospital: '',
        specialty: '',
        role: "patient",
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedRole = event.target.value as 'patient' | 'doctor';
        setRole(selectedRole);
        if (selectedRole === 'doctor') {
            setdoctorhita(true);
        } else {
            setdoctorhita(false);
        }
        setInputs({ ...inputs, role: selectedRole });
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        const { email, password, firstName, lastName, address, hospital, specialty } = inputs;

        if (!firstName) newErrors.firstName = "Le prénom est requis";
        if (!lastName) newErrors.lastName = "Le nom est requis";
        if (!address) newErrors.address = "L'adresse est requise";
        if (!email) {
            newErrors.email = "L'email est requis";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email invalide";
        }
        if (!password) {
            newErrors.password = "Le mot de passe est requis";
        } else if (password.length < 6) {
            newErrors.password = "Le mot de passe doit comporter au moins 6 caractères";
        }

        if (role === 'doctor') {
            if (!hospital) newErrors.hospital = "L'hôpital est requis";
            if (!specialty) newErrors.specialty = "La spécialité est requise";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            try {

                const response = await axios.post('url nra martino', inputs);
                console.log("Formulaire soumis avec succès :", response.data);
            } catch (error) {
                console.error("Erreur lors de la soumission du formulaire :", error);
            }
        }
    };

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
                            <p>Inscrivez-vous pour découvrir une plateforme moderne dédiée à la gestion de votre santé.</p>
                            <p>Suivez vos prescriptions, recevez des conseils adaptés et communiquez facilement avec votre médecin.</p>
                            <p>Offrez-vous le meilleur en matière de soins. Rejoignez-nous dès aujourd'hui pour profiter de toutes nos fonctionnalités.</p>
                        </div>

                    </div>
                </div>

                <div className={`${s.droite} w-full lg:w-1/2 flex flex-col justify-center items-center relative`}>
                    <h2 className={`${s.connexion} mt-8 text-4xl font-bold`}>Inscription</h2>

                    <form className={`${s.forme} rounded-lg p-8 mb-4 w-full max-w-xl`} onSubmit={handleSubmit}>
                        <div className="logo text-center mb-4">
                            <h1 className="text-3xl font-bold text-gray-800">Logo</h1>
                        </div>

                        <div className="flex items-center justify-between pt-4 mb-4">
                            <h3 className="text-gray-700 text-lg">Vous avez déjà un compte ?</h3>
                            <Link className={`text-blue-600 font-semibold hover:text-green-600 transition-colors duration-300`} to="/">
                                Se connecter
                            </Link>
                        </div>

                        {/* Champs pour le nom et prénom */}
                        <div className="flex mb-6 space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="firstName" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight`}
                                    placeholder="Prénom"
                                    onChange={handleChange}
                                    value={inputs.firstName}
                                />
                                {errors.firstName && (
                                    <div className={`text-xs italic text-red-500`}>{errors.firstName}</div>
                                )}
                            </div>

                            <div className="w-1/2">
                                <label htmlFor="lastName" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight`}
                                    placeholder="Nom"
                                    onChange={handleChange}
                                    value={inputs.lastName}
                                />
                                {errors.lastName && (
                                    <div className={`text-xs italic text-red-500`}>{errors.lastName}</div>
                                )}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="address" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                Adresse
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight`}
                                placeholder="Adresse"
                                onChange={handleChange}
                                value={inputs.address}
                            />
                            {errors.address && (
                                <div className={`text-xs italic text-red-500`}>{errors.address}</div>
                            )}
                        </div>

                        {/* Champs supplémentaires pour les médecins */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={doctorhita ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden flex  space-x-4"
                        >
                            <div className="mb-6 w-1/2">
                                <label htmlFor="hospital" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Hôpital
                                </label>
                                <input
                                    type="text"
                                    name="hospital"
                                    id="hospital"
                                    className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight`}
                                    placeholder="Hôpital"
                                    onChange={handleChange}
                                    value={inputs.hospital}
                                />
                                {errors.hospital && (
                                    <div className={`text-xs italic text-red-500`}>{errors.hospital}</div>
                                )}
                            </div>

                            <div className="mb-6 w-1/2">
                                <label htmlFor="specialty" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Spécialité
                                </label>
                                <input
                                    type="text"
                                    name="specialty"
                                    id="specialty"
                                    className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 leading-tight`}
                                    placeholder="Spécialité"
                                    onChange={handleChange}
                                    value={inputs.specialty}
                                />
                                {errors.specialty && (
                                    <div className={`text-xs italic text-red-500`}>{errors.specialty}</div>
                                )}
                            </div>

                        </motion.div>

                        {/* fin champs supplementaire pour medecin */}

                        <div className="flex mb-6 space-x-4">

                            <div className="mb-6 w-1/2">
                                <label htmlFor="email" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Email
                                </label>
                                <div className={`relative`}>
                                    <HiOutlineMail className={`${s.icon} absolute inset-y-0 left-0 pl-3`} />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 pl-10 leading-tight`}
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={inputs.email}
                                    />
                                </div>
                                {errors.email && (
                                    <div className={`text-xs italic text-red-500`}>{errors.email}</div>
                                )}
                            </div>

                            <div className="mb-6 w-1/2">
                                <label htmlFor="password" className={`block text-sm font-bold mb-2 text-gray-700`}>
                                    Mot de passe
                                </label>
                                <div className={`relative`}>
                                    <HiOutlineLockClosed className={`${s.icon} absolute inset-y-0 left-0 pl-3`} />
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className={`${s.mail} shadow-md border rounded w-full py-3 px-4 text-gray-700 pl-10 leading-tight`}
                                        placeholder="Mot de passe"
                                        onChange={handleChange}
                                        value={inputs.password}
                                    />
                                </div>
                                {errors.password && (
                                    <div className={`text-xs italic text-red-500`}>{errors.password}</div>
                                )}
                            </div>
                        </div>

                        {/* Champs pour le choix du rôle */}
                        <div className="flex items-center mb-6">
                            <label className="inline-flex items-center mr-6">
                                <input
                                    type="radio"
                                    name="role"
                                    value="patient"
                                    checked={role === 'patient'}
                                    onChange={handleRoleChange}
                                    className={`${s.formradio}  form-radio h-4 w-4 text-blue-600`}
                                />
                                <span className="ml-2">Patient</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="role"
                                    value="doctor"
                                    checked={role === 'doctor'}
                                    onChange={handleRoleChange}
                                    className={`${s.formradio}  form-radio h-4 w-4 text-blue-600`}

                                />
                                <span className="ml-2">Médecin</span>
                            </label>
                        </div>


                        <button
                            type="submit"
                            className={`${s.inscrire} bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full `}
                        >
                            S'inscrire
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

export default Inscription;
