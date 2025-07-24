"use client";

type Props = {
  text: string;
  onAnswer: (answer: "yes" | "no") => void;
};

export default function QuestionCard({ text, onAnswer }: Props) {
  return (
    <div className="text-center bg-white bg-opacity-80 backdrop-blur-md p-10 rounded-2xl shadow-xl">
      <p className="text-2xl font-semibold mb-10">{text}</p>
      <div className="flex justify-center gap-8">
        <button
          onClick={() => onAnswer("yes")}
          className="px-8 py-3 rounded-full text-white font-bold text-lg bg-green-500 hover:bg-green-600 transition duration-300 shadow-md"
        >
          Ano
        </button>
        <button
          onClick={() => onAnswer("no")}
          className="px-8 py-3 rounded-full text-white font-bold text-lg bg-red-500 hover:bg-red-600 transition duration-300 shadow-md"
        >
          Ne
        </button>
      </div>
    </div>
  );
}
