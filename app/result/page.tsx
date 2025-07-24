"use client";

import { useEffect, useState } from "react";

type Answer = {
  id: number;
  answer: "yes" | "no";
};

export default function ResultPage() {
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("answers");
    if (!stored) {
      setScore(null);
      return;
    }

    const answers: Answer[] = JSON.parse(stored);
    const total = answers.length;

    // Najdeme první odpověď jako výchozí názor
    const base = answers[0]?.answer;
    const consistent = answers.filter((a) => a.answer === base).length;

    const result = Math.round((consistent / total) * 100);
    setScore(result);

    // (Nepovinné) Vyčištění localStorage po zobrazení výsledku
    // localStorage.removeItem("answers");
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Výsledek</h2>

      {score !== null ? (
        <>
          <p className="text-lg mb-4">
            Vaše odpovědi byly konzistentní s vaším výchozím postojem z <strong>{score}%</strong>.
          </p>
          <p className="max-w-xl text-sm text-gray-600">
            Pokud jste někde odpověděli jinak, než odpovídá vaší první odpovědi, ukazuje to,
            že téma vnímáte v širších souvislostech – a to je v pořádku.
          </p>
        </>
      ) : (
        <p>Odpovědi nebyly nalezeny.</p>
      )}
    </main>
  );
}
