import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react';

interface ContactLayoutProps {
    children: ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
    return (
        <div >
            <Navbar></Navbar>
            <main>{children}</main>
        </div>
    );
};

export default ContactLayout;