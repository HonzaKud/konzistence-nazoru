"use client";

import { useRouter, useParams } from "next/navigation";
import { questions } from "../../../lib/questions";
import QuestionCard from "../../../components/QuestionCard";

export default function QuestionPage() {
  const router = useRouter();
  const params = useParams();

  const id = parseInt(params.id as string, 10);
  const question = questions.find((q) => q.id === id);

  if (!question) {
    return <div className="p-6 text-center text-red-600">Otázka nenalezena.</div>;
  }

  function handleAnswer(answer: "yes" | "no") {
    // TODO: Uložit odpověď (zatím nic)
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
