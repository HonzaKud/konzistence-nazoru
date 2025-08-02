"use client";

import { useRouter, useParams } from "next/navigation";
import { topics } from "../../../lib/topics";

export default function StartPage() {
  const router = useRouter();
  const { topicId } = useParams();
  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return <div className="p-6 text-center text-red-600">Téma nenalezeno.</div>;
  }

  function handleStart(answer: "yes" | "no") {
    localStorage.setItem("initialAnswer", answer);
    localStorage.setItem("topicId", topicId as string);
    localStorage.removeItem("answers");
    router.push(`/${topicId}/question/1`);
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 text-center">
      <h1 className="text-2xl font-semibold mb-6">{topic.title}</h1>
      <p className="mb-4 text-gray-700">{topic.description}</p>

      <div className="flex gap-6">
        <button
          onClick={() => handleStart("yes")}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Ano
        </button>
        <button
          onClick={() => handleStart("no")}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Ne
        </button>
      </div>
    </main>
  );
}
