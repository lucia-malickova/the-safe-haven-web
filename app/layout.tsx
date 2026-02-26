import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "The Safe Haven | Sovereign Living & Private AI Sanctuary",
  description: "Experience ultimate security in cave architecture. Your private AI and data protected within stone walls. An exclusive sanctuary for digital nomads, digital experts seeking autonomy and peace.",
  keywords: ["private AI", "sovereign living", "cave architecture", "data privacy", "autonomous living", "digital nomad sanctuary", "healthy housing"],
  alternates: {
    canonical: 'https://thesafehaven.ai',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}