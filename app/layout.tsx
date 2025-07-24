// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata = {
  title: "Konzistence názoru",
  description: "Zamysli se nad tím, jak konzistentní jsou tvé postoje.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body className="bg-gradient-to-br from-purple-100 via-white to-blue-100 text-gray-900 font-sans min-h-screen">
        <header className="w-full border-b border-gray-200 py-4 px-6 mb-6 shadow-sm bg-white bg-opacity-80 backdrop-blur">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/">
              <h1 className="text-xl font-semibold text-purple-700 hover:underline">
                Konzistence názoru
              </h1>
            </Link>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
