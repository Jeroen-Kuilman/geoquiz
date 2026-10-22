import { FaFlag, FaCity } from "react-icons/fa";
export const QUIZ_TYPES = {
  flag: {
    value: "flag",
    label: "Flag recognition",
    icon: FaFlag,
  },
  capital: {
    value: "capital",
    label: "Capital cities",
    icon: FaCity,
  },
};

export const QUIZ_SETTINGS = {
  difficulty: {
    easy: "easy",
    medium: "medium",
    hard: "hard",
  },
  questionsAmount: {
    low: 5,
    average: 10,
    high: 20,
  },
};
