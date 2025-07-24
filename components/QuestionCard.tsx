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
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 shadow"
        >
          Ano
        </button>
        <button
          onClick={() => onAnswer("no")}
          className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 shadow"
        >
          Ne
        </button>
      </div>
    </div>
  );
}
