import { ContactClient } from "@/components/contact/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Connect with GNOM experts for your next MEP project. Get precision engineering solutions and 24/7 technical support.",
};

export default function Page() {
    return <ContactClient />;
}
