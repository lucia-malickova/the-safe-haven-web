import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "The Safe Haven AI",
  description: "AI Powered Retreats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}