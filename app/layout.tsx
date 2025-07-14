import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Konzistence názoru",
  description: "Aplikace pro zkoumání názorové konzistence",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
