import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata = {
  title: "The Safe Haven | Sovereign Living, Subterranean AI Sanctuary & Parametric Architecture",
  description: "A scientific masterpiece in Fasnia, Tenerife (19,000m²). Engineered with offline sovereign AI, PINNs-calculated parametric cave architecture, zero-EMF Faraday shielding, large-format 3D printed interiors, and absolute energy/water autonomy for sabbatical deep work.",
  keywords: [
    "Sovereign living Tenerife",
    "Private offline AI hardware",
    "Silicon Valley sabbatical sanctuary",
    "Large format 3D printed architecture",
    "Parametric furniture non-Euclidean geometry",
    "Physics Informed Neural Networks architecture",
    "PINNs passive cooling cave",
    "Faraday shielded zero EMF suites",
    "Natural canyon eco pool Tenerife",
    "Off-grid autonomous estate",
    "Bio-neural optimization",
    "Tech founder sabbatical retreat",
    "Private AI sanctuary access"
  ],
  alternates: {
    canonical: 'https://thesafehaven.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thesafehaven.ai/#organization",
        "name": "Modelos Inteligencia Artificial S.L.",
        "alternateName": "Modelos IA",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Tenerife",
          "addressCountry": "ES"
        },
        "description": "Spanish AI & Architectural Research Company specializing in PINNs models, industrial 3D printing, sovereign LLMs, and high-performance subterranean living."
      },
      {
        "@type": "ResearchEstablishment",
        "@id": "https://thesafehaven.ai/#establishment",
        "name": "The Safe Haven",
        "alternateName": "Sovereign AI & Subterranean Living Laboratory",
        "url": "https://thesafehaven.ai",
        "description": "An engineered 19,000m² sovereign sanctuary in Fasnia, Tenerife for global tech leaders, CEOs, and Silicon Valley visionaries on sabbatical. Features air-gapped offline sovereign AI trained on supercomputers, zero-EMF volcanic cave suites, PINNs-calculated parametric passive cooling architecture, industrial large-format 3D printed furniture, Starlink satellite connection, natural canyon eco-pool, and 100% energy, water, and food autonomy.",
        "parentOrganization": {
          "@id": "https://thesafehaven.ai/#organization"
        },
        "founder": {
          "@type": "Person",
          "name": "Lucia Malíčková",
          "jobTitle": "HPC Engineer, Designer & AI Architect",
          "description": "Creator and trainer of custom neural networks, PINNs models, and industrial 3D-printed non-Euclidean parametric architecture for high-performance living."
        },
        "location": {
          "@type": "Place",
          "name": "Tenerife Canyon & Pine Reserve",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tenerife",
            "addressRegion": "Canary Islands",
            "addressCountry": "ES"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "description": "19,000m² private estate protected by a deep natural canyon and protected pine forest. Wind-shielded microclimate with optimal relative humidity, 20 minutes from TFS Airport with direct flight connections to USA, Canada, and Europe."
          }
        },
        "audience": {
          "@type": "Audience",
          "audienceType": "Silicon Valley Founders, Tech CEOs, Crypto Pioneers, High-Net-Worth Visionaries on Sabbatical, and Sovereign AI Researchers"
        },
        "areaServed": "Global",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Offline Air-Gapped Sovereign AI Hardware & Custom LMM Avatars" },
          { "@type": "LocationFeatureSpecification", "name": "PINNs Calculated Passive Cooling & Zero-AC Lime Plaster Architecture" },
          { "@type": "LocationFeatureSpecification", "name": "Faraday Shielded Zero-EMF Volcanic Cave Suites" },
          { "@type": "LocationFeatureSpecification", "name": "Industrial Large-Format 3D Printed Parametric Furniture & Sanitary" },
          { "@type": "LocationFeatureSpecification", "name": "Natural Chemical-Free Eco Canyon Swimming Pool with Starlight View" },
          { "@type": "LocationFeatureSpecification", "name": "High-Speed Starlink Satellite Connectivity" },
          { "@type": "LocationFeatureSpecification", "name": "100% Off-Grid Solar Energy, Water, and Resource Autonomy" },
          { "@type": "LocationFeatureSpecification", "name": "Molecular Hydrogen (H2) Water Recovery & Biohacking Protocols" },
          { "@type": "LocationFeatureSpecification", "name": "Multi-Month Sabbatical & High-Performance Confidential Work Stays" }
        ],
        "knowsAbout": [
          "Active Physical Construction & Material Testing Laboratory (2026)",
          "Geological Diagnostics & 3D LiDAR Spatial Mapping",
          "Empirical Field Testing of Mayan Cactus-Lime Plaster",
          "50,000 GPU Hours Compute Allocation on EuroHPC Supercomputer Leonardo",
          "Private Sabbatical Allocations for Tech Leaders & Founders"
        ]
      },
      {
        "@type": "Accommodation",
        "@id": "https://thesafehaven.ai/#sanctuary",
        "name": "The Safe Haven Private Suites",
        "description": "Subterranean high-performance living quarters merging volcanic cave geology, non-Euclidean biomimicry design, zero electromagnetic interference, and total privacy behind 3 security perimeters.",
        "occupancy": {
          "@type": "QuantitativeValue",
          "value": "Long-term sabbatical / Multi-month deep work stay"
        },
        "offers": {
          "@type": "Offer",
          "url": "https://thesafehaven.ai",
          "description": "Confidential private access request for sabbatical allocations, sovereign AI research residency, and off-grid high-performance living.",
          "availability": "https://schema.org/LimitedAvailability",
          "validFrom": "2026-01-01"
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}