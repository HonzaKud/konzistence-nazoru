"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { questions } from "../../../lib/questions";
import QuestionCard from "../../../components/QuestionCard";
import ProgressBar from "../../../components/ProgressBar";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();

  const id = parseInt(params.id as string, 10);
  const question = questions.find((q) => q.id === id);

  useEffect(() => {
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
    const existing = localStorage.getItem("answers");
    const parsed = existing ? JSON.parse(existing) : [];
    const updated = [...parsed, { id, answer }];

    localStorage.setItem("answers", JSON.stringify(updated));

    const nextQuestion = questions.find((q) => q.id === id + 1);
    if (nextQuestion) {
      router.push(`/question/${nextQuestion.id}`);
    } else {
      router.push("/result");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 w-full text-center">
      <ProgressBar current={id} total={questions.length} />
      <QuestionCard text={question.text} onAnswer={handleAnswer} />
    </main>
  );
}
