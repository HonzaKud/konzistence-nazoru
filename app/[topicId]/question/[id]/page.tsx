"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { topics } from "../../../../lib/topics";
import QuestionCard from "../../../../components/QuestionCard";
import ProgressBar from "../../../../components/ProgressBar";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams() as { topicId: string; id: string };

  const topicId = params.topicId;
  const questionId = parseInt(params.id, 10);

  // Najdeme téma
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return <div className="p-6 text-center text-red-600">Téma nenalezeno.</div>;
  }

  // Najdeme otázku
  const question = topic.questions.find((q) => q.id === questionId);

  useEffect(() => {
    // Smažeme staré odpovědi, pokud začínáme nově
    if (questionId === 1) {
      localStorage.removeItem("answers");
    }
  }, [questionId]);

  if (!question) {
    return <div className="p-6 text-center text-red-600">Otázka nenalezena.</div>;
  }

  function handleAnswer(answer: "yes" | "no") {
    const existing = localStorage.getItem("answers");
    const parsed = existing ? JSON.parse(existing) : [];
    const updated = [...parsed, { id: questionId, answer }];
    localStorage.setItem("answers", JSON.stringify(updated));

    // Používáme topic! pro jistotu, že není undefined
    const nextQuestion = topic!.questions.find((q) => q.id === questionId + 1);

    if (nextQuestion) {
      router.push(`/${topicId}/question/${nextQuestion.id}`);
    } else {
      router.push(`/${topicId}/result`);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 w-full">
      <ProgressBar current={questionId} total={topic!.questions.length} />
      <QuestionCard text={question.text} onAnswer={handleAnswer} />
    </main>
  );
}
