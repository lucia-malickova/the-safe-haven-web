import { Analytics } from "@vercel/analytics/vue";
import "./globals.css";

export const metadata = {
  title: "The Safe Haven",
  description: "AI Powered Retreats",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      import { Analytics } from '@vercel/analytics/react';

// ... vnútri RootLayout return:
<Analytics />
      <body>{children}</body>
    </html>
  );
}