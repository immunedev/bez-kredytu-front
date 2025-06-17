import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";

interface AboutUsLayoutProps {
    children: ReactNode;
}

const AboutUsLayout = ({ children }: AboutUsLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default AboutUsLayout;