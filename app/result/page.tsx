"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Answer = {
  id: number;
  answer: "yes" | "no";
};

export default function ResultPage() {
  const [initial, setInitial] = useState<"yes" | "no" | null>(null);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [analysis, setAnalysis] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const initialAnswer = localStorage.getItem("initialAnswer") as "yes" | "no" | null;
    const stored = localStorage.getItem("answers");

    if (!initialAnswer || !stored) return;

    const parsed: Answer[] = JSON.parse(stored);
    setInitial(initialAnswer);
    setAnswers(parsed);

    const total = parsed.length;
    const yesCount = parsed.filter((a) => a.answer === "yes").length;
    const noCount = parsed.filter((a) => a.answer === "no").length;

    let resultText = "";

    if (initialAnswer === "yes") {
      if (noCount === 0) {
        resultText = "Vaše odpovědi jsou plně konzistentní s vaší první odpovědí.";
      } else {
        resultText = "Vaše odpovědi nejsou úplně konzistentní – v některých otázkách jste odpověděli odlišně.";
      }
    }

    if (initialAnswer === "no") {
      if (noCount > 0) {
        resultText = "Vaše odpovědi jsou konzistentní s vaší první odpovědí, ale ukazují, že nejste proti všemu.";
      } else {
        resultText = "Vaše odpovědi nejsou konzistentní – začali jste nesouhlasem, ale pak jste odpověděli ANO na všechny další otázky.";
      }
    }

    const summary = `Celkem z ${total} odpovědí bylo ${yesCount}× ANO (${Math.round(
      (yesCount / total) * 100
    )} %) a ${noCount}× NE (${Math.round((noCount / total) * 100)} %).`;

    setAnalysis(`${summary} ${resultText}`);
  }, []);

  const handleRestart = () => {
    localStorage.removeItem("answers");
    localStorage.removeItem("initialAnswer");
    router.push("/");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Výsledek</h2>

      {initial ? (
        <>
          <p className="mb-4">
            Vaše původní odpověď:{" "}
            <strong className={initial === "yes" ? "text-green-600" : "text-blue-600"}>
              {initial === "yes" ? "ANO" : "NE"}
            </strong>
          </p>
          <p className="max-w-xl text-lg text-gray-700 mb-4">{analysis}</p>
          <p className="max-w-xl text-sm text-gray-600 mb-8">
            Tento test nehodnotí správnost odpovědí. Jeho cílem je ukázat, jak moc se vaše další odpovědi shodují s tou první.
            Rozdíly neznamenají chybu – jen to, že váš názor má nuance a není černobílý.
          </p>
          <button
            onClick={handleRestart}
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300 shadow-md"
          >
            Začít znovu
          </button>
        </>
      ) : (
        <p className="text-red-600">Odpovědi nebyly nalezeny.</p>
      )}
    </main>
  );
}
