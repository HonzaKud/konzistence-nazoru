"use client";

type Props = {
  text: string;
  onAnswer: (answer: "yes" | "no") => void;
};

export default function QuestionCard({ text, onAnswer }: Props) {
  return (
    <div className="text-center">
      <p className="text-xl font-medium mb-6">{text}</p>
      <div className="flex justify-center gap-6">
        <button
          onClick={() => onAnswer("yes")}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
        >
          Ano
        </button>
        <button
          onClick={() => onAnswer("no")}
          className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
        >
          Ne
        </button>
      </div>
    </div>
  );
}
