"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Co když to není černobílé?</h1>

      <p className="max-w-xl text-lg mb-8 text-gray-700">
        Tahle stránka není test. Nenabízí správné nebo špatné odpovědi. Jejím cílem je ukázat, jak konzistentní je náš názor, když ho aplikujeme na různé konkrétní situace.
        <br /><br />
        Vybereme jedno téma. Položíme vám jednoduchou úvodní otázku. A pak dvacet dalších, které budou čím dál složitější.
        <br /><br />
        Vaše odpovědi se nikam neukládají. Nikdo je neuvidí. Můžete si test udělat opakovaně a zkusit si projít cestu znovu.
        <br /><br />
        Témata, kterým se věnujeme, bývají složitá. Cílem není rozhodnout, kdo má pravdu. Cílem je přemýšlet – porozumět lépe sobě, a možná i trochu lépe lidem kolem nás.
      </p>

      <Link href="/start">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300 shadow-md">
          Začít
        </button>
      </Link>
    </main>
  );
}
