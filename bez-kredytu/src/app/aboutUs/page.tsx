import React from "react";
import { FaUsers } from "react-icons/fa";

const AboutUs: React.FC = () => (
    <div className="px-6 py-12 max-w-[80%] mx-auto bg-white mt-[64px] rounded-xl shadow-md">
        <div className="flex items-center mb-6">
            <FaUsers size={40} className="text-indigo-900 mr-4" />
            <h1 className="text-5xl font-extrabold text-indigo-900 tracking-tight m-0">
                O nas
            </h1>
        </div>
        <hr className="my-6 border-t-2 border-gray-200 w-80" />
        <div className="text-gray-800 text-lg leading-relaxed">
            <p className="mb-6">
                Jesteśmy zespołem doświadczonych specjalistów, którzy z pasją pomagają klientom w skutecznym rozwiązywaniu spraw związanych z kredytami. Naszą misją jest zapewnienie profesjonalnego wsparcia na każdym etapie postępowania, dbając o bezpieczeństwo i komfort naszych klientów.
            </p>
            <p className="mb-6">
                Dzięki wieloletniemu doświadczeniu oraz indywidualnemu podejściu, osiągamy realne sukcesy w walce o prawa naszych klientów. Stawiamy na transparentność, rzetelność oraz najwyższe standardy obsługi. Każda sprawa jest dla nas równie ważna, a satysfakcja klientów stanowi nasz największy priorytet.
            </p>
            <p>
                Jeśli szukasz zaufanego partnera, który skutecznie poprowadzi Twoją sprawę – jesteśmy do Twojej dyspozycji. Razem osiągniemy więcej!
            </p>
        </div>
    </div>
);

export default AboutUs;