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
      "Měli by mít homosexuální páry stejná práva jako heterosexuální páry?",
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
      { id: 1, text: "Lorem ipsum dolor sit amet?" },
    { id: 2, text: "Consectetur adipiscing elit?" },
    { id: 3, text: "Sed do eiusmod tempor incididunt ut labore?" },
    { id: 4, text: "Et dolore magna aliqua?" },
    { id: 5, text: "Ut enim ad minim veniam?" },
    { id: 6, text: "Quis nostrud exercitation ullamco laboris nisi?" },
    { id: 7, text: "Ut aliquip ex ea commodo consequat?" },
    { id: 8, text: "Duis aute irure dolor in reprehenderit?" },
    { id: 9, text: "In voluptate velit esse cillum dolore?" },
    { id: 10, text: "Eu fugiat nulla pariatur?" },
    ],
  },
  {
  id: "lorem",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  questions: [
    { id: 1, text: "Lorem ipsum dolor sit amet?" },
    { id: 2, text: "Consectetur adipiscing elit?" },
    { id: 3, text: "Sed do eiusmod tempor incididunt ut labore?" },
    { id: 4, text: "Et dolore magna aliqua?" },
    { id: 5, text: "Ut enim ad minim veniam?" },
    { id: 6, text: "Quis nostrud exercitation ullamco laboris nisi?" },
    { id: 7, text: "Ut aliquip ex ea commodo consequat?" },
    { id: 8, text: "Duis aute irure dolor in reprehenderit?" },
    { id: 9, text: "In voluptate velit esse cillum dolore?" },
    { id: 10, text: "Eu fugiat nulla pariatur?" },
  ],
},
];
