import React from 'react';
import Lottie from 'lottie-react';
import s from "./header.module.css";
import formlottie from "../../lotties/5.json";

export default function HeroSection() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-20 bg-[#f5f5f5] relative overflow-hidden rounded-lg px-4 md:px-10">

            {/* Blobs  */}
            <img className={`${s.deco1} absolute hidden lg:block  z-0 w-[300px] opacity-85`} src="./assets/image/deco/8.png" alt="Blob" />
            <img className="absolute bottom-[-80px] right-[-120px] z-0 w-[400px] opacity-85" src="./assets/image/deco/8.png" alt="Blob" />

            {/*  gauche */}
            <div className="flex-1 text-center md:text-left md:pr-8 relative z-10" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#22C55E] mb-4">
                    Bienvenue chez <span className="text-[#ffbb33]">Hiaigny</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    Votre partenaire de confiance pour des soins de santé de qualité. Que vous cherchiez des consultations médicales, des services de laboratoire ou des conseils professionnels, nous sommes là pour vous offrir une expérience fiable et centrée sur le patient. <br />
                    <span className="font-semibold text-[#22C55E]">Testez vos symptômes dès maintenant !</span>
                </p>
                <a href="#conseils" className="inline-block bg-[#22C55E] text-white text-lg px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                    Testez vos symptômes
                </a>
            </div>

            {/*  droite */}
            <div className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <div className="w-full max-w-lg mx-auto md:mx-0">
                    <Lottie animationData={formlottie} loop={true} />
                </div>
            </div>

        </div>
    );
}
