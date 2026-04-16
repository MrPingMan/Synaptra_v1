"use client";

import { useState } from "react";
import ServiceHero from "../../components/Services/ServiceHero";
import ServicesCta from "../../components/Services/ServicesCta";
import EnquiryPopup from "../../components/Home/EnquiryPopup";

export default function ServicesPage() {

    const [openPopup, setOpenPopup] = useState(false);

    return (
        <>
            {/* HERO */}
            <ServiceHero onOpenEnquiry={() => setOpenPopup(true)} />

            {/* CTA */}
            <ServicesCta onOpenEnquiry={() => setOpenPopup(true)} />

            {/* POPUP */}
            <EnquiryPopup
                isOpen={openPopup}
                onClose={() => setOpenPopup(false)}
            />
        </>
    );
}