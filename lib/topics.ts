export type Question = {
  id: number;
  text: string;
};

export type Topic = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

export const topics: Topic[] = [
  {
    id: "lgbt",
    title: "Rovná práva pro homosexuální páry",
    description:
      "Otázky zaměřené na rovná práva pro homosexuální páry a postoje k nim.",
    questions: [
      { id: 1, text: "Je v pořádku, když se dva lidé stejného pohlaví na veřejnosti drží za ruce?" },
  { id: 2, text: "Měli by mít homosexuální páry možnost uzavřít manželství?" },
  { id: 3, text: "Měli by mít homosexuální páry stejné daňové úlevy jako heterosexuální manželé?" },
  { id: 4, text: "Měla by být tzv. konverzní terapie (pokusy měnit sexuální orientaci) zakázána zákonem?" },
  { id: 5, text: "Měla by být homosexualita ve školách představována jako jedna z běžných variant sexuální orientace?" },
  { id: 6, text: "Může otevřené přiznání vlastní orientace (coming out) pozitivně ovlivnit společnost?" },
  { id: 7, text: "Měly by být rodiny tvořené homosexuálními páry běžně zobrazovány i v reklamách a pohádkách?" },
  { id: 8, text: "Mělo by být legálně umožněno, aby homosexuální pár využil náhradní matku?" },
  { id: 9, text: "Měli by mít homosexuální páry právo adoptovat děti?" },
  { id: 10, text: "Pokud o adopci jednoho dítěte usiluje homosexuální a heterosexuální pár se srovnatelnými podmínkami, měly by mít oba páry stejnou šanci bez automatické přednosti jednoho z nich?" }
    ],
  },
  {
    id: "ai",
    title: "Umělá inteligence a její vliv na společnost",
    description: "Otázky o přínosech, rizicích a regulaci AI.",
    questions: [
      { id: 1, text: "Může umělá inteligence zlepšit kvalitu života lidí?" },
      { id: 2, text: "Měli by roboti a AI mít omezené využití v rozhodování o lidských osudech?" },
      { id: 3, text: "Může AI nahradit některé lidské profese bez negativního dopadu na společnost?" },
      { id: 4, text: "Měla by být AI používána v armádě?" },
      { id: 5, text: "Měla by být AI regulována zákony na mezinárodní úrovni?" },
      { id: 6, text: "Může AI přispět k lepšímu vzdělávání?" },
      { id: 7, text: "Měli by mít lidé právo vědět, kdy komunikují s AI a ne s člověkem?" },
      { id: 8, text: "Měla by být AI využívána při výběru uchazečů do zaměstnání?" },
      { id: 9, text: "Může AI pomoci v boji s klimatickými změnami?" },
      { id: 10, text: "Měla by AI vždy pracovat transparentně (aby šlo vysvětlit její rozhodnutí)?" },
    ],
  },
];
