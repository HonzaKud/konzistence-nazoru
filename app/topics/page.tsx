"use client";

import Link from "next/link";
import { topics } from "../../lib/topics";

export default function TopicsPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Vyber si téma</h1>
      <div className="flex flex-col gap-4">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            href={`/${topic.id}/start`}
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300 shadow-md"
          >
            {topic.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
