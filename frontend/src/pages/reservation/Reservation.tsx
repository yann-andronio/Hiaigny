import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reservation: React.FC = () => {
    // État pour gérer l'étape actuelle
    const [step, setStep] = useState(1);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    // Liste des médecins disponibles
    const doctors = [
        { id: 1, name: "Dr. Dupont" },
        { id: 2, name: "Dr. Martin" },
        { id: 3, name: "Dr. Bernard" },
    ];

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            doctor: "",
            time: "",
            notes: "",
        },
        onSubmit: (values) => {
            const data = { ...values, date: selectedDate };
            axios.post("URL de martinoh", data)
                .then((res) => {
                    console.log("Réservation réussie :", res.data);
                    alert("Rendez-vous réservé avec succès !");
                    formik.resetForm();
                    setSelectedDate(null);
                    setStep(1); // Réinitialiser l'étape
                })
                .catch((error) => {
                    console.error("Erreur lors de la réservation :", error);
                    alert("Une erreur s'est produite. Veuillez réessayer.");
                });
        },
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="bg-[#f5f5f5] h-screen pt-16 flex items-center justify-center">
            <div className="bg-white border-4 rounded-lg shadow relative m-10 max-w-lg w-full">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">Réservation de Rendez-vous</h3>
                </div>
                <div className="p-6 space-y-6">
                    <form onSubmit={formik.handleSubmit}>
                        {step === 1 && (
                         <div className="p-6 space-y-6">
                         <h4 className="text-lg font-semibold">Étape 1: Informations Personnelles</h4>
                         <form>
                             <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Nom complet:</label>
                             <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 onChange={formik.handleChange}
                                 value={formik.values.name}
                                 required
                                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
                             />
                             <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Adresse e-mail:</label>
                             <input
                                 type="email"
                                 id="email"
                                 name="email"
                                 onChange={formik.handleChange}
                                 value={formik.values.email}
                                 required
                                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
                             />
                             <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2">Numéro de téléphone:</label>
                             <input
                                 type="tel"
                                 id="phone"
                                 name="phone"
                                 onChange={formik.handleChange}
                                 value={formik.values.phone}
                                 required
                                 className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                             />
                         </form>
                     </div>
                        )}
                        {step === 2 && (
                            <div>
                                <label htmlFor="doctor" className="text-sm font-medium text-gray-900 block mb-2">Choisissez un médecin:</label>
                                <select
                                    id="doctor"
                                    name="doctor"
                                    onChange={formik.handleChange}
                                    value={formik.values.doctor}
                                    required
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
                                >
                                    <option value="">Sélectionnez un médecin</option>
                                    {doctors.map((doctor) => (
                                        <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
                                    ))}
                                </select>
                                <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2">Date du rendez-vous:</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                    dateFormat="dd/MM/yyyy"
                                    required
                                />
                            </div>
                        )}
                        {step === 3 && (
                            <div>
                                <label htmlFor="time" className="text-sm font-medium text-gray-900 block mb-2">Heure du rendez-vous:</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    onChange={formik.handleChange}
                                    value={formik.values.time}
                                    required
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 mb-4"
                                />
                                <label htmlFor="notes" className="text-sm font-medium text-gray-900 block mb-2">Notes supplémentaires:</label>
                                <textarea
                                    id="notes"
                                    name="notes"
                                    onChange={formik.handleChange}
                                    value={formik.values.notes}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                                    rows={3}
                                />
                            </div>
                        )}
                    </form>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b flex justify-between">
                    {step > 1 && (
                        <button className="text-gray-600 hover:text-gray-900" type="button" onClick={prevStep}>
                            Précédent
                        </button>
                    )}
                    {step < 3 ? (
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5" type="button" onClick={nextStep}>
                            Suivant
                        </button>
                    ) : (
                        <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5" type="submit" onClick={formik.handleSubmit}>
                            Réserver le Rendez-vous
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Reservation;
