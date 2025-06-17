import React from "react";
import { FaGavel } from "react-icons/fa";

type Win = {
    id: number;
    title: string;
    description: string;
    amount: string;
    type?: "biggest" | "latest" | "random";
};

const wins: Win[] = [
    {
        id: 1,
        title: "Największa wygrana",
        description: "Sąd Okręgowy w Szczecinie(sygn. akt 12345/21)",
        amount: "820 000 zł",
        type: "biggest",
    },
    {
        id: 2,
        title: "Najnowsza wygrana",
        description: "Sąd Apelacyjny w Warszawie (sygn. akt 67890/22)",
        amount: "354 000 zł",
        type: "latest",
    },
    {
        id: 3,
        title: "Prawomocna wygrana klienta",
        description: "Sąd Okręgowy w Krakowie (sygn. akt 54321/20)",
        amount: "450 000 zł",
    },
    {
        id: 4,
        title: "Prawomocna wygrana klienta",
        description: "Sąd Rejonowy w Poznaniu (sygn. akt 98765/19)",
        amount: "120 000 zł",
    },
    {
        id: 5,
        title: "Prawomocna wygrana klienta ",
        description: "Sąd Okręgowy w Gdańsku (sygn. akt 11223/18)",
        amount: "180 000 zł",
    },
    {
        id: 6,
        title: "Prawomocna wygrana klienta ",
        description: "Sąd Apelacyjny w Wrocławiu (sygn. akt 44556/17)",
        amount: "600 000 zł",
    },
    {
        id: 7,
        title: "Prawomocna wygrana klienta ",
        description: "Sąd Okręgowy w Bydgoszczy (sygn. akt 77889/16)",
        amount: "300 000 zł",
    },
    {
        id: 8,
        title: "Prawomocna wygrana klienta ",
        description: "Sąd Rejonowy w Lublinie (sygn. akt 10101/15)",
        amount: "200 000 zł",
    },
];

const biggest = wins.find(w => w.type === "biggest")!;
const latest = wins.find(w => w.type === "latest")!;
const rest = wins.filter(w => !w.type).slice(0, 6);
// const cards = [biggest, latest, ...rest];

const FlexProveComponent: React.FC = () => (
    <div className="px-6 py-10 max-w-[80%] mx-auto bg-gray-50 mt-[64px]">
        <div className="text-left">
            <h1 className="text-5xl font-extrabold m-0 text-indigo-900 tracking-tight">Sprawdź sam</h1>
            <span className="text-lg text-red-700 mt-2 block">
                Przykładowe wygrane klientów
            </span>
            <hr className="my-6 border-t-2 border-gray-200 w-80" />
        </div>
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Always show biggest and latest */}
            {[biggest, latest].map(win => (
                <div
                    key={win.id}
                    className="bg-white rounded-xl shadow-md p-7 flex flex-col items-start min-h-[220px]"
                >
                    <FaGavel size={32} className="mb-3 text-indigo-900" />
                    <span className="font-bold text-lg mb-1.5">{win.title}</span>
                    <span className="text-gray-700 text-base mb-auto">{win.description}</span>
                    <span className="mt-4 font-semibold text-indigo-900">
                        Kwota: {win.amount}
                    </span>
                </div>
            ))}
            {/* Show only one from rest on mobile, all on sm+ */}
            {rest.map((win, idx) => (
                <div
                    key={win.id}
                    className={
                        "bg-white rounded-xl shadow-md p-7 flex flex-col items-start min-h-[220px]" +
                        (idx > 0
                            ? " hidden sm:flex"
                            : "")
                    }
                >
                    <FaGavel size={32} className="mb-3 text-indigo-900" />
                    <span className="font-bold text-lg mb-1.5">{win.title}</span>
                    <span className="text-gray-700 text-base mb-auto">{win.description}</span>
                    <span className="mt-4 font-semibold text-indigo-900">
                        Kwota: {win.amount}
                    </span>
                </div>
            ))}
        </div>
    </div>
);

export default FlexProveComponent;
