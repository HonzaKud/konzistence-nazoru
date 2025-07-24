"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { questions } from "../../../lib/questions";
import QuestionCard from "../../../components/QuestionCard";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();

  const id = parseInt(params.id as string, 10);
  const question = questions.find((q) => q.id === id);

  useEffect(() => {
    // Pokud někdo navštíví přímo /question bez odpovědi na start, smažeme předchozí odpovědi
    if (id === 1) {
      localStorage.removeItem("answers");
    }
  }, [id]);

  if (!question) {
    return (
      <div className="p-6 text-center text-red-600">
        Otázka nenalezena.
      </div>
    );
  }

  function handleAnswer(answer: "yes" | "no") {
    // Načtení předchozích odpovědí z localStorage
    const existing = localStorage.getItem("answers");
    const parsed = existing ? JSON.parse(existing) : [];

    // Přidání aktuální odpovědi
    const updated = [...parsed, { id, answer }];

    // Uložení zpět
    localStorage.setItem("answers", JSON.stringify(updated));

    // Navigace na další otázku nebo výsledek
    const nextQuestion = questions.find((q) => q.id === id + 1);
    if (nextQuestion) {
      router.push(`/question/${nextQuestion.id}`);
    } else {
      router.push("/result");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <QuestionCard text={question.text} onAnswer={handleAnswer} />
    </main>
  );
}
