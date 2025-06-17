import React from "react";

const backgroundImageUrl =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const MainView: React.FC = () => {
    return (
        <div
            className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Gradient Blur Overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background:
                        "linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.0) 70%, rgba(255,255,255,0.0) 90%)",
                    backdropFilter: "blur(4px)",
                }}
            />
            {/* Content */}
            <div className="relative z-20 mx-auto w-full max-w-[80%] px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:py-16 text-left bg-white/50 rounded-xl shadow-lg backdrop-blur-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-red-700">
                    Bezpłatna analiza dla Frankowiczów i WIBORowców
                </h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#0d1333] leading-tight">
                    Pomagamy kredytobiorcom od lat!
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-bold mb-8 text-gray-800">
                    Nadal zmagasz się ze skutkami wadliwego kredytu frankowego, a
                    może masz spłacony taki kredyt? Skorzystaj z pomocy doświadczonego prawnika, który pomoże Ci przeanalizować Twoją sytuację.
                </p>
                <a
                    href="https://bmpk.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold text-white bg-indigo-900 rounded-lg no-underline shadow-md mb-3 transition-colors duration-200 hover:bg-indigo-800 text-center"
                >
                    Sprawdź ofertę kancalarii
                </a>
                <div className="text-xs text-black mt-2 leading-tight">
                    Materiał promocyjny – informowanie o wykonywaniu zawodu radcy prawnego, zgodnie z art. 31 Kodeksu Etyki Radcy Prawnego
                </div>
            </div>
        </div>
    );
};

export default MainView;
