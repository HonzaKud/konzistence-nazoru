"use client";

import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  function handleAnswer(answer: "yes" | "no") {
    // Později sem uložíme odpověď do state nebo contextu
    router.push("/question/1");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Měli by mít homosexuální páry stejná práva jako heterosexuální páry?
      </h2>

      <div className="flex gap-6">
        <button
          onClick={() => handleAnswer("yes")}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Ano
        </button>
        <button
          onClick={() => handleAnswer("no")}
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
        >
          Ne
        </button>
      </div>
    </main>
  );
}
