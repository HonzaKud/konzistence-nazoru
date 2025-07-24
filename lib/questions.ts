// lib/questions.ts

export type Question = {
  id: number;
  text: string;
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Měli by homosexuální páry mít možnost uzavřít manželství?",
  },
  {
    id: 2,
    text: "Měli by mít stejné daňové výhody jako manželé?",
  },
  {
    id: 3,
    text: "Měli by mít homosexuální partneři právo na informace v nemocnici o zdravotním stavu druhého?",
  },
  {
    id: 4,
    text: "Měli by mít právo na společný majetek a dědictví stejně jako manželé?",
  },
  {
    id: 5,
    text: "Měl by stát právně uznat partnerské svazky stejným způsobem jako manželství?",
  },
  // Zatím 5 – další můžeme doplnit
];
