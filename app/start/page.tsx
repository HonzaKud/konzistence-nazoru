"use client";

import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  function handleStart(answer: "yes" | "no") {
    // Uložení výchozí odpovědi
    localStorage.setItem("initialAnswer", answer);
    // Vyčištění případných starých odpovědí
    localStorage.removeItem("answers");

    // Přechod na první otázku
    router.push("/question/1");
  }

  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center px-4">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Měli by mít homosexuální páry stejná práva jako heterosexuální páry?
      </h1>

      <div className="flex gap-6">
        <button
          onClick={() => handleStart("yes")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow-md"
        >
          Ano
        </button>
        <button
          onClick={() => handleStart("no")}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow-md"
        >
          Ne
        </button>
      </div>
    </main>
  );
}
