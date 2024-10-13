import React from 'react';
import Lottie from 'lottie-react';
import s from './headerconseil.module.css';
import formlottie from '../../lotties/9.json';

export default function Headerconseils() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between py-16 bg-[#f5f5f5] relative overflow-hidden px-6 md:px-12 ">

            {/* Blobs de décoration */}
            <img className={`${s.deco1} absolute hidden lg:block z-0 w-[250px] opacity-90`} src="./assets/image/deco/8.png" alt="Blob gauche" />
            <img className="absolute bottom-[-67px] right-[-106px] z-0 w-[350px] opacity-90" src="./assets/image/deco/8.png" alt="Blob droit" />

            {/* Section gauche */}
            <div className="flex-1 text-center md:text-left relative z-10" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#22C55E] mb-4">
                    Votre guide vers une <span className="text-[#ffbb33]">meilleure santé</span>
                </h1>
                <p className="text-md md:text-lg text-gray-700 mb-6 leading-relaxed">
                    Profitez de <span className="font-semibold text-[#22C55E]">conseils professionnels</span> pour prendre soin de vous. Trouvez des recommandations simples et adaptées à vos besoins pour vivre mieux.
                </p>
                <p className="text-sm text-gray-600 mb-8">
                    Explorez nos conseils de santé et faites le premier pas vers un mode de vie plus sain. 
                    <span className="block font-semibold text-[#22C55E] mt-2">Prenez soin de vous dès maintenant !</span>
                </p>
                <a href="#conseils" className="inline-block bg-[#22C55E] text-white text-lg px-8 py-3 rounded-full transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                    Découvrez nos conseils
                </a>
            </div>

            {/* Section droite avec lottie */}
            <div className="flex-1 flex justify-center mt-10 md:mt-0 relative z-10" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="1000">
                <div className="w-full max-w-lg mx-auto md:mx-0">
                    <Lottie animationData={formlottie} loop={true} className="" />
                </div>
            </div>
        </div>
    );
}
