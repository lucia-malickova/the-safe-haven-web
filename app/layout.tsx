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
      <body>{children}</body>
    </html>
  );
}