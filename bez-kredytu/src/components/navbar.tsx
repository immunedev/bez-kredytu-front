'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-6 md:px-32 py-6 md:py-8 bg-white shadow-md relative">
            {/* Logo */}
            <div className="font-bold text-2xl text-[#2c3e50]">
                BezKredytu
                <span className="text-red-600">.com</span>
            </div>
            {/* Hamburger */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-[#2c3e50] mb-1 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-[#2c3e50] mb-1 transition-all ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-[#2c3e50] transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
            {/* Links */}
            <div className={`flex-col md:flex-row flex gap-8 text-lg absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-200 z-10
                ${open ? 'flex' : 'hidden'} md:flex`}>
                <Link href="/" className="no-underline text-[#2c3e50] px-6 py-4 md:p-0 block md:inline">Oferta</Link>
                <Link href="/aboutUs" className="no-underline text-[#2c3e50] px-6 py-4 md:p-0 block md:inline">O nas</Link>
                <Link href="/contact" className="no-underline text-[#2c3e50] px-6 py-4 md:p-0 block md:inline">Kontakt</Link>
            </div>
        </nav>
    );
};

export default Navbar;
