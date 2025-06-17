'use client'

import React, { useState } from "react";

const topics = [
    "Kredyt frankowy",
    "Kredyt WIBOR",
    "Wsparcie prawne",
    "Odzyskiwanie środków",
    "Porada prawna",
    "Inny temat"
];

const ContactForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [topic, setTopic] = useState(topics[0]);
    const [info, setInfo] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, phone, topic, info }),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            setSubmitted(true);
            // Optionally clear the form
            setEmail("");
            setPhone("");
            setTopic(topics[0]);
            setInfo("");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="px-6 py-10 max-w-[80%] mx-auto bg-gray-50 mt-[64px] rounded-3xl">
            <div className="text-center flex flex-col items-center justify-center mb-8">
                <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight">
                    Ty skontaktuj się z nami,
                </h1>
                <span className="text-lg text-red-700 mt-2 block">
                    a my zaproponujemy termin spotkania
                </span>
                <hr className="my-6 border-t-2 border-gray-200 w-80" />
            </div>
            <form
                className="flex flex-col gap-6 max-w-[80%] mx-auto"
                onSubmit={handleSubmit}
            >
                <label className="flex flex-col font-semibold text-indigo-800">
                    Email
                    <input
                        type="email"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Twój email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Numer telefonu
                    <input
                        type="tel"
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        placeholder="Twój numer telefonu"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        pattern="^[0-9+\s()-]{7,}$"
                    />
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Temat
                    <select
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition"
                        value={topic}
                        onChange={e => setTopic(e.target.value)}
                    >
                        {topics.map((t, idx) => (
                            <option key={idx} value={t}>{t}</option>
                        ))}
                    </select>
                </label>
                <label className="flex flex-col font-semibold text-indigo-800">
                    Wiadomość
                    <textarea
                        required
                        className="mt-2 p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none transition min-h-[100px] resize-y"
                        placeholder="Opisz swój temat lub pytanie"
                        value={info}
                        onChange={e => setInfo(e.target.value)}
                    />
                </label>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-indigo-900 hover:bg-indigo-800 text-white font-bold py-3 px-8 rounded-lg transition mt-2 shadow disabled:bg-indigo-400"
                >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                </button>
                {submitted && (
                    <div className="text-indigo-900 text-center font-semibold mt-2">
                        Dziękujemy za kontakt! Odpowiemy wkrótce.
                    </div>
                )}
                {error && (
                    <div className="text-red-900 font-semibold mt-2">
                        Wystąpił błąd: {error}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;