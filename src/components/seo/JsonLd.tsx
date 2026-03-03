import { config } from "@/data/config";

export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": config.companyName,
        "description": "Premium engineering services in Electrical, Plumbing, HVAC, and more.",
        "url": "https://www.gnom.com", // Placeholder
        "telephone": config.whatsappNumber,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kodakara", // Based on image clients
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
