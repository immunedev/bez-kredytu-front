import React from "react";
import { FaGavel, FaUsers, FaMoneyCheckAlt } from "react-icons/fa";

type Stat = {
    label: string;
    value: number | string;
    icon: React.ReactNode;
};

const stats: Stat[] = [
    {
        label: "Ilość wygranych spraw",
        value: 1370,
        icon: <FaGavel size={32} color="#312e81" />,
    },
    {
        label: "Zadowoleni klienci",
        value: 512,
        icon: <FaUsers size={32} color="#16a34a" />,
    },
    {
        label: "Odzyskane środki (PLN)",
        value: "102 200 000",
        icon: <FaMoneyCheckAlt size={32} color="#f59e42" />,
    },
];

const FlexStatsSection: React.FC = () => (
    <section className="py-8 px-4 bg-gray-50 mt-[64px]">
        <h2 className="text-center text-3xl font-medium text-black mb-8 tracking-tight">
            Co już osiągnęliśmy
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
            {stats.map((stat) => (
                <div
                    key={stat.label}
                    className="bg-white rounded-xl shadow-md min-w-[220px] max-w-[320px] flex-1 flex flex-col items-center p-6 transition-shadow"
                >
                    <div className="mb-4">{stat.icon}</div>
                    <div className="text-3xl font-semibold text-slate-800 mb-2">
                        {stat.value}
                    </div>
                    <div className="text-base text-slate-500 text-center">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default FlexStatsSection;
